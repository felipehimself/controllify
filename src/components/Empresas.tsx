import styled from 'styled-components';
import mock from '../mock';
import styles from '../styles/styles';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import TableTitle from './TableTitle';

const Empresas: React.FC = () => {
  return (
    <Wrapper>
      <TableTitle path={'Empresas'} />
      <table>
        <thead>
          <tr className='table-row-head'>
            <th>Empresa</th>
            <th>CNPJ</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>CEP</th>
            <th>Abertura</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mock.map((item) => {
            const { id, nome, cnpj, cidade, uf, cep, abertura } = item;
            return (
              <tr key={id}>
                <td>{nome}</td>
                <td>{cnpj}</td>
                <td>{cidade}</td>
                <td>{uf}</td>
                <td>{cep}</td>
                <td>{abertura}</td>
                <td>
                  <Link to={`/empresas/editar/${id}`}>
                    <FaEdit style={{ color: '#1b1d29' }} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 9.7rem 5rem 0 10.8rem;
  max-width: 100%;
  box-shadow: ${styles.boxShadow};

  a {
    color: #fff;
  }

  table {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    border-collapse: collapse;
  }

  th {
    font-size: 1.3rem;
    padding: 1.5rem 0;
    background-color: #fff;
    color: ${styles.textColor};
  }

  td {
    padding: 1rem 0;
  }
  tr:nth-child(even) {
    background-color: #fff;
  }

  td:last-child {
    cursor: pointer;
  }
`;

export default Empresas;
