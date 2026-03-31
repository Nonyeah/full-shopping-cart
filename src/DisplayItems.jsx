import { products } from "./App";
import { useState } from "react";

export default function DisplayItems({
  singlecartitem,
  setitem,
  cartcontents,
}) {
  const [value, setvalue] = useState("");
  let displayitem = products.find((item) => item.id === singlecartitem.id);

  function updater(carttotal, quantity) {
    let itemmodified = carttotal.find((elem) => elem.id == singlecartitem.id);
    if (itemmodified) {
      let index = carttotal.indexOf(itemmodified);
      let nonmodifieditems = carttotal.filter(
        (item) => item.id != itemmodified.id,
      );
      let modifiedproduct = {
        ...itemmodified,
        price: displayitem.price * quantity,
        quantity: quantity,
      };
      nonmodifieditems.splice(index, 0, modifiedproduct);
      return nonmodifieditems;
    }
  }

  return (
    <li className="itemsincart">
      <span>{singlecartitem.name}</span>
      {value
        ? `£${singlecartitem.price.toFixed(2)} `
        : `£${singlecartitem.price.toFixed(2)}`}
      <input
        size="2"
        onChange={(e) => {
          setvalue(e.target.value);
          setitem(updater(cartcontents, +e.target.value));
        }}
        value={singlecartitem.quantity}
      />
    </li>
  );
}
