import React, { useMemo } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Pagination } from 'rsuite';

import 'rsuite-table/dist/css/rsuite-table.css';
import 'rsuite/dist/rsuite.min.css';
// import 'rsuite-table/lib/less/index.less'

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import TableTitle from '../ui/TableTitle';
import { useDispatch } from 'react-redux';
import styles from '../../styles/styles';
import ConfirmModal from './ConfirmModal';

import { fireConfirm } from '../../features/confirmSlice';
const TableEmpresas = () => {
  const [loading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const { dados } = useSelector((state: RootState) => state.dados);
  const confirmState = useSelector((state: RootState) => state.confirmState);

  const dispatch = useDispatch();

  const handleChangeLimit = (dataKey: any) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = useMemo(
    () =>
      dados.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
      }),
    [dados, limit, page]
  );

  return (
    <Wrapper>
      {confirmState.value && <ConfirmModal {...confirmState} />}
      <TableTitle path={'Empresas'} />
      <Table
        height={400}
        loading={loading}
        data={data}
        onRowClick={(data) => {}}
        locale={{ emptyMessage: 'Sem dados para exibir' }}
      >
        <Column width={200} fixed>
          <HeaderCell>EMPRESA</HeaderCell>
          <Cell dataKey='razaoSocialOuNome' />
        </Column>
        <Column width={180}>
          <HeaderCell>CNPJ</HeaderCell>
          <Cell dataKey='cnpjOuCpf' />
        </Column>
        <Column width={150}>
          <HeaderCell>CIDADE</HeaderCell>
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
          <HeaderCell>E-MAIL</HeaderCell>
          <Cell dataKey='email' />
        </Column>
        <Column width={160}>
          <HeaderCell>ABERTURA</HeaderCell>
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
      <div style={{ padding: 20 }}>
        <Pagination
          locale={{ total: '', limit: '10', skip: '' }}
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size='xs'
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={dados.length}
          limitOptions={[10, 20]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5rem 5rem 0 10.8rem;
  font-size: 1.2rem;

  .btn-edit {
    color: #333;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
    &:hover {
      border-bottom: 1px solid ${styles.colors.colorPurpleLight};
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
      border-bottom: 1px solid ${styles.colors.colorPurpleLight};
    }
  }

  .bar-placeholder {
    padding: 0 5px;
    color: #333;
  }
`;
export default TableEmpresas;
