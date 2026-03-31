export default function ClearCart({ clearcartcontents }) {
  return (
    <div className="clearcart">
      <button type="button" onClick={() => clearcartcontents([])}>
        {" "}
        clear cart
      </button>
    </div>
  );
}
