import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeState } from '../features/buttonsSlice';

const ButtonEditar = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper onClick={() => dispatch(changeState(false))}>
      EDITAR
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding: 0.5rem 2rem;
  color: #fff;
  background-color: #303341;
  border: none;
  cursor: pointer;

  :active {
    transform: translateY(2px);
  }
`;
export default ButtonEditar;
