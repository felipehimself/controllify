import styled from 'styled-components';
import HeaderIcon from '../icons/HeaderIcon';
import HomeIcon from '../icons/HomeIcon';
import CadastrarIcon from '../icons/CadastrarIcon';

const Sidebar = () => {
  return (
    <Wrapper>
      <HeaderIcon />
      <HomeIcon />
      <CadastrarIcon />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 6.4rem;
  background-color: #1b1d29;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  gap: 3rem;
  top: 0;

  > * {
    cursor: pointer;
  }
`;
export default Sidebar;
