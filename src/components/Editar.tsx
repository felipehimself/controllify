import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeState } from '../features/buttonsSlice';
import { updateData } from '../features/dataSlice';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../styles/styles';
import { ufData } from '../data/dadosGerais';
import { RootState } from '../store/store';
import { IUserData } from '../interfaces/interfaces';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';
import { fireError } from '../features/errorSlice';
const Editar = () => {
  const [empresa, setEmpresa] = useState<IUserData | any>({});
  const [bkpEmpresa, setBkpEmpresa] = useState<IUserData | any>({});

  const { id } = useParams();
  const { dados } = useSelector((state: RootState) => state.dados);
  const { isDisable } = useSelector((state: RootState) => state.buttonState);
  const errorState = useSelector((state: RootState) => state.errorState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeState(true));
    const unicaEmpresa = dados.find((item) => item.id === id);
    setEmpresa(unicaEmpresa);
    setBkpEmpresa(unicaEmpresa);
  }, [id, dados, dispatch]);

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
    if (Object.values(empresa).filter(Boolean).length === 13) {
      console.log(Object.values(empresa).filter(Boolean));

      dispatch(updateData({ id: empresa.id, data: empresa }));
      setEmpresa({});
      navigate('/empresas');
    } else {
      dispatch(
        fireError({ value: true, msg: 'Necessário preencher todos os campos' })
      );
    }
  };

  const handleCancelar = () => {
    setEmpresa(bkpEmpresa);
    dispatch(changeState(true));
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
          <h2 className='title-container__title'>Empresas / Editar</h2>
        </div>
        <div className='btn-container'>
          {!isDisable && (
            <button
              onClick={handleCancelar}
              className='btn btn-cancelar'
              disabled={isDisable}
            >
              CANCELAR
            </button>
          )}
          <button
            className={isDisable ? 'btn' : 'btn btn-not-allowed'}
            onClick={() => dispatch(changeState(false))}
          >
            EDITAR
          </button>
          <button
            onClick={handleSubmit}
            className={isDisable ? 'btn btn-not-allowed' : 'btn'}
            disabled={isDisable}
          >
            SALVAR
          </button>
        </div>
      </div>
      <form>
        <label htmlFor='tipoDeDoc'>Dados Gerais</label>
        <div className='form-control-dados'>
          <select
            value={empresa?.tipoDeDoc}
            name='tipoDeDoc'
            id='doc'
            disabled={isDisable}
            onChange={handleChange}
            className='doc-select'
          >
            <option value='cpf'>CPF</option>
            <option value='cnpj'>CNPJ</option>
          </select>
          <input
            value={empresa?.cnpjOuCpf || ''}
            type='text'
            placeholder='Nº documento'
            onChange={handleChange}
            name='cnpjOuCpf'
            disabled={isDisable}
            className='doc-input'
          />
          <input
            className='nome-razao-social'
            type='text'
            placeholder='Nome Completo / Razão Social'
            value={empresa?.razaoSocialOuNome || ''}
            disabled={isDisable}
            onChange={handleChange}
            name='razaoSocialOuNome'
          />
          <input
            value={empresa?.email || ''}
            type='email'
            placeholder='E-mail'
            disabled={isDisable}
            onChange={handleChange}
            name='email'
            className='email-input'
          />
          <input
            value={empresa?.abertura || ''}
            type='date'
            placeholder='Data cadastro'
            disabled={isDisable}
            onChange={handleChange}
            name='abertura'
            className='data-input'
          />
        </div>
        <label htmlFor='doc'>Endereço</label>

        <div className='form-control-endereco'>
          <input
            value={empresa?.cep || ''}
            type='text'
            placeholder='CEP'
            className='cep'
            disabled={isDisable}
            name='cep'
            onChange={handleChange}
          />
          <input
            value={empresa?.rua || ''}
            type='text'
            placeholder='Endereço'
            className='endereco'
            disabled={isDisable}
            onChange={handleChange}
            name='rua'
          />
          <input
            value={empresa?.numero || ''}
            type='text'
            placeholder='Número'
            className='numero'
            disabled={isDisable}
            onChange={handleChange}
            name='numero'
          />
          <input
            type='text'
            placeholder='Complemento'
            className='complemento'
            value={empresa?.complemento || ''}
            disabled={isDisable}
            onChange={handleChange}
            name='complemento'
          />
          <input
            value={empresa?.bairro || ''}
            type='text'
            placeholder='Bairro'
            className='bairro'
            disabled={isDisable}
            onChange={handleChange}
            name='bairro'
          />
          <input
            value={empresa?.cidade || ''}
            type='text'
            placeholder='Cidade'
            className='cidade'
            disabled={isDisable}
            onChange={handleChange}
            name='cidade'
          />
          <select
            value={empresa?.uf}
            name='uf'
            id='uf'
            disabled={isDisable}
            onChange={handleChange}
          >
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
          
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 9.7rem 4rem 0 10.8rem;
  background-color: #fff;
  box-shadow: ${styles.boxShadow};

  .title-container {
    background-color: ${styles.bgDefault};
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 1rem;
    height: 5.6rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
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

  .btn-container {
    display: flex;
    gap: 2rem;
  }

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
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
    padding: 0.5rem 2rem 3rem 2rem;
  }

  .nome-razao-social {
    grid-column: 3 / 5;
  }

  .form-control-endereco {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 0.5rem 2rem 3rem 2rem;
  }

  .cep {
    grid-column: 1 / 3;
  }

  .endereco {
    grid-column: 3 /5;
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(8%) sepia(25%) saturate(896%) hue-rotate(193deg)
      brightness(94%) contrast(91%);
  }

  select,
  input[type='date'] {
    color: ${styles.textColor};
  }

  .btn {
    padding: 0.5rem 2rem;
    color: #fff;
    background-color: #303341;
    border: none;
    cursor: pointer;
    :active {
      transform: translateY(2px);
    }
  }

  .btn-not-allowed {
    cursor: not-allowed;
    :active {
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 1115px) {
    .nome-razao-social {
      grid-column: 3 / 4;
    }
  }

  @media only screen and (max-width: 956px) {
    .form-control-dados {
      grid-template-rows: repeat(3, 1fr);
    }

    .nome-razao-social {
      grid-column: 1 / 5;
    }

    .doc-select {
      grid-row: 2 / 3;
      grid-column: 1 / 3;
    }

    .doc-input {
      grid-row: 2 / 3;
      grid-column: 3 / 5;
    }

    .email-input {
      grid-row: 3 / 4;
      grid-column: 1 / 3;
    }

    .data-input {
      grid-row: 3 / 4;
      grid-column: 3 / 5;
    }
  }
`;

export default Editar;
