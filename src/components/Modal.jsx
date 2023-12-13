import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Orders from './Orders';
import Checkout from './Checkout';

export default function Modal({ isOpen, order, closeModal, onPlus, onMinus }) {
  const dialog = useRef();
  const [checkOutStarted, setCheckOutStarted] = useState(false);

  const totalSum = order
    .reduce((sum, dish) => sum + dish.count * dish.price, 0)
    .toFixed(2);

  function handleClickCheckout() {
    if (order.length === 0) {
      return;
    }
    setCheckOutStarted(true);
  }

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {!checkOutStarted && (
        <Orders
          order={order}
          closeModal={closeModal}
          onPlus={onPlus}
          onMinus={onMinus}
          clickCheckout={handleClickCheckout}
          totalSum={totalSum}
        />
      )}
      {checkOutStarted && (
        <Checkout totalSum={totalSum} closeModal={closeModal} />
      )}
    </dialog>,
    document.getElementById('modal')
  );
}
