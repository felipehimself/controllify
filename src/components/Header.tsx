import styled from 'styled-components';
import LogoIcon from '../icons/LogoIcon';
import styles from '../styles/styles';
const Header = () => {
  return (
    <Wrapper>
      <LogoIcon />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  gap: 1rem;
  margin-left: 6.4rem;
  background-color: #ffffff;
  text-align: center;
  height: 5.6rem;
  padding: 1rem;
  font-size: 0.8rem;
 box-shadow: ${styles.boxShadow};
`;

export default Header;
