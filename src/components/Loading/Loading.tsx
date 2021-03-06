import styled from 'styled-components';
import spinner from './../../assets/spinner.svg';

const Loading:React.FC = () => {
  return (
    <Spinner>
      <img src={spinner} alt='loading' />
    </Spinner>
  );
};

const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Loading;
