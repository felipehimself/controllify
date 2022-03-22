import styled from 'styled-components';
import styles from '../styles/styles';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import TableTitle from './TableTitle';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Empresas: React.FC = () => {
  const { dados } = useSelector((state: RootState) => state.dados);

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
          {dados.map((item) => {
            const {
              id,
              razaoSocialOuNome,
              cnpjOuCpf,
              cidade,
              uf,
              cep,
              abertura,
            } = item;
            return (
              <tr key={id}>
                <td>{razaoSocialOuNome}</td>
                <td>{cnpjOuCpf}</td>
                <td>{cidade}</td>
                <td>{uf}</td>
                <td>{cep}</td>
                <td>{`${abertura.slice(-2)}/${abertura.slice(
                  5,
                  7
                )}/${abertura.slice(0, 4)}`}</td>
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
