export interface IUserData {
  id: string;
  status: boolean;
  name: string;
  tin: string;
  city: string;
  zip: string;
  registeredAt: Date;
  img: string;
  address: string;
}

export interface IUF {
  uf: string,
  estado: string,
}