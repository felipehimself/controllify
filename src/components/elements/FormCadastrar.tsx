import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../../styles/styles';
import { ufData } from '../../data/dadosGerais';
import { IUserData } from '../../interfaces/interfaces';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { insertEmpresa } from '../../features/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fireError } from '../../features/errorSlice';
import { generateId } from '../../utils/utils';
import PopUpError from '../ui/PopUpError';

const FormCadastrar: React.FC = () => {
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

    setEmpresa((prev: IUserData) => {
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
      {errorState.value && <PopUpError {...errorState} />}
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
      <form className='form'>
        <div className='form-control-dados'>
          <div className='form-control-dados__doc-select'>
            <label className='label' htmlFor='doc'>
              CPF / CNPJ
            </label>
            <select
              name='tipoDeDoc'
              id='doc'
              onChange={handleChange}
              value={empresa?.tipoDeDoc ?? ''}
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
              name='cnpjOuCpf'
              id='cnpjOuCpf'
              type='text'
              onChange={handleChange}
              value={empresa?.cnpjOuCpf ?? ''}
            />
          </div>
          <div className='form-control-dados__nome-razao-social'>
            <label className='label' htmlFor='razaoSocialOuNome'>
              Nome / Razão Social
            </label>

            <input
              name='razaoSocialOuNome'
              id='razaoSocialOuNome'
              className='nome-razao-social'
              type='text'
              onChange={handleChange}
              value={empresa?.razaoSocialOuNome ?? ''}
            />
          </div>
          <div form-control-dados__email-input>
            <label className='label' htmlFor='email'>
              E-mail
            </label>

            <input
              type='email'
              onChange={handleChange}
              name='email'
              id='email'
              value={empresa?.email ?? ''}
            />
          </div>
          <div className='form-control-dados__data-input'>
            <label className='label' htmlFor='abertura'>
              Data cadastro
            </label>

            <input
              type='date'
              onChange={handleChange}
              name='abertura'
              value={empresa?.abertura ?? ''}
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
              type='text'
              className='endereco'
              onChange={handleChange}
              name='rua'
              value={empresa?.rua ?? ''}
              id='rua'
            />
          </div>
          <div className='form-control-endereco__numero'>
            <label className='label' htmlFor='numero'>
              Número
            </label>
            <input
              type='text'
              className='numero'
              onChange={handleChange}
              name='numero'
              id='numero'
              value={empresa?.numero ?? ''}
            />
          </div>
          <div className='form-control-endereco__complemento'>
            <label className='label' htmlFor='complemento'>
              Complemento
            </label>

            <input
              type='text'
              className='complemento'
              onChange={handleChange}
              name='complemento'
              id='complemento'
              value={empresa?.complemento ?? ''}
            />
          </div>
          <div className='form-control-endereco__bairro'>
            <label className='label' htmlFor='bairro'>
              Bairro
            </label>

            <input
              type='text'
              className='bairro'
              name='bairro'
              id='bairro'
              onChange={handleChange}
              value={empresa?.bairro ?? ''}
            />
          </div>
          <div className='form-control-endereco__cidade'>
            <label className='label' htmlFor='cidade'>
              Cidade
            </label>

            <input
              type='text'
              className='cidade'
              onChange={handleChange}
              name='cidade'
              id='cidade'
              value={empresa?.cidade ?? ''}
            />
          </div>
          <div className='form-control-endereco__cep'>
            <label className='label' htmlFor='cep'>
              CEP
            </label>

            <input
              type='text'
              className='cep'
              onChange={handleChange}
              name='cep'
              id='cep'
              value={empresa?.cep ?? ''}
            />
          </div>
          <div className='form-control-endereco__uf'>
            <label className='label' htmlFor='uf'>
              Estado
            </label>
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
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 5rem 4rem 0 10.8rem;
  background-color: #fff;
  box-shadow: ${styles.effects.boxShadow};

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

  .title-container {
    background-color: ${styles.colors.colorGrayDark};
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

  .btn-salvar {
    padding: 0.5rem 2rem;
    color: #fff;
    background-color: #303341;
    border: none;
    cursor: pointer;
    border-radius: 0.4rem;

    :active {
      transform: translateY(2px);
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
export default FormCadastrar;
