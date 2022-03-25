import styled from 'styled-components';
import { FaHome, FaCity, FaRegListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from '../styles/styles';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Link to='/' className={pathname === '/' ? 'home icon-abs' : 'icon-abs'}>
        <FaHome style={{ color: '#fff' }} size={'2.2rem'} />
        <span className='icon-abs__el'>Home</span>
      </Link>
      <Link
        className={pathname.includes('empresas') ? 'empresas icon-abs' : 'icon-abs'}
        to='/empresas'
      >
        <FaCity style={{ color: '#fff' }} size={'2.2rem'} />
        <span className='icon-abs__el'>Empresas</span>

      </Link>
      <Link
        className={pathname.includes('cadastrar') ? 'cadastrar icon-abs' : 'icon-abs'}
        to='/cadastrar'
      >
        <FaRegListAlt style={{ color: '#fff' }} size={'2.2rem'} />
        <span className='icon-abs__el'>Cadastrar</span>

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

  a:not(fist-child) {
    padding: 1.9rem 0;
  }

  .home {
    border-left: 2px solid ${styles.secondaryColor};
  }

  .icon-abs {
    position: relative;
  }

  .icon-abs__el {
    position: absolute;
    left: 60px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    background-color: ${styles.bgDefault};
    box-shadow: ${styles.boxShadow};
    padding: 1rem 0;
    border-radius: 3px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;
    width: 0;
  }

  .icon-abs:hover .icon-abs__el {
    opacity: 1;
    visibility: visible;
    width: 100px;
  }


  .empresas {
    border-left: 2px solid ${styles.secondaryColor};
  }

  .cadastrar {
    border-left: 2px solid ${styles.secondaryColor};
  }
`;
export default Sidebar;
