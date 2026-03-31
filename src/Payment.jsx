export default function Payment({
  cartcontents,
  shipping,
  setcheckout,
  setcomplete,
  setpayment,
}) {
  let total = 0;
  cartcontents.forEach((value) => (total += value.price));
  return (
    <div className="checkoutitems">
      <h2 class="header-title">Checkout Summary</h2>
      <h3>Product Description</h3>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartcontents.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{`£${product.price}`}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"></td>
            <td>{`Total: £${total.toFixed(2)}`}</td>
          </tr>
        </tfoot>
      </table>
      <div className="checkouttotal">
        <p>Subtotal: £{total.toFixed(2)}</p>
        <p>Shipping: £{shipping}</p>
        <p>Total: £{total + shipping}</p>
      </div>

      <div className="paymentbuttons">
        <button onClick={() => setcheckout(true)}>back to cart</button>{" "}
        <button
          type="button"
          onClick={() => {
            setpayment(null);
            setcomplete(true);
          }}
        >
          payment
        </button>
      </div>
    </div>
  );
}
