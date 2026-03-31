export default function Shipping({ selectshipping, shippingalert, shipping }) {
  return (
    <div className="shippingcontainer">
      <span>Shipping options</span>
      <select onChange={(e) => selectshipping(e)}>
        <option value="">--Please choose an option--</option>
        <option value="standard">standard shipping - £3.95</option>
        <option value="express">express shipping - £6.95</option>
      </select>
      <p style={{ color: "red" }}>{shipping ? "" : shippingalert}</p>
    </div>
  );
}
