import React from "react";
import { useState, useRef } from "react";
import "./App.css";

import Checkout from "./Checkout";
import Shipping from "./Shipping";
import DisplayItems from "./DisplayItems";
import Buttons from "./Buttons";
import Payment from "./Payment";
import CreditCard from "./CreditCard";
import ClearCart from "./ClearCart";
import Address from "./Address";

export const products = [
  { id: 0, name: "Kayla Tote", price: 129, quantity: 0 },
  { id: 1, name: "carys clutch", price: 69, quantity: 0 },
  { id: 2, name: "athena tote", price: 185, quantity: 0 },
  { id: 3, name: "Chloe Clutch", price: 49, quantity: 0 },
  { id: 4, name: "Emerald Dragon Ring", price: 59, quantity: 0 },
  { id: 5, name: "diana jersey jumpsuit", price: 29, quantity: 0 },
  { id: 7, name: "green onyx drop earrings", price: 69, quantity: 0 },
];

function Cart() {
  const [item, setitem] = useState([]);
  const [checkout, setcheckout] = useState(false);
  const [shipping, setshipping] = useState(null);
  const [payment, setpayment] = useState(null);
  const [shippingalert, setshippingalert] = useState("");
  const [complete, setcomplete] = useState(false);
  const [error, seterror] = useState("");
  const [confirmpay, setconfirmpay] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  function removeItem(button) {
    let itemDelete = item.find((product) => product.id == button.id);
    let basket = item.filter((product) => product.id != itemDelete.id);
    if (!basket.length) {
      setitem(basket);
      setcheckout(false);
      setshipping(null);
    } else {
      setitem(basket);
      setcheckout(true);
    }
  }

  function changeAmount(baskettotal, setbaskettotal, iteminbasket, quantity) {
    let itemModified = baskettotal.find((item) => item.id == iteminbasket.id);
    let original = products.find((item) => item.id == itemModified.id);
    let nonmodifieditems = baskettotal.filter(
      (item) => item.id != itemModified.id,
    );
    let index = baskettotal.indexOf(itemModified);
    let updatedItem = {
      ...itemModified,
      price: original.price * quantity,
      quantity: quantity,
    };
    nonmodifieditems.splice(index, 0, updatedItem);
    setbaskettotal(nonmodifieditems);
  }

  function selectshipping(e) {
    if (e.target.value.includes("standard")) {
      setshipping(3.95);
    } else if (e.target.value.includes("express")) {
      setshipping(6.95);
    }
  }

  if (checkout) {
    let total = 0;
    item.forEach((item) => (total += item.price));
    return (
      <>
        <h2 class="header-title">Basket Summary</h2>
        <div className="checkoutpage">
          <ul>
            {item.map((basket) => (
              <Checkout
                key={basket.id}
                iteminbasket={basket}
                removeiteminbasket={removeItem}
                baskettotal={item}
                changeAmount={changeAmount}
                setbaskettotal={setitem}
              />
            ))}
          </ul>

          <div className="continue">
            <div className="total">
              <p>Total: £{total + shipping}</p>
            </div>

            <button
              type="button"
              onClick={() => {
                setcheckout(false);
                setpayment(false);
                setshipping(null);
              }}
            >
              continue Shopping
            </button>
            <button
              type="button"
              onClick={() => {
                if (!shipping) {
                  setshippingalert("Please select a shipping method ");
                  return;
                }

                setcheckout(false);
                setpayment(true);
              }}
            >
              checkout proceed
            </button>
          </div>
          <Shipping
            selectshipping={selectshipping}
            shippingalert={shippingalert}
            shipping={shipping}
          />
        </div>
      </>
    );
  } else if (payment) {
    return (
      <Payment
        cartcontents={item}
        shipping={shipping}
        setcheckout={setcheckout}
        setcomplete={setcomplete}
        setpayment={setpayment}
      />
    );
  } else if (complete) {
    return (
      <Address
        item={item}
        setconfirmpay={setconfirmpay}
        setcomplete={setcomplete}
        shipping={shipping}
        setpayment={setpayment}
      />
    );
  } else if (confirmpay) {
    return (
      <CreditCard setcomplete={setcomplete} setconfirmpay={setconfirmpay} />
    );
  } else {
    let total = null;
    item.forEach((value) => (total += value.price));
    return (
      <>
        <h2 class="header-title">Express Cart Simulation</h2>
        <div className="cart">
          <p class="empty-cart-message">
            {isCartEmpty
              ? "Your shopping cart is empty, please begin by adding items to the cart"
              : ""}
          </p>
          <ul>
            {item.map((displayproduct) => (
              <DisplayItems
                singlecartitem={displayproduct}
                setitem={setitem}
                cartcontents={item}
                key={displayproduct.id}
              />
            ))}
          </ul>
          <div className="totalbox">
            <p className="errormessage" style={{ color: "red" }}>
              {error}
            </p>
            <span className="total">
              Total: {total || total == 0 ? `£${total.toFixed(2)}` : null}
            </span>
            <button
              type="button"
              className="checkout"
              onClick={() => {
                if (!item.length) {
                  seterror("Please add an item to the cart");
                  return;
                }
                if (total == 0) return;
                setcheckout(true);
              }}
            >
              checkout
            </button>
          </div>
        </div>
        <Buttons
          setItemsInCart={setitem}
          setIsCartEmpty={setIsCartEmpty}
          itemsInCart={item}
          seterror={seterror}
          error={error}
        />
        <ClearCart clearcartcontents={setitem} />
      </>
    );
  }
}

export default function App() {
  return <Cart />;
}
