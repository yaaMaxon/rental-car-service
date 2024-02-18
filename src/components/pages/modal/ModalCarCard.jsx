import * as React from 'react';
import Modal from "@mui/material/Modal";

import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/cars/slice';
import { selectorDataForModal } from '../../../redux/cars/selectors';
import ModalContent from './ModalContent';
import { useCallback } from 'react';

const ModalCarCard = () => {
const dispatch = useDispatch();
  const data = useSelector(selectorDataForModal);

  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  React.useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        handleClose();
        document.body.style.overflow = 'visible';
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleClose]);

    return (
        <div>
            <Modal 
            open={Boolean(data)}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal=description'>
                <ModalContent 
                data={data}
                handleClose={handleClose}>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ModalCarCard;