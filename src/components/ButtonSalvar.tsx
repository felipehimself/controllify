import styled from 'styled-components';

const ButtonSalvar = () => {
  return <Wrapper>SALVAR</Wrapper>;
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
export default ButtonSalvar;
