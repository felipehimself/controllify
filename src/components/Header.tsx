import styled from 'styled-components';
import { FaDiscourse } from 'react-icons/fa';
import styles from '../styles/styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <p>Controllify</p>
      <FaDiscourse style={{ color: '#343E47' }} size={'2.2rem'} />
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
  gap: 0.5rem;
  /* margin-left: 6.4rem; */
  background-color: #ffffff;
  text-align: center;
  box-shadow: ${styles.boxShadow};

  p {
    padding: 2rem 0;
    color: ${styles.textColor};
    letter-spacing: 2px;
    font-size: 2rem;
  }
`;

export default Header;
