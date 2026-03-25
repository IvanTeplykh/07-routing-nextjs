'use client';

import { useRouter } from 'next/navigation';
import Modal from '../../../../../components/Modal/Modal';
import NotePreview from '../../../../../components/NotePreview';

export default function NotePreviewModal({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreview id={params.id} />
    </Modal>
  );
}
