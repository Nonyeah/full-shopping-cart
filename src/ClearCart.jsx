export default function ClearCart({ clearcartcontents, setIsCartEmpty }) {
  return (
    <div className="clearcart">
      <button
        type="button"
        onClick={() => {
          clearcartcontents([]);
          setIsCartEmpty(true);
        }}
      >
        {" "}
        clear cart
      </button>
    </div>
  );
}
