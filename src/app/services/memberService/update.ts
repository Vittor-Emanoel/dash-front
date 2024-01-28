import { httpClient } from '../httpClient';

export interface UpdateMemberParams {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  churchId: string;
  officeId: string;
}

export async function update({ id, ...params }: UpdateMemberParams) {
  const { data } = await httpClient.patch(`/members/${id}`, params);

  return data;
}
