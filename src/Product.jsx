import { useState } from 'react';

export default function Product(props) {
  const [count, setCount] = useState(0);

  const { name, description, image } = props.details;

  function handleIncrementClick() {
    setCount(count + 1);
  }

  function handleDecrementClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="product">
      <img src={image} width="50" alt="" />
      <div className="product-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="product-buttons">
        <button className="product-sub" disabled={count === 0} onClick={handleDecrementClick}>
          -
        </button>
        <h3 className="product-count">{count > 0 && count}</h3>
        <button className="product-add" onClick={handleIncrementClick}>
          +
        </button>
      </div>
    </div>
  );
}
