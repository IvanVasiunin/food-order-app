export default function Orders({
  order,
  closeModal,
  onMinus,
  onPlus,
  clickCheckout,
  totalSum
}) {

  let cart = <h2>Cart is empty</h2>;

  if (order.length > 0) {
    cart = (
      <>
        <h2>Your cart</h2>
        <ul>
          {order.map(dish => (
            <li className="cart-item" key={dish.id}>
              <p>
                {dish.name} - {dish.count} x ${dish.price}
              </p>
              <div className="cart-item-actions">
                <button onClick={() => onMinus(dish.id)}>-</button>
                <span>{dish.count}</span>
                <button onClick={() => onPlus(dish.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">${totalSum}</div>
      </>
    );
  }

  return (
    <div className="cart">
      {cart}
      <div className="modal-actions">
        <button onClick={closeModal} className="text-button">
          Close
        </button>
        <button onClick={clickCheckout} className="button">
          Checkout
        </button>
      </div>
    </div>
  );
}
