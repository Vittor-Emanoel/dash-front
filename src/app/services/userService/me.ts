import { httpClient } from '../httpClient';

export async function me() {
  const { data } = await httpClient.get('/admins/me');

  return data;
}
