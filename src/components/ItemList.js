import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <>
      {products.map((product) => (
        <Item products={product} />
      ))}
    </>
  );
}
