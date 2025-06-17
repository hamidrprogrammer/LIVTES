// File: ge/new project/app/profile/documents/page.tsx

import { DocumentListPage } from '@/features/documents/components/DocumentListPage';
import { ProfileHeader } from '@/features/user/components/profile/ProfileHeader';

export default function DocumentsPage() {
  return (
    <div>
      <ProfileHeader title="My Documents" />
      <DocumentListPage />
    </div>
  );
}