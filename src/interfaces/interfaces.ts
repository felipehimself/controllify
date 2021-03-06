export interface ICompany {
  cnpjOuCpf: string;
  cidade: string;
  uf: string;
  cep: string;
  abertura: string;
  id: number;
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
  value: boolean;
  msg: string | null | undefined;
}

export interface IConfirm {
  value: boolean;
  msg: string | null | undefined;
  id: string;
}

export interface IPath {
  name: string;
  path: string;
}

export interface ITableTitle {
  path?: string;
}
