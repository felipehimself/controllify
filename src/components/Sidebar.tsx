import styled from 'styled-components';
import { FaHome, FaCity, FaRegListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from '../styles/styles';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Link to='/' className={pathname === '/'? 'home' : ''}>
        <FaHome style={{ color: '#fff' }} size={'2.2rem'} />
      </Link>
      <Link className={pathname.includes('empresas')? 'empresas' : ''}  to='/empresas'>
        <FaCity style={{ color: '#fff' }} size={'2.2rem'} />
      </Link>
      <Link className={pathname.includes('cadastrar')? 'cadastrar' : ''} to='/cadastrar'>
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
  top: 0;
  z-index: 100;

  > * {
    cursor: pointer;
  }

  a {
    display: block;
    width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    border-left: 2px solid transparent;
    transition: all 0.3s;
  }

  a:first-child {
    padding: 1.9rem 0;
  }

  a:not(fist-child){
    padding: 1.9rem 0;
  }

  .home {
    border-left: 2px solid ${styles.secondaryColor};
  }

  .empresas {
    border-left: 2px solid ${styles.secondaryColor};
  }

  .cadastrar {
    border-left: 2px solid ${styles.secondaryColor};
  }
`;
export default Sidebar;
