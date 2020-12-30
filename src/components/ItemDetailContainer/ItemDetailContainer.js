import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase/firebase";

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    //referencia
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const itemId = itemCollection.doc(id);
    //pedimos lo datos
    itemId.get().then((response) => {
      console.log(response.data());
      setDetail(response.data());
      setLoading(false);
    });
  }, [id]);

  return <>{loading ? <h1>Loading...</h1> : <ItemDetail detail={detail} />}</>;
}
