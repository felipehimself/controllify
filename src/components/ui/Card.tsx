import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';
import { IData } from '../../data/dadosGerais';

const Card: React.FC<IData> = ({ name, path }) => {
  return (
    <Wrapper>
      <Link to={`/${path}`}>
        <p className='name'>{name}</p>
        <span className='arrow'>&#x2192;</span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 20rem;
  border-radius: 0.4rem;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media only screen and (max-width: 575px) {
    flex-grow: 1;
    margin-right: 2rem;
  }

  :active {
    transform: translateY(2px);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    align-items: center;
    gap: 1rem;
    padding: 4rem 0;
    color: ${styles.colors.colorGrayLight};
  }

  .name {
    text-align: center;
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 500;
  }

  .arrow {
    font-size: 2rem;
  }
`;
export default Card;
