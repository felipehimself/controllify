import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Pagination } from 'rsuite';
import 'rsuite-table/dist/css/rsuite-table.css';
import 'rsuite/dist/rsuite.min.css';
// import 'rsuite-table/lib/less/index.less'

import useFetch from '../../hooks/useFetch';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

import styles from '../../styles/styles';
import Loading from '../ui/Loading';
import ConfirmModal from './ConfirmModal';
import TableTitle from '../ui/TableTitle';

import { fireConfirm } from '../../features/confirmSlice';
import { fireError } from '../../features/errorSlice';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';


const TableEmpresas:React.FC = () => {
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

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

  const {isLoading, error} = useFetch()

  if (isLoading) return <Loading />;

  if (error){
    dispatch(fireError({ value: true, msg: 'Ooops! Algo deu errado, tente novamente' }));
  }

  return (
    <Wrapper>
      {confirmState.value && <ConfirmModal {...confirmState} />}
      <TableTitle path={'Empresas'} />
      <Table
        height={400}
        data={data}
        onRowClick={(data) => {}}
        locale={{ emptyMessage: 'Sem dados para exibir' }}
      >
        <Column flexGrow={1}  fixed>
          <HeaderCell>EMPRESA</HeaderCell>
          <Cell dataKey='razaoSocialOuNome' />
        </Column>
        <Column flexGrow={1} >
          <HeaderCell>CNPJ</HeaderCell>
          <Cell dataKey='cnpjOuCpf' />
        </Column>
        <Column flexGrow={1} >
          <HeaderCell>CIDADE</HeaderCell>
          <Cell dataKey='cidade' />
        </Column>
        <Column flexGrow={1} >
          <HeaderCell>UF</HeaderCell>
          <Cell dataKey='uf' />
        </Column>
        <Column flexGrow={1} >
          <HeaderCell>CEP</HeaderCell>
          <Cell dataKey='cep' />
        </Column>
        <Column flexGrow={1} >
          <HeaderCell>E-MAIL</HeaderCell>
          <Cell dataKey='email' />
        </Column>
        <Column flexGrow={1} >
          <HeaderCell>ABERTURA</HeaderCell>
          <Cell dataKey='abertura' />
        </Column>
        <Column flexGrow={1}  >
          <HeaderCell>Ações</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <div className='btns-container'>
                  <Link
                    to={`/empresas/editar/${rowData.id}`}
                    className='btn-edit'
                  >
                    <FaEdit title='Editar' size={12}/>
                  </Link>
                  <button
                    className='btn-remove'
                    onClick={() =>
                      dispatch(
                        fireConfirm({
                          value: true,
                          msg: 'Deseja prosseguir?',
                          id: rowData.id,
                        })
                      )
                    }
                  >
                    <FaTrashAlt title='Excluir' size={12}/>
                  </button>
                </div>
              );
            }}
          </Cell>
        </Column>
      </Table>
      <div className='pagination-container' >
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
  margin: 9rem 5rem 0 10.8rem;
  font-size: 1.2rem;

  .btns-container {
    display:flex;
    align-items: center;
    gap: 1rem;
  }

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

  .pagination-container {
    padding: 2rem;
  }


`;
export default TableEmpresas;
