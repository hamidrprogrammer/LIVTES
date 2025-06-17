// new project/features/user/components/profile/UserInfo.tsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { UserProfileResponse } from '@/core/types/api/user';
import { userQueryKeys, useUpdateUserProfileMutation } from '../../hooks/useUserQueries';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
// START: Import hooks for languages and countries
import { useListLanguagesQuery, useListCountriesQuery } from '@/features/settings/hooks/useSettingsQueries';
// END: Import hooks
import { format } from 'date-fns';
import { useQueryClient } from '@tanstack/react-query';

// ... Styled Components (Card, Grid, Field, Label, Value, StyledInput, StyledSelect, etc.) remain the same ...
const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px 32px;
`;

const Field = styled.div``;

const Label = styled.p`
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: 0.9rem;
  margin-bottom: 4px;
`;

const Value = styled.p`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1rem;
  font-weight: 500;
  word-wrap: break-word; // برای جلوگیری از سرریز شدن متن‌های طولانی
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 6px;
    font-size: 1rem;
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  font-size: 1rem;
  background-color: white;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const VATWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const SaveButton = styled.button`
  margin-top: 24px;
  padding: 12px 24px;
  width: 100%; // در موبایل تمام عرض باشد
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    opacity: 0.9;
  }
  
  @media (min-width: 768px) {
    width: auto; // در دسکتاپ عرض خودکار
    padding: 10px 20px;
  }
`;


