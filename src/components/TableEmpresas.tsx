import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import TableTitle from './TableTitle';
import { useDispatch } from 'react-redux';
import styles from '../styles/styles';
import ConfirmMsg from './ConfirmMsg';

import { fireConfirm } from '../features/confirmSlice';
const TableEmpresas = () => {
  const { dados } = useSelector((state: RootState) => state.dados);
  const confirmState = useSelector((state: RootState) => state.confirmState);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {confirmState.value && <ConfirmMsg {...confirmState} />}
      <TableTitle path={'Empresas'} />
      <Table height={400} data={dados} onRowClick={(data) => {}}>
        <Column width={200} fixed>
          <HeaderCell>Empresa</HeaderCell>
          <Cell dataKey='razaoSocialOuNome' />
        </Column>
        <Column width={180}>
          <HeaderCell>CNPJ</HeaderCell>
          <Cell dataKey='cnpjOuCpf' />
        </Column>
        <Column width={150}>
          <HeaderCell>Cidade</HeaderCell>
          <Cell dataKey='cidade' />
        </Column>
        <Column width={80}>
          <HeaderCell>UF</HeaderCell>
          <Cell dataKey='uf' />
        </Column>
        <Column width={100}>
          <HeaderCell>CEP</HeaderCell>
          <Cell dataKey='cep' />
        </Column>
        <Column width={200}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey='email' />
        </Column>
        <Column width={160}>
          <HeaderCell>Abertura</HeaderCell>
          <Cell dataKey='abertura' />
        </Column>
        <Column width={120} fixed='right'>
          <HeaderCell>&nbsp;</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <div>
                  <Link
                    to={`/empresas/editar/${rowData.id}`}
                    className='btn-edit'
                  >
                    Editar
                  </Link>
                  <span className='bar-placeholder'>|</span>
                  <button
                    className='btn-remove'
                    onClick={() =>
                      dispatch(
                        fireConfirm({
                          value: true,
                          msg: 'Deseja mesmo prosseguir?',
                          id: rowData.id,
                        })
                      )
                    }
                  >
                    Remover
                  </button>
                </div>
              );
            }}
          </Cell>
        </Column>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 9.7rem 5rem 0 10.8rem;
  font-size: 1.2rem;

  .btn-edit {
    color: #333;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
    &:hover {
      border-bottom: 1px solid ${styles.secondaryColor};
    }
  }

  .btn-remove {
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    color: #333;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      border-bottom: 1px solid ${styles.secondaryColor};
    }
  }

  .bar-placeholder {
    padding: 0 5px;
    color: #333;
  }
`;
export default TableEmpresas;