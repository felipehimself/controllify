import styled from 'styled-components';
import styles from '../styles/styles';
import Card from './Card';
import { dadosInicio } from './../data/dadosGerais';
import CadastrarIcon from './../icons/HomeIcon';
import HomeIcon from './../icons/CadastrarIcon';

const icons = [CadastrarIcon, HomeIcon];

const Home: React.FC = () => {
  return (
    <Wrapper>
      <p>Início</p>
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
  margin-left: 10.8rem;
  margin-top: 9.7rem;

  p {
    font-size: 2rem;
    font-weight: 500;
    color: ${styles.textColor};
  }

  .cards-container {
    display: flex;
    gap: 2rem;
  }
`;

export default Home;
