export interface Member {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  churchId: string;
  church: {
    id: string;
    name: string;
  };
  office: {
    id: string;
    name: string;
  };
  officeId: string;
}
