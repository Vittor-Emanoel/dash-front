import { IChurch } from './Church';
import { IOffice } from './Office';

export interface Member {
  id: string;
  fullName: string;
  phone: string;
  address: string;
  houseNumber: string;
  cep: string;
  church: IChurch;
  office: IOffice;
}
