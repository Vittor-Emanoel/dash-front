import { Member } from '@app/entities/Member';
import { httpClient } from '../httpClient';
import { IChurch } from '@app/entities/Church';
import { IOffice } from '@app/entities/Office';

export interface UpdateMemberParams {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  church: IChurch;
  office: IOffice;
}

export async function update({ id, ...params }: UpdateMemberParams) {
  const { data } = await httpClient.put(`/members/${id}`, params);

  return data;
}
