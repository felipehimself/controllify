import styled from 'styled-components';
import styles from '../styles/styles';
import Card from './Card';
import { dadosInicio } from './../data/dadosGerais';
import { FaCity, FaRegListAlt } from 'react-icons/fa';

const icons = [FaCity, FaRegListAlt];

const Home: React.FC = () => {
  return (
    <Wrapper>
      <h2>Dash</h2>
      <article className='cards-container'>
        {dadosInicio.map((item, index) => {
          const Icon = icons[index];
          return <Card key={index} item={item} Icon={Icon} />;
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 9.7rem 2rem 0 10.8rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${styles.textColor};
  }

  .cards-container {
    display: flex;
    gap: 2rem;
  }
`;

export default Home;
