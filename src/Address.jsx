import { useRef, useState } from "react";
import {
  Title,
  FirstName,
  LastName,
  Address1,
  Address2,
  Town,
  County,
  Country,
  Postcode,
  Telephone,
  Email,
} from "./userAddress/AddressInputs";

import {
  TitleSame,
  FirstNameSame,
  LastNameSame,
  Address1Same,
  Address2Same,
  TownSame,
  CountySame,
  PostcodeSame,
  TelephoneSame,
  EmailSame,
} from "./userAddress/AddressOutputs";

import OtherInfo from "./OtherInfo";
import PaymentButtons from "./PaymentButtons";

export default function Address({
  item,
  setpayment,
  setconfirmpay,
  setcomplete,
  shipping,
}) {
  let total = 0;
  item.forEach((amount) => (total += amount.price));
  const [sameaddress, setsameaddress] = useState(false);
  const ref = useRef(null);

  function storeUserInput(e) {
    if (!ref.current) {
      ref.current = new Map();
    }
    ref.current.set(e.target.id, e.target.value);
  }

  const paymentTable = item.map((buy) => (
    <tr key={buy.id}>
      <td>{buy.name}</td>
      <td>{buy.quantity}</td>
      <td>£{buy.price}</td>
    </tr>
  ));

  return (
    <>
      <h2 class="header-title">Delivery Details</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{paymentTable}</tbody>
        <tfoot>
          <tr>
            <td colSpan="2"></td>
            <td>{`Total Including Shipping: £${total + shipping}`}</td>
          </tr>
        </tfoot>
      </table>

      <form>
        <p>
          {" "}
          Please enter your details below For credit/debit card orders, the
          address should be where your credit/debit card is registered
        </p>
        <p className="billing">Billing address</p>
        <Title storeUserInput={storeUserInput} />
        <FirstName storeUserInput={storeUserInput} />
        <LastName storeUserInput={storeUserInput} />
        <Address1 storeUserInput={storeUserInput} />
        <Address2 storeUserInput={storeUserInput} />
        <Town storeUserInput={storeUserInput} />
        <County storeUserInput={storeUserInput} />
        <Country storeUserInput={storeUserInput} />
        <Postcode storeUserInput={storeUserInput} />
        <Telephone storeUserInput={storeUserInput} />
        <Email storeUserInput={storeUserInput} />

        <p className="same">
          Delivery address{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (!ref.current) return;
              setsameaddress(true);
            }}
          >
            Click here if delivery address is the same as billing address
          </a>
        </p>

        <div className="paymentbuttons">
          <button
            onClick={() => {
              setpayment(true);
              setcomplete(false);
            }}
          >
            back to cart
          </button>
        </div>

        {sameaddress && (
          <>
            <p className="delivery">Delivery address</p>
            <TitleSame map={ref} />
            <FirstNameSame map={ref} />
            <LastNameSame map={ref} />
            <Address1Same map={ref} />
            <Address2Same map={ref} />
            <TownSame map={ref} />
            <CountySame map={ref} />
            <PostcodeSame map={ref} />
            <TelephoneSame map={ref} />
            <EmailSame map={ref} />
            <OtherInfo />
            <PaymentButtons
              paybycreditcard={setconfirmpay}
              setcomplete={setcomplete}
              setpayment={setpayment}
            />

            <div className="paymentbuttons">
              <button
                onClick={() => {
                  setpayment(true);
                  setcomplete(false);
                }}
              >
                back to cart
              </button>{" "}
              <button
                type="button"
                onClick={() => {
                  setcomplete(false);
                  setconfirmpay(true);
                }}
              >
                payment
              </button>
            </div>
          </>
        )}
      </form>
    </>
  );
}
