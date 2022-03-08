import styled from 'styled-components';
import styles from './../styles/styles';
interface Props {
  item: string;
  Icon: React.FC;
}

const Card: React.FC<Props> = ({ item, Icon }) => {
  return (
    <Wrapper>
      <p>{item}</p>
      <span>&#x2192;</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 20rem;
  width: 100%;
  border-radius: 0.2rem;
  align-items: center;
  gap: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.26);
  padding: 4rem 0;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: ${styles.textColor};

  :active {
    transform: translateY(2px);
  }

  p {
    text-align: center;
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 500;
  }

  span {
    font-size: 2rem;
  }
`;
export default Card;
