import axios from "axios";
import { useState } from "react";
import formatCurrency from "../../utiles/funds";

export function Product({ data, fetchCart }) {
  const [quantity, setQuantity] = useState(1);

  function Selector(event) {
    const quantitySelected = Number(event.target.value);
    setQuantity(quantitySelected);
  }

  const addToCart = async () => {
    await axios.post("/api/cart-items", {
      productId: data.id,
      quantity: quantity,
    });
    //Load the cart
    await fetchCart();
  };

  
  return (
    <div className="product-image-content">
      <div className="product-image-div">
        <img
          src={`/${data.image}`}
          // {data.image}
          className="product-image-div"
        />
      </div>

      <div className="product-content">
        <p className="product-name">{data.name}</p>

        <div className="rating-added-cart">
          <div className="rating-and-count">
            <img
              src={`/images/ratings/rating-${data.rating.stars * 10}.png`}
              alt="rating4.5"
              className="rating-star"
            />
            <p className="rating-count">{data.rating.count} </p>
          </div>

          <div className="added-to-cart"> Added </div>
        </div>

        <div className="price-picker">
          <p className="pricing">{formatCurrency(data.priceCents)}</p>

          <select
            className="product-quantity"
            onChange={Selector}
            value={quantity}
          >
            <img src="images/icons/dropsoun-Vector.svg" alt="icon" />
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      <button
        className="call-to-action"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </div>
  );
}
