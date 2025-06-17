// ge/features/user/components/addresses/AddressFormModal.tsx

import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useCreateContactGroupMutation, useUpdateContactGroupMutation, useListContactGroupsQuery } from '@/features/contactGroups/hooks/useContactGroupQueries';
import { ContactGroup, CreateContactGroupPayload, Country, ListContactGroupsParams } from '@/core/types/api/contactGroup';
import { FiX } from 'react-icons/fi';
import { useAuthStore } from '@/features/auth/stores/authStore';
// START: Import the necessary query hook for states
import { useListStatesQuery } from '@/features/settings/hooks/useSettingsQueries';
// END: Import the necessary query hook for states

// --- Styled Components (No changes here) ---

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 24px 32px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: 0;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.textGrey};
  padding: 4px;
  line-height: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #f0f0f0;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px 0; // Adjust gap for single column layout
  }
`;

const FormGroup = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  ${({ fullWidth }) => fullWidth && `grid-column: 1 / -1;`}
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: white;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: #D32F2F;
  font-size: 0.8rem;
  margin: 2px 0 0 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.2s, transform 0.2s;

  &:hover { opacity: 0.9; }
  &:active { transform: scale(0.98); }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.textGrey};
    cursor: not-allowed;
  }
`;

interface AddressFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: ContactGroup | null;
}

type FormErrors = { [key: string]: string };

