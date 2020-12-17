import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://api.rawg.io/api/games/${id}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setDetail(response);
      });
  }, [id]);

  return (
    <>
      <h1>Item Detail Container id={id}</h1>
      <ItemDetail detail={detail} />
    </>
  );
}
