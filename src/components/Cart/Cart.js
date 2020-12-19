import useCartContext from "../../context/cartContext.js";
export default function Cart() {
  const { games } = useCartContext();

  console.log(games);
  return (
    <>
      <h1>CART</h1>
      {games.map((game) => (
        <h1>{game.name}</h1>
      ))}
    </>
  );
}
