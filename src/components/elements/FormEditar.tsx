import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeState } from '../../features/buttonsSlice';
import { updateData } from '../../features/dataSlice';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../styles/styles';
import { ufData } from '../../data/dadosGerais';
import { RootState } from '../../store/store';
import { ICompany } from '../../interfaces/interfaces';
import PopUpError from '../ui/PopUpError';
import { fireError } from '../../features/errorSlice';
import { FaChevronLeft } from 'react-icons/fa';
import axios from 'axios';
import { BASE_URL } from './../../utils/utils';

import Loading from './../ui/Loading';

// falta metodo put

const FormEditar:React.FC = () => {
  const [empresa, setEmpresa] = useState<ICompany | any>({});
  const [bkpEmpresa, setBkpEmpresa] = useState<ICompany | any>({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const { dados } = useSelector((state: RootState) => state.dados);
  const { isDisable } = useSelector((state: RootState) => state.buttonState);
  const errorState = useSelector((state: RootState) => state.errorState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeState(true));
    const unicaEmpresa = dados.find((item) => item.id === Number(id));
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
    setIsLoading(true);
    if (Object.values(empresa).filter(Boolean).length === 13) {
      axios
        .put(`${BASE_URL}/${id}`, empresa)
        .then((response) => {
          console.log(response);
          dispatch(updateData({ id: empresa.id, data: empresa }));
          setEmpresa({});
          navigate('/empresas');
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          dispatch(
            fireError({
              value: true,
              msg: 'Ooops! Algo deu errado, tente novamente',
            })
          );
          setIsLoading(false);
        });
    } else {
      dispatch(
        fireError({ value: true, msg: 'Necessário preencher todos os campos' })
      );
    }
  };

  const handleCancel = () => {
    setEmpresa(bkpEmpresa);
    dispatch(changeState(true));
  };

  return (
    <Wrapper>
      {isLoading && <Loading />}
      {errorState.value && <PopUpError {...errorState} />}
      <div className='title-container'>
        <div className='head-container'>
          <FaChevronLeft
            onClick={() => navigate(-1)}
            size={12}
            style={{ color: 'styles.colors.colorWhite', cursor: 'pointer' }}
          />
          <h2 className='title-container__title'>Empresas / Editar</h2>
        </div>
        <div className='btn-container'>
          {!isDisable && (
            <button
              onClick={handleCancel}
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
      <form className='form'>
        <div className='form-control-dados'>
          <div className='form-control-dados__doc-select'>
            <label className='label' htmlFor='doc'>
              CPF / CNPJ
            </label>
            <select
              value={empresa?.tipoDeDoc}
              name='tipoDeDoc'
              id='doc'
              disabled={isDisable}
              onChange={handleChange}
              className=''
            >
              <option value='cpf'>CPF</option>
              <option value='cnpj'>CNPJ</option>
            </select>
          </div>
          <div className='form-control-dados__doc-input'>
            <label className='label' htmlFor='cnpjOuCpf'>
              Nº Documento
            </label>
            <input
              value={empresa?.cnpjOuCpf || ''}
              type='text'
              onChange={handleChange}
              name='cnpjOuCpf'
              id='cnpjOuCpf'
              disabled={isDisable}
            />
          </div>
          <div className='form-control-dados__nome-razao-social'>
            <label className='label' htmlFor='razaoSocialOuNome'>
              Nome / Razão Social
            </label>
            <input
              type='text'
              value={empresa?.razaoSocialOuNome || ''}
              disabled={isDisable}
              onChange={handleChange}
              name='razaoSocialOuNome'
              id='razaoSocialOuNome'
            />
          </div>
          <div className='form-control-dados__email-input'>
            <label className='label' htmlFor='email'>
              E-mail
            </label>
            <input
              value={empresa?.email || ''}
              type='email'
              disabled={isDisable}
              onChange={handleChange}
              name='email'
              id='email'
            />
          </div>
          <div className='form-control-dados__data-input'>
            <label className='label' htmlFor='abertura'>
              Data cadastro
            </label>
            <input
              value={empresa?.abertura || ''}
              type='date'
              disabled={isDisable}
              onChange={handleChange}
              name='abertura'
              id='abertura'
            />
          </div>
        </div>

        <div className='form-control-endereco'>
          <div className='form-control-endereco__endereco'>
            <label className='label' htmlFor='rua'>
              Rua
            </label>
            <input
              value={empresa?.rua || ''}
              type='text'
              className='endereco'
              disabled={isDisable}
              onChange={handleChange}
              name='rua'
              id='rua'
            />
          </div>
          <div className='form-control-endereco__numero'>
            <label className='label' htmlFor='numero'>
              Número
            </label>
            <input
              value={empresa?.numero || ''}
              type='number'
              min='0'
              disabled={isDisable}
              onChange={handleChange}
              name='numero'
              id='numero'
            />
          </div>
          <div className='form-control-endereco__complemento'>
            <label className='label' htmlFor='complemento'>
              Complemento
            </label>
            <input
              type='text'
              className='complemento'
              value={empresa?.complemento || ''}
              disabled={isDisable}
              onChange={handleChange}
              name='complemento'
              id='complemento'
            />
          </div>
          <div className='form-control-endereco__bairro'>
            <label className='label' htmlFor='bairro'>
              Bairro
            </label>
            <input
              value={empresa?.bairro || ''}
              type='text'
              className='bairro'
              disabled={isDisable}
              onChange={handleChange}
              name='bairro'
              id='bairro'
            />
          </div>
          <div className='form-control-endereco__cidade'>
            <label className='label' htmlFor='cidade'>
              Cidade
            </label>
            <input
              value={empresa?.cidade || ''}
              type='text'
              className='cidade'
              disabled={isDisable}
              onChange={handleChange}
              name='cidade'
              id='cidade'
            />
          </div>
          <div className='form-control-endereco__cep'>
            <label className='label' htmlFor='cep'>
              CEP
            </label>
            <input
              value={empresa?.cep || ''}
              type='text'
              className='cep'
              disabled={isDisable}
              name='cep'
              id='cep'
              onChange={handleChange}
            />
          </div>

          <div className='form-control-endereco__uf'>
            <label className='label' htmlFor='uf'>
              Estado
            </label>
            <select
              value={empresa?.uf}
              name='uf'
              id='uf'
              disabled={isDisable}
              onChange={handleChange}
            >
              {ufData
                .sort((item) =>
                  item.uf.toLowerCase() === empresa?.uf ? -1 : 1
                )
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
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 9rem 4rem 0 10.8rem;
  background-color: ${styles.colors.colorWhite};
  box-shadow: ${styles.effects.boxShadow};

  .title-container {
    background-color: ${styles.colors.colorGrayDark};
    color: ${styles.colors.colorWhite};
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

  .form {
    padding: 2rem 2rem 3rem 2rem;
  }

  .label {
    display: block;
    font-size: 1.4rem;
    color: ${styles.colors.colorGrayLight};
  }

  select,
  input {
    display: block;
    padding: 0.5rem 0;
    border: none;
    border-bottom: 1px solid #dee2e6;
    width: 100%;
  }

  select:focus,
  input:focus {
    outline: none;
    border-bottom: 1px solid ${styles.colors.colorPurpleLight};
  }
  input[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(8%) sepia(25%) saturate(896%) hue-rotate(193deg)
      brightness(94%) contrast(91%);
    cursor: pointer;
  }

  select,
  input[type='date'] {
    color: ${styles.colors.colorGrayLight};
  }

  .form-control-dados {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
    padding: 0.5rem 2rem 3rem 0rem;
  }

  .form-control-dados__nome-razao-social {
    grid-column: 3 / 5;
  }

  .form-control-endereco {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    &__endereco {
      grid-column: 1 / 3;
    }
  }

  .btn {
    padding: 0.5rem 2rem;
    color: ${styles.colors.colorWhite};
    background-color: #303341;
    border: none;
    cursor: pointer;
    border-radius: 0.4rem;

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
    .form-control-dados__nome-razao-social {
      grid-column: 3 / 4;
    }
  }

  @media only screen and (max-width: 956px) {
    .form-control-dados {
      &__nome-razao-social {
        grid-column: 1 / 5;
      }

      &__doc-select {
        grid-row: 2 / 3;
        grid-column: 1 / 3;
      }

      &__doc-input {
        grid-row: 2 / 3;
        grid-column: 3 / 5;
      }

      &__email-input {
        grid-row: 3 / 4;
        grid-column: 1 / 3;
      }

      &__data-input {
        grid-row: 3 / 4;
        grid-column: 3 / 5;
      }
    }

    .form-control-endereco {
      &__endereco {
        grid-column: 1 / 4;
      }

      &__complemento {
        grid-column: 1 /3;
      }

      &__bairro {
        grid-column: 3 / 5;
      }

      &__cidade {
        grid-column: 1 / 3;
      }
    }
  }
`;

export default FormEditar;
