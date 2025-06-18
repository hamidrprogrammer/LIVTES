/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import {
  useContactGroupStore,
  selectContactGroupDetail,
  selectAddressValidationStatus,
} from '../stores/contactGroupStore';
import type { ContactGroup } from '../../../core/types/api/contactGroup'; // Ensure this path is correct

interface ContactGroupViewProps {
  contactGroupId: number | string;
}

export const ContactGroupView: React.FC<ContactGroupViewProps> = ({ contactGroupId }) => {
  const {
    data: contactGroup,
    isLoading: isLoadingDetail,
    error: detailError,
  } = useContactGroupStore(
    selectContactGroupDetail(contactGroupId),
    
  ) || initialDetailState; // Provide default if undefined

  const {
    message: validationMessage,
    isValid: addressIsValid,
    isLoading: isValidatingAddress,
    error: validationError,
  } = useContactGroupStore(
    selectAddressValidationStatus(contactGroupId),
    shallow
  ) || initialValidationState; // Provide default if undefined

  const fetchContactGroupDetail = useContactGroupStore(state => state.fetchContactGroupDetail);
  const validateAddress = useContactGroupStore(state => state.validateAddress);
  const clearAddressValidationStatus = useContactGroupStore(state => state.clearAddressValidationStatus);


  useEffect(() => {
    if (contactGroupId && !contactGroup && !isLoadingDetail) {
      fetchContactGroupDetail(contactGroupId);
    }
  }, [contactGroupId, contactGroup, isLoadingDetail, fetchContactGroupDetail]);

  const handleValidateAddress = async () => {
    if (contactGroupId) {
        clearAddressValidationStatus(contactGroupId); // Clear previous status
        const success = await validateAddress(contactGroupId);
        // Message is now in the store, component will re-render
        // You could show a toast or specific UI feedback based on 'success' here if needed
        if(success) {
             
        } else {
            console.warn("Address validation reported failure or error by API.");
        }
    }
  };

  if (isLoadingDetail) {
    return <div>Loading contact group details...</div>;
  }

  if (detailError) {
    return <div>Error loading contact group: {detailError.message}</div>;
  }

  if (!contactGroup) {
    return <div>Contact group not found or not loaded yet.</div>;
  }

  const address = contactGroup.address;

  return (
    <div>
      <h2>Contact Group: {contactGroup.title || `${contactGroup.first_name} ${contactGroup.last_name}`}</h2>
      <p>ID: {contactGroup.id}</p>
      {contactGroup.company_name && <p>Company: {contactGroup.company_name}</p>}
      
      {address && (
        <div>
          <h3>Address:</h3>
          <p>{address.address1}</p>
          {address.address2 && <p>{address.address2}</p>}
          <p>
            {address.postal_code} {address.city}, {address.state}
          </p>
          <p>{address.country?.name}</p>
          <button onClick={handleValidateAddress} disabled={isValidatingAddress}>
            {isValidatingAddress ? 'Validating...' : 'Validate Address'}
          </button>
          {validationMessage && (
            <p style={{ color: addressIsValid === true ? 'green' : (addressIsValid === false ? 'red' : 'orange') }}>
              Validation Status: {validationMessage}
            </p>
          )}
          {validationError && <p style={{color: 'red'}}>Validation API Error: {validationError.message}</p>}
        </div>
      )}
      {!address && <p>No address information available for this contact group.</p>}

      {/* Display phones and emails if available */}
      {contactGroup.phones && contactGroup.phones.length > 0 && (
        <div>
          <h4>Phones:</h4>
          <ul>
            {contactGroup.phones.map((phone: { id: React.Key | null | undefined; number: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; type: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }) => <li key={phone.id}>{phone.number} ({phone.type})</li>)}
          </ul>
        </div>
      )}
      {contactGroup.emails && contactGroup.emails.length > 0 && (
        <div>
          <h4>Emails:</h4>
          <ul>
            {contactGroup.emails.map((email: { id: React.Key | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }) => <li key={email.id}>{email.email}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};
