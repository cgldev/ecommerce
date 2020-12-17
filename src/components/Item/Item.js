import { Link } from "react-router-dom";

export default function Item({ game }) {
  return (
    <>
      <div key={game.id}>
        <Link to={"/detalle" + game.id}>{game.name}</Link>
      </div>
      <img src="" alt="" />
      <p></p>
    </>
  );
}
