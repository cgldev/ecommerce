import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <>
      <Link to={"/detalle" + item.id}>{item.title}</Link>

      <img src="" alt="" />
      <p> id: {item.id}</p>
    </>
  );
}
