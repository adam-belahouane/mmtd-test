import { useEffect, useState } from "react";

interface Props {
  Name: string
  Cost: number
  amount: number
  updateAmount: any
  id: number
  clearItem: any
  currency: string
}

const BasketItem = ({ Name, Cost, amount, updateAmount, id, clearItem, currency }: Props) => {
  const [total, setTotal] = useState(amount * Cost);

  useEffect(() => {
    setTotal(amount * Cost);
  }, [amount, Cost]);
  return (
    <div className="basket-item">
      <h2 className="item-name">{Name}</h2>
      <div className="d-flex d-row item-amount-con">
        <button onClick={() => updateAmount(id, amount - 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-dash plus"
            viewBox="0 0 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
        <input
          type="number"
          className="item-amount"
          value={amount}
          onChange={(event) => updateAmount(id, event.target.value)}
        />
        <button onClick={() => updateAmount(id, amount + 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg plus"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </button>
      </div>
      <h3 className="item-total">{currency}{total.toFixed(2)}</h3>
      <svg
        onClick={() => clearItem(id)}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-x cross"
        viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </div>
  );
};

export default BasketItem;
