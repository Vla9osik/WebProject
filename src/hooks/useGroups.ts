import { useQuery } from '@tanstack/react-query';
import { getStudentsApi } from '@/api/groupsApi';
import type GroupInterface from '@/types/GroupInterface';

interface GroupsHookInterface {
  groups: GroupInterface[];
}

const useGroups = (): GroupsHookInterface => {
  // const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['groups'],
    queryFn: () => getStudentsApi(),
    enabled: false,
  });

  return {
    groups: data ?? [],
  };
};

export default useGroups;
