import styled from 'styled-components';
import styles from '../../styles/styles';
import { fireConfirm } from '../../features/confirmSlice';
import { removeEmpresa } from '../../features/dataSlice';
import { useDispatch } from 'react-redux';
import { IConfirm } from '../../interfaces/interfaces';

const ConfirmModal: React.FC<IConfirm> = ({ id, msg }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeEmpresa({ id: id }));
    dispatch(fireConfirm({ value: false, msg: '', id: '' }));
  };

  return (
    <Wrapper>
      <div className='confirm-container'>
        <p className='confirm-msg'>{msg}</p>
        <div className='btn-container'>
          <button className='btn btn-confirm' onClick={deleteItem}>
            Sim
          </button>
          <button
            className='btn btn-close'
            onClick={() =>
              dispatch(fireConfirm({ value: false, msg: '', id: '' }))
            }
          >
            Fechar
          </button>
        </div>
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
  background-color: ${styles.effects.overlay};
  height: 100vh;
  width: 100vw;
  z-index: 100;

  .confirm-container {
    position: absolute;
    padding: 3rem 5rem;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    border-radius: 0.4rem;
  }

  .confirm-msg {
    font-size: 1.5rem;
    color: ${styles.colors.colorGrayLight};
    text-align: center;
  }

  .btn-container {
    display: flex;
    gap: 2rem;
  }

  .btn {
    margin: 2rem auto 0 auto;
    border: none;
    color: #fff;
    border-radius: 0.4rem;
    width: 8rem;
    padding: 1rem 0;
    cursor: pointer;
    
    &:active {
      transform: translateY(2px);
    }

    &-confirm {
      background-color: ${styles.colors.colorPurple};
    }

    &-close {
      background-color: ${styles.colors.colorDanger};
    }
  }
`;
export default ConfirmModal;
