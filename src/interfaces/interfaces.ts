export interface IUserData {
  cnpjOuCpf: string;
  cidade: string;
  uf: string;
  cep: string;
  abertura: string;
  id: string;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  tipoDeDoc: string;
  razaoSocialOuNome: string;
  email: string;
}

export interface IUF {
  uf: string;
  estado: string;
}


export interface IError {
  value: boolean,
  msg?: string | null | undefined
}