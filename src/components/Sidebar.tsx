import styled from 'styled-components';
import { FaHome, FaCity, FaRegListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from '../styles/styles';
const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <FaHome style={{ color: '#fff' }} size={'2.2rem'} />
      </Link>
      <Link to='/empresas'>
        <FaCity style={{ color: '#fff' }} size={'2.2rem'} />
      </Link>
      <Link to='/cadastrar'>
        <FaRegListAlt style={{ color: '#fff' }} size={'2.2rem'} />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 6.4rem;
  background-color: ${styles.bgDefault};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  gap: 3rem;
  top: 0;
  z-index: 100;

  > * {
    cursor: pointer;
  }
`;
export default Sidebar;
