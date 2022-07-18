import { useEffect, useState } from "react";
import BasketItem from "./BasketItem";

type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>

interface Products {
  Name: string
  Cost: number
  id: number
  amount: number
}

const Basket = () => {
  const [basketItems, setBasketItems] = useState([
    { Name: "Mountain Dew", Cost: 1.8, id: 2, amount: 1 },
    { Name: "Coke", Cost: 1.3, id: 3, amount: 1 },
    { Name: "Pepsi", Cost: 1.1, id: 4, amount: 1 },
  ]);

  const [totalCost, setTotalCost] = useState(0);
  const [currency, setCurrency] = useState<string>("£")

  const fetchCheckOut = async () => {
    try {
      let res = await fetch('/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: basketItems
        })
      })
      if (res.ok) {
        let data = await res.json()
        console.log(data);

      }
    } catch (error) {
      console.log(error);

    }

  }

  const changeCurrency: SelectChangeEventHandler = (event) => {
    let newArray: Products[] = [{ Name: "Mountain Dew", Cost: 1.8, id: 2, amount: 1 }]

    const poundToEuro = 1.1811435
    const PoundToDollar = 1.1835207
    const EuroToPound = 0.84663719
    const DollarToPound = 0.84493661
    const DollarToEuro = 0.99778897
    const EuroToDollar = 1.0022586

    const roundToTwoDP = (num: number) => Math.round(num * 100) / 100

    if (currency === "£") {
      if (event.target.value === "€") {
        newArray = basketItems.map((item) => {
          return { ...item, Cost: roundToTwoDP(item.Cost * poundToEuro) };
        });

      } else {
        newArray = basketItems.map((item) => {
          return { ...item, Cost: roundToTwoDP(item.Cost * PoundToDollar) };
        });
      }

    } else if (currency === "$") {
      if (event.target.value === "€") {
        newArray = basketItems.map((item) => {
          return { ...item, Cost: roundToTwoDP(item.Cost * DollarToEuro) };
        });

      } else {
        newArray = basketItems.map((item) => {
          return { ...item, Cost: roundToTwoDP(item.Cost * DollarToPound) };
        });
      }
    } else {
      if (event.target.value === "$") {
        newArray = basketItems.map((item) => {
          return { ...item, Cost: roundToTwoDP(item.Cost * EuroToDollar) };
        });

      } else {
        newArray = basketItems.map((item) => {
          return { ...item, Cost: roundToTwoDP(item.Cost * EuroToPound) };
        });
      }
    }
    setCurrency(event.target.value)
    setBasketItems(newArray);
  }

  const clearItem = (id: number) => {
    const newArray = basketItems.map((obj) => {
      if (obj.id === id) {
        return { ...obj, amount: 0 };
      }
      return obj;
    });

    setBasketItems(newArray);
  };

  const updateAmount = (id: number, value: number) => {
    const newArray = basketItems.map((obj) => {
      if (obj.id === id) {
        if (value < -0.5) {
          return { ...obj, amount: 0 };
        }
        return { ...obj, amount: value };
      }

      return obj;
    });

    setBasketItems(newArray);
  };

  const updateTotalCost = () => {
    let x = 0;
    basketItems.forEach((item) => (x = x + item.Cost * item.amount));
    x = x * 1.2
    setTotalCost(x);
  };

  const clearBasket = () => {
    let newArray = basketItems.map((item) => {
      return { ...item, amount: 0 };
    });

    setBasketItems(newArray);
  };

  useEffect(() => {
    updateTotalCost();
  }, [basketItems]);
  return (
    <div className="basket-con">
      <div className="basket-main">
        <select onChange={(event) => changeCurrency(event)} name="currency" id="currency">
          <option value="£">£</option>
          <option value="$">$</option>
          <option value="€">€</option>
        </select>
        {basketItems.length > 0 &&
          basketItems.map((item) => (
            <BasketItem
              key={item.id}
              id={item.id}
              Name={item.Name}
              Cost={item.Cost}
              amount={item.amount}
              updateAmount={updateAmount}
              clearItem={clearItem}
              currency={currency}
            />
          ))}
      </div>
      <div className="basket-bottom">
        <h1>{currency}{totalCost.toFixed(2)}</h1>
        <div className="d-flex d-row">
          <h3 className="clear-btn" onClick={() => clearBasket()}>
            Clear
          </h3>
          <h3 onClick={fetchCheckOut} className="check-out-btn">Check Out {">"}</h3>
        </div>
      </div>
    </div>
  );
};

export default Basket;
