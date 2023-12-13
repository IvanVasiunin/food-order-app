import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, order, closeModal, onPlus, onMinus }) {
  const dialog = useRef();

  const totalSum = order.reduce(
    (sum, dish) => sum + dish.count * dish.price,
    0
  );

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      <div className="cart">
        <h2>Your cart</h2>
        <ul>
          {order.map(dish => {
            return (
              <li className="cart-item" key={dish.id}>
                <p>
                  {dish.name} - {dish.count} x ${dish.price}
                </p>
                <div className="cart-item-actions">
                  <button onClick={() => {onMinus(dish.id)}}>-</button>
                  <span>{dish.count}</span>
                  <button onClick={() => onPlus(dish.id)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="cart-total">${totalSum}</div>
        <div className="modal-actions">
          <button onClick={closeModal} className="text-button">Close</button>
          <button className="button">Checkout</button>
        </div>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
}
