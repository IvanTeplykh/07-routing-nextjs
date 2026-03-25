'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '../../../../lib/api';
import Loader from '../../../../components/Loader/Loader';

interface NotePreviewProps {
  id: string;
}

export default function NotePreview({ id }: NotePreviewProps) {
  const { data: note, isLoading, error } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <Loader />;
  if (error || !note) return <p>Failed to load note details.</p>;

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <hr />
      <p>Tag: {note.tag}</p>
      <p>Created at: {new Date(note.createdAt).toLocaleString()}</p>
    </div>
  );
}
