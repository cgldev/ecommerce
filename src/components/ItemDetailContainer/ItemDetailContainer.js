import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const url = `https://api.rawg.io/api/games/${id}`;
    console.log(url);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setDetail(response);
        setLoading(false);
      }, 2000);
  }, [id]);

  return <>{loading ? <h1>Loading...</h1> : <ItemDetail detail={detail} />}</>;
}
