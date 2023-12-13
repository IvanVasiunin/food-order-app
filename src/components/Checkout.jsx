export default function Checkout({ totalSum, closeModal }) {

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data)
  }

  return (
    <div className="cart">
      <h2>Checkout</h2>
      <p>Total amount ${totalSum}</p>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="control">
          <label htmlFor="email">E-mail address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input id="street" name="street" type="text" />
        </div>
        <div className="control">
          <div className="control-row">
            <div className="control">
              <label htmlFor="code">Postal code</label>
              <input id="code" name="code" type="text" />
            </div>
            <div className="control">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
          </div>
        </div>{' '}
        <div className="modal-actions">
          <button onClick={closeModal} className="text-button">
            Close
          </button>
          <button type="submit" className="button">
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
}
