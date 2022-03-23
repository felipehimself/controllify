import { useDispatch } from 'react-redux';
import { fireError } from '../features/errorSlice';
import styled from 'styled-components';
import styles from '../styles/styles';

interface IProps {
  msg: string | null | undefined;
}

// NECESSÁRIO INCLUIR TRANSIÇÃO NO CSS DO ERROR CONTAINER
const ErrorMsg: React.FC<IProps> = ({ msg }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className='error-container'>
        <p>{msg}</p>
        <button onClick={() => dispatch(fireError({ value: false, msg: '' }))}>
          fechar
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100vw;
  z-index: 100;

  .error-container {
    position: absolute;
    padding: 3rem 5rem;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  p {
    font-size: 1.5rem;
    color: ${styles.textColor};
  }

  button {
    display: block;
    margin: 2rem auto 0 auto;
    border: none;
    background-color: ${styles.btnColor};
    color: #fff;
    padding: 1rem 2rem;
    text-transform: capitalize;
    cursor: pointer;
  }

  button:active {
    transform: translateY(2px);
  }
`;
export default ErrorMsg;
