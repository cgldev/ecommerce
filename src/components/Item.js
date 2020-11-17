import Productos from "./Productos";

export default function Item({ productId, productName }) {
  return (
    <>
      <div key={productId}>{productName}</div>
    </>
  );
}
