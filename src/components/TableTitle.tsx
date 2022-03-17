import { FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';
import styles from '../styles/styles';
import ButtonSalvar from './ButtonSalvar';
import ButtonEditar from './ButtonEditar';
import { useNavigate } from 'react-router-dom';

interface IProps {
  path?: string;
  button?: boolean;
}

const TableTitle: React.FC<IProps> = ({ path, button }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className='head-container'>
        <FaChevronLeft
          onClick={() => navigate(-1)}
          size={12}
          style={{ color: '#fff', cursor: 'pointer' }}
        />
        <h2 className='title-container__title'>{path}</h2>
      </div>
      {button && (
        <div className='btn-container'>
          <ButtonEditar />
          <ButtonSalvar />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${styles.bgDefault};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1rem;
  height: 5.6rem;

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
`;
export default TableTitle;
