import styled from 'styled-components';
import styles from '../../styles/styles';
import { FaHome, FaCity, FaRegListAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? 'home menu-icon-label--active' : 'menu-icon-label--active'
        }
      >
        <FaHome style={{ color: '#fff' }} size={'2.2rem'} />
        <span className='menu-icon-label'>Home</span>
      </NavLink>
      <NavLink
        className={
          pathname.includes('empresas')
            ? 'empresas menu-icon-label--active'
            : 'menu-icon-label--active'
        }
        to='/empresas'
      >
        <FaCity style={{ color: '#fff' }} size={'2.2rem'} />
        <span className='menu-icon-label'>Empresas</span>
      </NavLink>
      <NavLink
        className={
          pathname.includes('cadastrar')
            ? 'cadastrar menu-icon-label--active'
            : 'menu-icon-label--active'
        }
        to='/cadastrar'
      >
        <FaRegListAlt style={{ color: '#fff' }} size={'2.2rem'} />
        <span className='menu-icon-label'>Cadastrar</span>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 6.4rem;
  background-color: ${styles.colors.colorGrayDark};
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
    border-left: 2px solid ${styles.colors.colorPurpleLight};
  }

  .menu-icon-label--active {
    position: relative;
  }

  .menu-icon-label {
    position: absolute;
    left: 60px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    background-color: ${styles.colors.colorGrayDark};
    box-shadow: ${styles.effects.boxShadow};
    padding: 1rem 0;
    border-radius: 3px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;
    width: 0;
  }

  .menu-icon-label--active:hover .menu-icon-label {
    opacity: 1;
    visibility: visible;
    width: 100px;
  }

  .empresas {
    border-left: 2px solid ${styles.colors.colorPurpleLight};
  }

  .cadastrar {
    border-left: 2px solid ${styles.colors.colorPurpleLight};
  }
`;
export default Sidebar;
