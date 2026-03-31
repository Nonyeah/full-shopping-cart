export default function PaymentButtons({ paybycreditcard, setcomplete }) {
  return (
    <div className="payment">
      <button
        type="button"
        onClick={() => {
          paybycreditcard(true);
          setcomplete(false);
        }}
      >
        Click here to pay with your credit/debit card using Barclay Card
        payments
      </button>
      <button
        type="button"
        onClick={() => {
          paybycreditcard(true);
          setcomplete(false);
        }}
      >
        click here to pay with your credit card using Pay Pal
      </button>
    </div>
  );
}
