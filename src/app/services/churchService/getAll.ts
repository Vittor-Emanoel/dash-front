import { Member } from '../../entities/Member';
import { httpClient } from '../httpClient';

interface IResponse {
  id: string;
  name: string;
  shepherd_id: string;
  members: Member[];
}
export async function getAll(): Promise<IResponse[]> {
  const { data } = await httpClient.get('/churchs');

  return data;
}
