import styled from 'styled-components';
import { FaHome, FaCity, FaRegListAlt } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <Wrapper>
      <FaHome style={{ color: '#fff' }} size={'2.2rem'} />
      <FaCity style={{ color: '#fff' }} size={'2.2rem'} />
      <FaRegListAlt style={{ color: '#fff' }} size={'2.2rem'} />
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
