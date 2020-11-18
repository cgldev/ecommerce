export default function Item({ products }) {
  return (
    <>
      <div key={products.id}>{products.name}</div>
    </>
  );
}
