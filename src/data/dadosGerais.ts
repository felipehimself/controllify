import { IUF } from '../interfaces/interfaces';

export interface IData {
  name: string;
  path: string;
}

export const dadosInicio: IData[] = [
  { name: 'listar empresas', path: 'empresas' },
  { name: 'cadastrar empresas', path: 'cadastrar' },
];

export const ufData: IUF[] = [
  { uf: 'RO', estado: 'Rondônia' },
  { uf: 'AC', estado: 'Acre' },
  { uf: 'AM', estado: 'Amazonas' },
  { uf: 'RR', estado: 'Roraima' },
  { uf: 'PA', estado: 'Pará' },
  { uf: 'AP', estado: 'Amapá' },
  { uf: 'TO', estado: 'Tocantins' },
  { uf: 'PI', estado: 'Maranhão' },
  { uf: 'CE', estado: 'Ceará' },
  { uf: 'RN', estado: 'Paraíba' },
  { uf: 'PB', estado: 'Paraíba' },
  { uf: 'PE', estado: 'Pernambuco' },
  { uf: 'AL', estado: 'Alagoas' },
  { uf: 'SE', estado: 'Sergipe' },
  { uf: 'BA', estado: 'Bahia' },
  { uf: 'MG', estado: 'Minas Gerais' },
  { uf: 'ES', estado: 'Espírito Santo' },
  { uf: 'RJ', estado: 'Rio de Janeiro' },
  { uf: 'SP', estado: 'São Paulo' },
  { uf: 'PR', estado: 'Paraná' },
  { uf: 'SC', estado: 'Santa Catarina' },
  { uf: 'RS', estado: 'Rio Grande do Sul' },
  { uf: 'MS', estado: 'Mato Grosso do Sul' },
  { uf: 'MT', estado: 'Mato Grosso' },
  { uf: 'GO', estado: 'Goiás' },
  { uf: 'DF', estado: 'Distrito Federal' },
];
