import React, { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useUserProfileStore, selectUserProfile, selectUserFullName } from '../stores/userProfileStore';
import type { UpdateUserProfilePayload } from '../../../core/types/api/user';

export const UserProfileDisplay: React.FC = () => {
  const { data: userProfile, isLoading, error } = useUserProfileStore(selectUserProfile, shallow);
  const fullName = useUserProfileStore(selectUserFullName);
  
  const fetchUserProfile = useUserProfileStore(state => state.fetchUserProfile);
  const updateUserProfile = useUserProfileStore(state => state.updateUserProfile);
  const isUpdating = useUserProfileStore(state => state.isUpdatingProfile);
  const updateError = useUserProfileStore(state => state.updateProfileError);

  useEffect(() => {
    if (!userProfile && !isLoading && !error) {
      fetchUserProfile();
    }
  }, [userProfile, isLoading, error, fetchUserProfile]);

  const handleUpdateProfile = async () => {
    const examplePayload: UpdateUserProfilePayload = {
      people: {
        first_name: 'UpdatedFirstName',
        last_name: userProfile?.person?.last_name || 'LastName',
      },
      newsletter_active: true,
    };
    const success = await updateUserProfile(examplePayload);
    if (success) {
      // alert('Profile updated successfully!');
    } else {
      // alert(`Profile update failed: ${updateError?.message || 'Unknown error'}`);
    }
  };

  if (isLoading && !userProfile) {
    return <div>Loading user profile...</div>;
  }

  if (error) {
    return <div>Error loading profile: {error.message}</div>;
  }

  if (!userProfile) {
    return <div>No user profile data. <button onClick={fetchUserProfile}>Retry</button></div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Welcome, {fullName || userProfile.username}!</p>
      <p>Email: {userProfile.email}</p>
      <p>User ID: {userProfile.id}</p>
      <p>Roles: {userProfile.roles.map(role => role.title).join(', ')}</p>
      <p>Newsletter: {userProfile.newsletter_active ? 'Subscribed' : 'Not Subscribed'}</p>

      {userProfile.partner && (
        <div>
          <h2>Partner Information</h2>
          <p>Partner Full Name: {userProfile.partner.fullname}</p>
          <p>Partner Since: {new Date(userProfile.partner.created_at).toLocaleDateString()}</p>
        </div>
      )}
      
      <button onClick={handleUpdateProfile} disabled={isUpdating}>
        {isUpdating ? 'Updating...' : 'Update Profile (Example)'}
      </button>
      {updateError && <p style={{color: 'red'}}>Update Error: {updateError.message}</p>}
    </div>
  );
};
