import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeState } from '../features/buttonsSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
const ButtonEditar = () => {
  const dispatch = useDispatch();
  const { isDisable } = useSelector((state: RootState) => state.buttonState);
  console.log(isDisable);
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
