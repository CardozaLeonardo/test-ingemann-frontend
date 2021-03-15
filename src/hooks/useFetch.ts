import useSWR from 'swr';
import { Api } from '../components/util/api';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useFetch(endpoint: string) {
  const { data, error, isValidating, mutate } = useSWR(
    `${Api.BASE_URL}${endpoint}`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
    isValidating,
  };
}
