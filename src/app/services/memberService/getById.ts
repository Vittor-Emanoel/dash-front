import { httpClient } from '../httpClient';

export async function getById(id: string) {
  const { data } = await httpClient.get(`/members/${id}`);

  return data;
}
