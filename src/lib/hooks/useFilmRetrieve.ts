import { useQuery, useQueryClient } from "@tanstack/react-query";

import { filmRetrieveQuery } from "@/lib/api";

export const useFilmRetrieve = (id: string) => {
  const queryClient = useQueryClient();

  const {
    data: filmRetrieve,
    isSuccess,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["getFilmRetrieve", id],
    queryFn: () => filmRetrieveQuery(id),
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
    enabled: id !== "",
  });

  const updateFilmRetrieve = () => {
    return queryClient.invalidateQueries({
      queryKey: ["getFilmRetrieve"],
    });
  };

  return {
    filmRetrieve,
    updateFilmRetrieve,
    isSuccess,
    isLoading,
    isError,
  };
};
