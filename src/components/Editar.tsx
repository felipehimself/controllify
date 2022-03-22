import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeState } from '../features/buttonsSlice';
import { updateData } from '../features/dataSlicer';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../styles/styles';
import { ufData } from '../data/dadosGerais';
import { RootState } from '../store/store';
import { IUserData } from '../interfaces/interfaces';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// COMO PEGAR VALOR DO SELECT?

const Editar = () => {
  const [empresa, setEmpresa] = useState<IUserData | any>({});

  const { id } = useParams();
  const { dados } = useSelector((state: RootState) => state.dados);
  const { isDisable } = useSelector((state: RootState) => state.buttonState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeState(true));
    const unicaEmpresa = dados.find((item) => item.id === id);
    setEmpresa(unicaEmpresa);
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
    setEmpresa((prev:any)=>{
      return {...prev}
    })
    if (Object.values(empresa).filter(Boolean).length === 13) {
      dispatch(updateData({ id: empresa.id, data: empresa }));
      setEmpresa({})
      navigate('/empresas');
    } else {
      alert('errado');
    }
  };

  return (
    <Wrapper>
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
          <button
            className='btn-editar'
            onClick={() => dispatch(changeState(false))}
          >
            EDITAR
          </button>
          <button onClick={handleSubmit} className='btn-salvar'>
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
            onChange={handleChange}
            name='razaoSocialOuNome'
          />
          <input
            defaultValue={empresa?.email || ''}
            type='email'
            placeholder='E-mail'
            disabled={isDisable}
            onChange={handleChange}
            name='email'
          />
          <input
            defaultValue={empresa?.abertura || ''}
            type='date'
            placeholder='Data cadastro'
            disabled={isDisable}
            onChange={handleChange}
            name='abertura'
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
            name='cep'
            onChange={handleChange}
          />
          <input
            defaultValue={empresa?.rua || ''}
            type='text'
            placeholder='Endereço'
            className='endereco'
            disabled={isDisable}
            onChange={handleChange}
            name='rua'
          />
          <input
            defaultValue={empresa?.numero || ''}
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
            defaultValue={empresa?.complemento || ''}
            disabled={isDisable}
            onChange={handleChange}
            name='complemento'
          />
          <input
            defaultValue={empresa?.bairro || ''}
            type='text'
            placeholder='Bairro'
            className='bairro'
            disabled={isDisable}
            onChange={handleChange}
            name='bairro'
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
          <input
            defaultValue={empresa?.cidade || ''}
            type='text'
            placeholder='Cidade'
            className='cidade'
            disabled={isDisable}
            onChange={handleChange}
            name='cidade'
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

  .btn-editar {
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

export default Editar;
