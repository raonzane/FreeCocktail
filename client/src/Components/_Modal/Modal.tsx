import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ModalContainer, Container, Header } from './Modal.style';

type ModalProps = {
  data: any;
  close(bool: boolean): void;
};

const Modal: React.FC<ModalProps> = function Modal({ data, close }) {
  return (
    <ModalContainer>
      <Container>
        <Header>
          <CloseIcon
            onClick={() => close(false)}
            style={{ cursor: 'pointer' }}
          />
        </Header>
        {data}
      </Container>
    </ModalContainer>
  );
};

export default Modal;
