import { FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';
import styles from '../../styles/styles';
import { useNavigate } from 'react-router-dom';
import {ITableTitle} from './../../interfaces/interfaces'


const TableTitle: React.FC<ITableTitle> = ({ path }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className='head-container'>
        <FaChevronLeft
          onClick={() => navigate(-1)}
          size={12}
          style={{ color: styles.colors.colorWhite, cursor: 'pointer' }}
        />
        <h2 className='title'>{path}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${styles.colors.colorGrayDark};
  color:  ${styles.colors.colorWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1rem;
  height: 5.6rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;

  .head-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 1rem;
  }

  .title {
    font-weight: normal;
    font-size: 1.5rem;
  }

  /* .btn-container {
    display: flex;
    gap: 2rem;
  } */
`;
export default TableTitle;
