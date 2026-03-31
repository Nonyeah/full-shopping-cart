import { products } from "./App";

export default function Buttons({
  setItemsInCart,
  setIsCartEmpty,
  itemsInCart,
  seterror,
  error,
}) {
  function addItem(cartProduct) {
    const itemSelected = products.find((item) => item.id == cartProduct.id);
    const itemMultiple = itemsInCart.find((item) => item.id == itemSelected.id);
    if (itemMultiple) {
      const index = itemsInCart.indexOf(itemMultiple);
      const nonDuplicates = itemsInCart.filter(
        (duplicate) => duplicate.id != itemMultiple.id,
      );
      const modifiedproduct = {
        ...itemMultiple,
        price: itemMultiple.price + cartProduct.price,
        quantity: itemMultiple.quantity + 1,
      };

      nonDuplicates.splice(index, 0, modifiedproduct);

      setItemsInCart(nonDuplicates);
    } else {
      setIsCartEmpty(false);
      setItemsInCart([
        ...itemsInCart,
        { ...itemSelected, quantity: itemSelected.quantity + 1 },
      ]);
    }
  }

  function removeItem(cartProduct) {
    const itemSelected = products.find((item) => item.id == cartProduct.id);
    const itemtoBeRemoved = itemsInCart.find(
      (item) => item.id == itemSelected.id,
    );
    if (!itemtoBeRemoved) return;

    /*if(itemtoBeRemoved.quantity === 0) {
      const keepItems = itemsInCart.filter((itemremain) => itemremain.id != itemtoBeRemoved.id);
      setItemsInCart(keepItems);
      return;
    }*/

    const itemsToKeep = itemsInCart.filter(
      (keepitem) => keepitem.id != itemtoBeRemoved.id,
    );

    if (
      itemtoBeRemoved &&
      itemtoBeRemoved.price == cartProduct.price &&
      itemsToKeep.length
    ) {
      setItemsInCart([...itemsToKeep]);
      return;
    } else if (
      itemtoBeRemoved &&
      itemtoBeRemoved.price == cartProduct.price &&
      !itemsToKeep.length
    ) {
      setIsCartEmpty(true);
      setItemsInCart([]);
      return;
    } else {
      const index = itemsInCart.indexOf(itemtoBeRemoved);
      const itemModified = {
        ...itemtoBeRemoved,
        price: itemtoBeRemoved.price - cartProduct.price,
        quantity: itemtoBeRemoved.quantity - 1,
      };
      itemsToKeep.splice(index, 0, itemModified);
      setItemsInCart(itemsToKeep);
    }
  }

  const buttonList = products.map((bag) => (
    <li key={bag.id}>
      <span>{bag.name}</span>
      <button
        tye="button"
        onClick={() => {
          if (error) seterror("");
          addItem(bag);
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          if (error) seterror("");
          removeItem(bag);
        }}
      >
        -
      </button>
    </li>
  ));
  return (
    <div className="buttonlist">
      <ul>{buttonList}</ul>
    </div>
  );
}
