import styled from 'styled-components';
import { FaDiscourse } from 'react-icons/fa';
import styles from '../../styles/styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <p className='title'>Controllify</p>
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
  background-color: #ffffff;
  text-align: center;
  box-shadow: ${styles.effects.boxShadow};

  .title {
    padding: 2rem 0;
    color: ${styles.colors.colorGrayLight};
    letter-spacing: 2px;
    font-size: 2rem;
    font-weight: bold;
    margin-left: 6.4rem;
  }
`;

export default Header;
