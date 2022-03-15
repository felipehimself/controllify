import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';
import styles from '../styles/styles';
import Button from './ButtonSalvar';

interface IProps {
  path?: string;
  button?: boolean;
}

const TableTitle: React.FC<IProps> = ({ path, button }) => {
  return (
    <Wrapper>
      <div className='head-container'>
        <Link to='/'>
          <FaChevronLeft size={12} style={{ color: '#fff' }} />
        </Link>
        <h2 className='title-container__title'>{path}</h2>
      </div>
      {button && <Button />}
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
  }
  .title-container__title {
    font-weight: normal;
    font-size: 1.5rem;
  }

`;
export default TableTitle;
