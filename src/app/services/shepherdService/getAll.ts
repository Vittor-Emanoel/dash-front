import { httpClient } from '../httpClient';

export async function getAll() {
  const { data } = await httpClient.get('/users');

  return data;
}
