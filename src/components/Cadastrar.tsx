import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../styles/styles';
import { ufData } from '../data/dadosGerais';
import { IUserData } from '../interfaces/interfaces';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { insertEmpresa } from '../features/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fireError } from '../features/errorSlice';
import { generateId } from '../utils/utils';
import ErrorMsg from './ErrorMsg';
// import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';

// TODO
// NEXT... COMEÇAR A PENSAR NO FIREBASE
// validar CEP, CNPJ e CPF
// SE DER EDITAR E N MEXER EM NADA, MOSTRAR SUAS ALTERAÇOES SERAM PERDIDAS??
// ADICIONAR DEFAULT NOS SELECT

const Cadastrar: React.FC = () => {
  const [empresa, setEmpresa] = useState<IUserData | any>({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errorState = useSelector((state: RootState) => state.errorState);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setEmpresa((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    if (Object.values(empresa).filter(Boolean).length === 12) {
      setEmpresa((prev: any) => {
        return { ...prev, id: generateId() };
      });
      dispatch(insertEmpresa(empresa));
      setEmpresa({});
      navigate('/empresas');
    } else {
      dispatch(
        fireError({ value: true, msg: 'Necessário preencher todos os campos' })
      );
    }
  };

  return (
    <Wrapper>
      {errorState.value && <ErrorMsg {...errorState} />}
      <div className='title-container'>
        <div className='head-container'>
          <FaChevronLeft
            onClick={() => navigate(-1)}
            size={12}
            style={{ color: '#fff', cursor: 'pointer' }}
          />
          <h2 className='title-container__title'>Cadastrar</h2>
        </div>
        <div className='btn-container'>
          <button onClick={handleSubmit} className='btn-salvar'>
            SALVAR
          </button>
        </div>
      </div>
      <form>
        <label htmlFor='doc'>Tipo de Documento</label>
        <div className='form-control-dados'>
          <select
            name='tipoDeDoc'
            id='doc'
            onChange={handleChange}
            value={empresa?.tipoDeDoc ?? ''}
          >
            <option value='cpf'>CPF</option>
            <option value='cnpj'>CNPJ</option>
          </select>
          <input
            name='cnpjOuCpf'
            type='text'
            placeholder='Documento'
            onChange={handleChange}
            value={empresa?.cnpjOuCpf ?? ''}
          />
          <input
            name='razaoSocialOuNome'
            className='nome-razao-social'
            type='text'
            placeholder='Nome Completo / Razão Social'
            onChange={handleChange}
            value={empresa?.razaoSocialOuNome ?? ''}
          />
          <input
            type='email'
            placeholder='E-mail'
            onChange={handleChange}
            name='email'
            value={empresa?.email ?? ''}
          />
          <input
            type='date'
            placeholder='Data cadastro'
            onChange={handleChange}
            name='abertura'
            value={empresa?.abertura ?? ''}
          />
        </div>

        <label htmlFor='doc'>Endereço</label>

        <div className='form-control-endereco'>
          <input
            type='text'
            placeholder='CEP'
            className='cep'
            onChange={handleChange}
            name='cep'
            value={empresa?.cep ?? ''}
          />
          <input
            type='text'
            placeholder='Endereço'
            className='endereco'
            onChange={handleChange}
            name='rua'
            value={empresa?.rua ?? ''}
          />
          <input
            type='text'
            placeholder='Número'
            className='numero'
            onChange={handleChange}
            name='numero'
            value={empresa?.numero ?? ''}
          />
          <input
            type='text'
            placeholder='Complemento'
            className='complemento'
            onChange={handleChange}
            name='complemento'
            value={empresa?.complemento ?? ''}
          />
          <input
            type='text'
            placeholder='Bairro'
            className='bairro'
            name='bairro'
            onChange={handleChange}
            value={empresa?.bairro ?? ''}
          />
          <select
            name='uf'
            id='uf'
            onChange={handleChange}
            value={empresa?.uf ?? ''}
          >
            {ufData
              .sort((a, b) => (a.uf > b.uf ? 1 : -1))
              .map((item) => {
                const { uf } = item;
                return (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                );
              })}
          </select>
          <input
            type='text'
            placeholder='Cidade'
            className='cidade'
            onChange={handleChange}
            name='cidade'
            value={empresa?.cidade ?? ''}
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

  .title-container {
    background-color: ${styles.bgDefault};
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 1rem;
    height: 5.6rem;
  }
  .head-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 1rem;
  }

  .title-container__title {
    font-weight: normal;
    font-size: 1.5rem;
  }

  .btn-salvar {
    padding: 0.5rem 2rem;
    color: #fff;
    background-color: #303341;
    border: none;
    cursor: pointer;

    :active {
      transform: translateY(2px);
    }
  }
`;
export default Cadastrar;
