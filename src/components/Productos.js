import { useParam, useParams } from "react-router-dom";

export default function Productos() {
  const { query } = useParams();

  return (
    <>
      <h1>Componente Productos {query}</h1>
    </>
  );
}
