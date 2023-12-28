import { httpClient } from '../httpClient';

// interface IResponse {
//   id: string;
//   name: string;
//   shepherd_id: string;
//   members: Member[];
// }
export async function getAll() {
  const { data } = await httpClient.get('/offices');

  return data;
}
