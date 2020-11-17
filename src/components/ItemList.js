import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <>
      {products.map((product) => (
        <Item productName={product.name} productId={product.id} />
      ))}
    </>
  );
}
