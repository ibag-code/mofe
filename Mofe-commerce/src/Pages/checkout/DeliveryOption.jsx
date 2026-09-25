import axios from "axios";
import dayjs from "dayjs";
import formatCurrency from "../../utiles/funds";

export function DeliveryOptionClick( {cartItem, fetchCart, deliveryOption, reloadPayment }) {
  return (
    <div className="delivery-option-and-header">

      <p className="price-string-head">Choose Delivery Option:</p>

      <div className="delivery-options">
        {deliveryOption.map((deliverOption) => {
          let priceString = "Free Shipping";

          if (deliverOption.priceCents > 0) {
            priceString = `${formatCurrency(deliverOption.priceCents)} - Shipping `;
          }

          //Updating the Deliver Option

          const updDeliverOpt = async () => {
            await axios.put(
              `/api/cart-items/${cartItem.productId}`,
              {
                deliveryOptionId: deliverOption.id,
              },
            );
            await fetchCart();
            reloadPayment();
          };

          return (
            <label
              key={deliverOption.id}
              className="delivery-option"
              onClick={updDeliverOpt}
            >
              <input
                type="radio"
                name={`delivery-${cartItem.productId}`}
                checked={deliverOption.id === cartItem.deliveryOptionId}
                onChange={() => {}}
              />

              <div className="delivery-info">
                <h5>
                  {dayjs(deliverOption.estimatedDeliveryTimeMs).format(
                    "dddd, MMM D",
                  )}
                </h5>
                <p className="price-string">{priceString}</p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
