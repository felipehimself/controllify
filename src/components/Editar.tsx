import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeState } from '../features/buttonsSlice';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TableTitle from './TableTitle';
import styles from '../styles/styles';
import { ufData } from '../data/dadosGerais';
import { RootState } from '../store/store';
import { IUserData } from '../interfaces/interfaces';

const Editar = () => {
  const [empresa, setEmpressa] = useState<IUserData | null>();
  const [editar, setEditar] = useState<IUserData | unknown>({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const { dados } = useSelector((state: RootState) => state.dados);
  const { isDisable } = useSelector((state: RootState) => state.buttonState);

  useEffect(() => {
    dispatch(changeState(true));
    const unicaEmpresa = dados.find((i) => i.id === id);
    setEmpressa(unicaEmpresa);
  }, [id, dados, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target.value);

    setEditar((prev: IUserData) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Wrapper>
      <TableTitle button={true} path={'Empresas / Editar'} />
      <form>
        <label htmlFor='doc'>Tipo de Documento</label>
        <div className='form-control-dados'>
          <select
            value={empresa?.tipoDeDoc}
            name='doc'
            id='doc'
            disabled={isDisable}
          >
            <option value='cpf'>CPF</option>
            <option value='cnpj'>CNPJ</option>
          </select>
          <input
            defaultValue={empresa?.cnpjOuCpf || ''}
            type='text'
            placeholder='Documento'
            onChange={handleChange}
            name='cnpjOuCpf'
            disabled={isDisable}
          />
          <input
            className='nome-razao-social'
            type='text'
            placeholder='Nome Completo / Razão Social'
            defaultValue={empresa?.razaoSocialOuNome || ''}
            disabled={isDisable}
          />
          <input
            defaultValue={empresa?.email || ''}
            type='email'
            placeholder='E-mail'
            disabled={isDisable}
          />
          <input
            defaultValue={empresa?.abertura || ''}
            type='date'
            placeholder='Data cadastro'
            disabled={isDisable}
          />
        </div>

        <label htmlFor='doc'>Endereço</label>

        <div className='form-control-endereco'>
          <input
            defaultValue={empresa?.cep || ''}
            type='text'
            placeholder='CEP'
            className='cep'
            disabled={isDisable}
          />
          <input
            defaultValue={empresa?.rua || ''}
            type='text'
            placeholder='Endereço'
            className='endereco'
            disabled={isDisable}
          />
          <input
            defaultValue={empresa?.numero || ''}
            type='text'
            placeholder='Número'
            className='numero'
            disabled={isDisable}
          />
          <input
            type='text'
            placeholder='Complemento'
            className='complemento'
            defaultValue={empresa?.complemento || ''}
            disabled={isDisable}
          />
          <input
            defaultValue={empresa?.bairro || ''}
            type='text'
            placeholder='Bairro'
            className='bairro'
            disabled={isDisable}
          />
          <select value={empresa?.uf} name='uf' id='uf' disabled={isDisable}>
            {ufData
              .sort((item) => (item.uf.toLowerCase() === empresa?.uf ? -1 : 1))
              .map((i) => {
                const { uf } = i;
                return (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                );
              })}
          </select>
          <input
            defaultValue={empresa?.cidade || ''}
            type='text'
            placeholder='Cidade'
            className='cidade'
            disabled={isDisable}
          />
        </div>
      </form>
    </Wrapper>
  );
};

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

export default Editar;
