export default function CreditCard({ setconfirmpay, setdelivery }) {
  return (
    <>
      <h2 class="header-title">Payment Page</h2>
      <div className="paymentcontainer">
        <div className="cardlogos">
          <p>Payment options</p>
          <img src="https://www.thefashionconnector.com/static/general_images/credit_card.jpg" />
        </div>

        <form className="formpayment">
          <div className="cardname">
            <p>Name on card</p>
            <input type="text" required />
          </div>

          <div className="cardnumber">
            <p>Card number</p>
            <input type="text" required />
          </div>

          <div className="cvv">
            <div>
              <p> Expiry Date </p>
              <p>
                <span>Format: MM/YY</span>
              </p>
              <input type="text" required />
            </div>
            <div>
              <p>Security Code (CVV) </p>
              <p>
                <span>3 digit code</span>
              </p>
              <input type="text" required />
            </div>
          </div>

          <div className="paynow">
            <button type="submit" onClick={(e) => e.preventDefault()}>
              Pay Now{" "}
            </button>
          </div>

          <div className="paymentbuttons">
            <button
              onClick={() => {
                setconfirmpay(false);
                setdelivery(true);
              }}
            >
              back to cart
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
