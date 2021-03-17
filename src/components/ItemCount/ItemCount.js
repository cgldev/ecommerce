import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ initial, max, min, onAdd }) {
  const [counter, setCounter] = useState(0);

  const addToCounter = () => {
    if (counter < max) {
      setCounter(counter + 1);
      onAdd(counter + 1);
    }
  };

  const subToCounter = () => {
    if (counter > min) {
      setCounter(counter - 1);
      onAdd(counter - 1);
    }
  };

  return (
    <div className="itemCount">
      <button onClick={addToCounter}>
        <i className="fas fa-plus square"></i>
      </button>
      <div className="counter">{counter}</div>
      <button onClick={subToCounter}>
        <i className="fa fa-minus-square" aria-hidden="true"></i>
      </button>
    </div>
  );
}
