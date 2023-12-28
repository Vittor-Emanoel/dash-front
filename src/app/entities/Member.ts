import { IChurch } from './Church';
import { IOffice } from './Office';

export interface Member {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  church: IChurch;
  office: IOffice;
}
