import React, { useState } from 'react';
import { UserProfileResponse } from '@/core/types/api/user';
import { ProfileHeader } from './ProfileHeader';
import { UserInfo } from './UserInfo';
import { ChangePassword } from './ChangePassword';

interface ProfileViewProps {
  userProfile: UserProfileResponse;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ userProfile }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div data-aos="fade-up">
      <ProfileHeader isEditing={isEditing} setIsEditing={setIsEditing} />
      <UserInfo user={userProfile} isEditing={isEditing} onSave={() => setIsEditing(false)} />
      <ChangePassword />
    </div>
  );
}