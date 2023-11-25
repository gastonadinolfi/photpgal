import AdminChildPage from '@/components/AdminChildPage';
import { PATH_ADMIN, PATH_ADMIN_UPLOADS } from '@/site/paths';
import { extractExifDataFromBlobPath } from '@/photo/server';
import { redirect } from 'next/navigation';

interface Params {
  params: { uploadPath: string }
}

export default async function UploadPage({ params: { uploadPath } }: Params) {
  const {
    blobId
  } = await extractExifDataFromBlobPath(uploadPath);

  if (!blobId) { redirect(PATH_ADMIN); }

  return (
    <AdminChildPage
      backPath={PATH_ADMIN_UPLOADS}
      backLabel="Uploads"
      breadcrumb={blobId}
    >
      {/* Contenido opcional que reemplaza a PhotoForm */}
    </AdminChildPage>
  );
};
