import { httpClient } from '../httpClient';

export interface CreateMemberParams {
  fullName: string;
  phone: string;
  address: string;
  houseNumber: string;
  cep: string;
  churchId: string;
  officeId: string;
}

export async function create(params: CreateMemberParams) {
  const { data } = await httpClient.post('/members', params);

  return data;
}
