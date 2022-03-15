import styled from 'styled-components';
import TableTitle from './TableTitle';
import styles from '../styles/styles';
import { ufData } from '../data/dadosGerais';
import { useLocation } from 'react-router-dom';

const Editar = () => {
  return (
    <Wrapper>
      <TableTitle button={true} path={'Empresas / Editar'} />
      <form>
        <label htmlFor='doc'>Tipo de Documento</label>
        <div className='form-control-dados'>
          <select name='doc' id='doc'>
            <option value='cpf'>CPF</option>
            <option value='cnpj'>CNPJ</option>
          </select>
          <input type='text' placeholder='Documento' />
          <input
            className='nome-razao-social'
            type='text'
            placeholder='Nome Completo / Razão Social'
          />
          <input type='email' placeholder='E-mail' />
          <input type='date' placeholder='Data cadastro' />
        </div>

        <label htmlFor='doc'>Endereço</label>

        <div className='form-control-endereco'>
          <input type='text' placeholder='CEP' className='cep' />
          <input type='text' placeholder='Endereço' className='endereco' />
          <input type='text' placeholder='Número' className='numero' />
          <input
            type='text'
            placeholder='Complemento'
            className='complemento'
          />
          <input type='text' placeholder='Bairro' className='bairro' />
          <select name='uf' id='uf'>
            {ufData
              .sort((a, b) => (a.uf > b.uf ? 1 : -1))
              .map((item) => {
                const { uf } = item;
                return <option value={uf}>{uf}</option>;
              })}
          </select>
          <input type='text' placeholder='Cidade' className='cidade' />
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin: 9.7rem 4rem 0 10.8rem;
  background-color: #fff;
  box-shadow: ${styles.boxShadow};

  form {
    padding: 2rem 2rem 3rem 2rem;
  }

  label {
    display: block;
    padding: 1.5rem 2rem 0 2rem;
    font-size: 1.2rem;
    color: ${styles.textColor};
    font-weight: 500;
  }

  select,
  input {
    padding: 0.5rem 0.5rem;
    border: none;
    border-bottom: 1px solid #dee2e6;
  }

  select:focus,
  input:focus {
    outline: none;
    border-bottom: 1px solid #868e96;
  }

  .form-control-dados {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 0.5rem 2rem 3rem 2rem;
  }

  .nome-razao-social {
    grid-column: 3 / 5;
  }

  .form-control-endereco {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    padding: 0.5rem 2rem 3rem 2rem;
  }

  .cep {
    grid-column: 1 / 3;
  }

  .endereco {
    grid-column: 3 /6;
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(8%) sepia(25%) saturate(896%) hue-rotate(193deg)
      brightness(94%) contrast(91%);
  }

  select,
  input[type='date'] {
    color: ${styles.textColor};
  }
`;

export default Editar