export const AddressFormModal: React.FC<AddressFormModalProps> = ({ isOpen, onClose, initialData }) => {
  const user = useAuthStore(state => state.user);
  const listParams = useMemo((): ListContactGroupsParams => ({ isArchive: false, per_page: 200 }), []);
  const { data: contactGroupsData } = useListContactGroupsQuery(listParams);

  const countries: Country[] = useMemo(() => {
    if (!contactGroupsData?.data) return [];
    const countryMap = new Map<number, Country>();
    contactGroupsData.data.forEach(group => {
      if (group.country && !countryMap.has(group.country.id)) {
        countryMap.set(group.country.id, group.country);
      }
    });
    return Array.from(countryMap.values());
  }, [contactGroupsData]);

  // START: Add state_id to form data for dropdown binding
  const [formData, setFormData] = useState({
    first_name: '', last_name: '', company_name: '', country_id: 56,
    address1: '', address2: '', postal_code: '', city: '', 
    state: '', state_id: null as number | null, // Added state_id
    phone: '', title: '',
  });
  // END: Add state_id

  const [errors, setErrors] = useState<FormErrors>({});
  
  // START: Fetch states based on the selected countryId
  const { data: statesData, isLoading: isLoadingStates } = useListStatesQuery(
    { countryId: formData.country_id },
    { enabled: !!formData.country_id } // Query only runs if country_id is set
  );
  // END: Fetch states

  useEffect(() => {
    if (isOpen) {
      // START: Ensure state_id is also set from initialData
      const dataToSet = initialData ? {
        first_name: initialData.first_name || '',
        last_name: initialData.last_name || '',
        company_name: initialData.company_name || '',
        country_id: initialData.country_id || 56,
        address1: initialData.address?.address1 || '',
        address2: initialData.address?.address2 || '',
        postal_code: initialData.address?.postal_code || '',
        city: initialData.address?.city || '',
        state: initialData.address?.state || '',
        state_id: initialData.address?.state_id || null, // Set state_id
        phone: initialData.phones?.[0]?.number || '',
        title: initialData.title || `Address for ${initialData.first_name}`,
      } : {
        first_name: '', last_name: '', company_name: '', country_id: 56,
        address1: '', address2: '', postal_code: '', city: '', 
        state: '', state_id: null, // Reset state_id for new form
        phone: '', title: ''
      };
      // END: Ensure state_id is set
      setFormData(dataToSet);
      setErrors({});
    }
  }, [initialData, isOpen]);

  const createMutation = useCreateContactGroupMutation();
  const updateMutation = useUpdateContactGroupMutation();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.country_id) newErrors.country_id = "Country is required.";
    if (!formData.first_name.trim()) newErrors.first_name = "First Name is required.";
    if (!formData.last_name.trim()) newErrors.last_name = "Last Name is required.";
    if (!formData.address1.trim()) newErrors.address1 = "Address Line 1 is required.";
    if (!formData.postal_code.trim()) newErrors.postal_code = "Postal Code is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // START: Reset state when country changes
    if (name === 'country_id') {
        setFormData(prev => ({ ...prev, country_id: Number(value), state: '', state_id: null }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
    // END: Reset state
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !user?.id) return;

    const payload: CreateContactGroupPayload = {
      user_id: user.id,
      title: "Standard",
      first_name: formData.first_name,
      last_name: formData.last_name,
      company_name: formData.company_name,
      country_id: Number(formData.country_id),
      addresses: [{
      title: "Standard",

        address1: formData.address1, address2: formData.address2,
        city: formData.city, postal_code: formData.postal_code,
        state: formData.state,
        first_name: formData.first_name, last_name: formData.last_name,
        state_id: formData.state_id,
      }],
      phones: [{ number: formData.phone, type: 'phone' }],
      translate: { en: { title: formData.title || `${formData.first_name}'s Address`, locale: 'en' } }
    };
    
    if (initialData?.id) {
      updateMutation.mutate({ id: initialData.id, payload }, { onSuccess: onClose });
    } else {
      createMutation.mutate(payload, { onSuccess: onClose });
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{initialData ? 'Edit Address' : 'Add a new address'}</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close"><FiX /></CloseButton>
        </ModalHeader>
        <Form onSubmit={handleSubmit} noValidate>
          <FormGroup fullWidth>
            <Label htmlFor="country_id">* Country</Label>
            <Select id="country_id" name="country_id" value={formData.country_id} onChange={handleChange} required>
              <option value="">Select...</option>
              {countries.map(country => (
                <option key={country.id} value={country.id}>{country.name}</option>
              ))}
            </Select>
            {errors.country_id && <ErrorMessage>{errors.country_id}</ErrorMessage>}
          </FormGroup>
          <FormGrid>
            <FormGroup><Label htmlFor="first_name">* First Name</Label><Input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />{errors.first_name && <ErrorMessage>{errors.first_name}</ErrorMessage>}</FormGroup>
            <FormGroup><Label htmlFor="last_name">* Last Name</Label><Input id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />{errors.last_name && <ErrorMessage>{errors.last_name}</ErrorMessage>}</FormGroup>
          </FormGrid>
          <FormGroup fullWidth><Label htmlFor="company_name">Company Name</Label><Input id="company_name" name="company_name" value={formData.company_name} onChange={handleChange} /></FormGroup>
          <FormGroup fullWidth><Label htmlFor="address1">* Address Line 1</Label><Input id="address1" name="address1" value={formData.address1} onChange={handleChange} required />{errors.address1 && <ErrorMessage>{errors.address1}</ErrorMessage>}</FormGroup>
          <FormGroup fullWidth><Label htmlFor="address2">Address Line 2</Label><Input id="address2" name="address2" value={formData.address2} onChange={handleChange} /></FormGroup>
          <FormGrid>
            <FormGroup><Label htmlFor="postal_code">* Postal Code (ZIP Code)</Label><Input id="postal_code" name="postal_code" value={formData.postal_code} onChange={handleChange} required />{errors.postal_code && <ErrorMessage>{errors.postal_code}</ErrorMessage>}</FormGroup>
            <FormGroup><Label htmlFor="city">* City (Suburb / Town)</Label><Input id="city" name="city" value={formData.city} onChange={handleChange} required />{errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}</FormGroup>
            
            {/* START: Conditional State Input/Select */}
            <FormGroup>
                <Label htmlFor="state">State (Province / County)</Label>
                {isLoadingStates ? (
                    <Input value="Loading states..." disabled />
                ) : statesData && statesData.data && statesData.data.length > 0 ? (
                    <Select name="state" value={formData.state || ''} onChange={handleChange} >
                        <option value="">Select a state...</option>
                        {statesData.data.map(state => (
                            <option key={state.id} value={state.name}>{state.name}</option>
                        ))}
                    </Select>
                ) : (
                    <Input 
                        id="state" 
                        name="state" 
                        placeholder="No states available, enter manually" 
                        value={formData.state || ''} 
                        onChange={handleChange} 
                    />
                )}
            </FormGroup>
            {/* END: Conditional State Input/Select */}
            
            <FormGroup><Label htmlFor="phone">* Phone</Label><Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />{errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}</FormGroup>
          </FormGrid>
          <ButtonContainer>
            <SubmitButton type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
              {createMutation.isPending || updateMutation.isPending ? 'Saving...' : 'Save Address'}
            </SubmitButton>
          </ButtonContainer>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};