interface UserInfoProps {
  user: UserProfileResponse;
  isEditing: boolean;
  onSave: () => void;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user, isEditing, onSave }) => {
  // Fetch lists for dropdowns
  const { data: languagesData } = useListLanguagesQuery({ page: 1, per_page:250, isActive: 1 });
  const { data: countriesData } = useListCountriesQuery({ page: 1, per_page: 250 }); // Fetch countries
  const genderOptions = ['male', 'female', 'other'];

  const [formData, setFormData] = useState({
    email: '',
    birth_date: '',
    telephone_number: '',
    country_id: null as number | null,
    people: {
      first_name: '',
      last_name: '',
      gender: '',
    },
    language_id: null as number | null,
    vat_number: '',
  });

  useEffect(() => {
    if (user.data) {
      setFormData({
        email: user.data.email ?? '',
        birth_date: user.data.birth_date ?? '',
        telephone_number: user.data.telephone_number ?? '',
        country_id: user.data.country?.id ?? null,
        people: {
          first_name: user.data.person?.first_name ?? '',
          last_name: user.data.person?.last_name ?? '',
          gender: user.data.person?.gender ?? '',
        },
        language_id: user.data.language?.id ?? null,
        vat_number: user.data.vat_number ?? '',
      });
    }
  }, [user]);
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isLoading } = useUpdateUserProfileMutation({
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: userQueryKeys.profile() });
            // Optionally, you can set the query data immediately if the response is the full profile
      alert('Profile updated successfully!');
      onSave();
    },
    onError: (error: any) => {
      alert(`Update failed: ${error.message}`);
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'first_name' || name === 'last_name' || name === 'gender') {
      setFormData(prev => ({ ...prev, people: { ...prev.people, [name]: value } }));
    } else if (name === 'language_id' || name === 'country_id') {
      setFormData(prev => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    const payloadToUpdate = {
      ...formData,
      // Format date only if it exists, otherwise send null or original value
      birth_date: formData.birth_date ? format(new Date(formData.birth_date), 'yyyy-MM-dd') : null,
    };
    updateUser(payloadToUpdate);
  };

  return (
    <Card>
      <Grid>
        {/* First Name - FIXED */}
        <Field>
            <Label>First Name</Label>
            {isEditing ? (
                <StyledInput name="first_name" value={formData.people.first_name} onChange={handleInputChange} />
            ) : (
                <Value>{user.data?.person?.first_name ?? 'N/A'}</Value>
            )}
        </Field>
        
        {/* Last Name - FIXED */}
        <Field>
            <Label>Last Name</Label>
            {isEditing ? (
                <StyledInput name="last_name" value={formData.people.last_name} onChange={handleInputChange} />
            ) : (
                <Value>{user.data?.person?.last_name ?? 'N/A'}</Value>
            )}
        </Field>

        {/* Gender Dropdown */}
        <Field>
            <Label>Gender</Label>
            {isEditing ? (
                 <StyledSelect name="gender" value={formData.people.gender} onChange={handleInputChange}>
                    <option value="" disabled>Select gender...</option>
                    {genderOptions.map(gender => (
                        <option key={gender} value={gender}>
                            {gender.charAt(0).toUpperCase() + gender.slice(1)}
                        </option>
                    ))}
                 </StyledSelect>
            ) : (
                <Value>{user.data?.person?.gender ?? 'N/A'}</Value>
            )}
        </Field>

        {/* E-Mail */}
        <Field>
            <Label>E-Mail</Label>
            {isEditing ? (
                <StyledInput name="email" value={formData.email} onChange={handleInputChange} />
            ) : (
                <Value>{user.data?.email ?? 'N/A'}</Value>
            )}
        </Field>

        <Field>
            <Label>Username</Label>
            <Value>{user.data?.username ?? 'N/A'}</Value>
        </Field>

        <Field>
            <Label>Company Name</Label>
            <Value>{user.data?.partner?.company_name ?? 'N/A'}</Value>
        </Field>

        {/* Birth Date */}
        <Field>
            <Label>Birth Date</Label>
            {isEditing ? (
                <StyledInput name="birth_date" type="date" value={formData.birth_date} onChange={handleInputChange} />
            ) : (
                <Value>{user.data?.birth_date ?? 'N/A'}</Value>
            )}
        </Field>

        {/* Language Dropdown */}
        <Field>
            <Label>Language</Label>
            {isEditing ? (
                <StyledSelect name="language_id" value={formData.language_id ?? ''} onChange={handleInputChange}>
                    <option value="" disabled>Select language...</option>
                    {languagesData?.data?.map(lang => (
                        <option key={lang.id} value={lang.id}>
                            {lang.title}
                        </option>
                    ))}
                </StyledSelect>
            ) : (
                <Value>{user.data?.language?.title ?? 'N/A'}</Value>
            )}
        </Field>

        {/* Country Dropdown - NEW */}
        <Field>
            <Label>Country</Label>
            {isEditing ? (
                <StyledSelect name="country_id" value={formData.country_id ?? ''} onChange={handleInputChange}>
                    <option value="" disabled>Select country...</option>
                    {countriesData?.data?.map(country => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))}
                </StyledSelect>
            ) : (
                <Value>{countriesData?.data?.find(country => country.id === formData.country_id)?.name ?? 'N/A'}</Value>
            )}
        </Field>

        {/* Phone Number */}
        <Field>
            <Label>Phone Number</Label>
            {isEditing ? (
                <StyledInput name="telephone_number" value={formData.telephone_number} onChange={handleInputChange} />
            ) : (
                <Value>{user.data?.telephone_number ?? 'N/A'}</Value>
            )}
        </Field>

        {/* VAT Number */}
        <Field>
          <Label>VAT Number</Label>
          <VATWrapper>
            {isEditing ? (
              <StyledInput name="vat_number" value={formData.vat_number ?? ''} onChange={handleInputChange} />
            ) : (
              <Value>{user.data.vat_number ?? 'N/A'}</Value>
            )}
            {user.data.is_vat_valid ? (
              <FiCheckCircle color="green" size={20} />
            ) : (
              <FiXCircle color="red" size={20} />
            )}
          </VATWrapper>
        </Field>
      </Grid>

      {isEditing && (
        <SaveButton onClick={handleSave} disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save Changes'}
        </SaveButton>
      )}
    </Card>
  );
};