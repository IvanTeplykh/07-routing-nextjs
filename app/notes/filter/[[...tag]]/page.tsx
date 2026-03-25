import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "../../../../lib/api";
import NotesClient from "../../Notes.client";

interface FilterPageProps {
  params: {
    tag?: string[];
  };
}

export default async function FilterPage({ params }: FilterPageProps) {
  const { tag: tagParams } = params;
  const tag = tagParams && tagParams[0] !== "all" ? tagParams[0] : undefined;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", "", 1, tag],
    queryFn: () => fetchNotes({ search: "", page: 1, perPage: 12, tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
