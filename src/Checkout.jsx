export default function Checkout({
  baskettotal,
  iteminbasket,
  setbaskettotal,
  removeiteminbasket,
  changeAmount,
}) {
  return (
    <li key={iteminbasket.id}>
      <span>{iteminbasket.name}</span>
      <button onClick={() => removeiteminbasket(iteminbasket)}>delete </button>
      <input
        value={iteminbasket.quantity}
        onChange={(e) => {
          changeAmount(
            baskettotal,
            setbaskettotal,
            iteminbasket,
            e.target.value,
          );
        }}
        size="2"
      />
      <span>{`£${iteminbasket.price.toFixed(2)}`}</span>
    </li>
  );
}
