import { Link } from "react-router-dom";

export default function Item({ game }) {
  return (
    <>
      <Link to={"/detalle" + game.id}>{game.title}</Link>

      <img src="" alt="" />
      <p> id: {game.id}</p>
    </>
  );
}
