import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { DeliveryOptionClick } from "./DeliveryOption";
import { OrderSummary } from "./OrderSummary";
import formatCurrency from "../../utiles/funds";
import { Checkoutheader } from "../../components/Header";
import "./CheckOutPage.css";

export function CheckOutPage({ cart, totalQuantity, fetchCart }) {
  // console.log(totalQuantity);
  const [deliveryOption, setDeliveryOption] = useState([]);

  const [paymentSummary, setPaymentSummary] = useState(null);

  const reloadPayment = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/payment-summary",
    );

    setPaymentSummary(response.data);
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime",
      )
      .then((response) => {
        setDeliveryOption(response.data);
      });

    reloadPayment();
  }, []);

  return (
    <>
      <Checkoutheader />

      <div className="back-checkout">
        <a href="/">
          <i className="hgi hgi-stroke hgi-rounded hgi-arrow-left-01"></i>
        </a>

        <h3>
          Checkout (<span className="checkout">{totalQuantity}</span>item)
        </h3>

        <h3 className="dont-display">
          Checkout <span>(2 item)</span>
        </h3>
      </div>

      <div className="main-body-content">
        <div className="all-product">
          {deliveryOption.length > 0 &&
            cart.map((cartItem) => {
              const selectedDeliveryOption = deliveryOption.find(
                (deliverOption) => {
                  return deliverOption.id === cartItem.deliveryOptionId;
                },
              );
              // console.log(selectedDeliveryOption)

              const deleteCart = async () => {
                await axios.delete(
                  `http://localhost:3000/api/cart-items/${cartItem.productId}`,
                );

                await fetchCart();
              };

              return (
                <div key={cartItem.productId} className="product-image-cotent">
                  <div className="product-image">
                    <img
                      src={`http://localhost:3000/${cartItem.product.image}`}
                      //   "images/product/socks.jpg"
                      alt=""
                      className="product-image"
                    />
                  </div>

                  <div className="all-content">
                    <div className="product-content-cancel-icon">

                      <div className="delivery-price-quantity">
                        <p className="tender-date">
                          Delivery date: <span></span>
                          {dayjs(
                            selectedDeliveryOption.estimatedDeliveryTimeMs,
                          ).format("ddd, MMM D")}
                        </p>

                        <h5>{cartItem.product.name}</h5>

                        <h2>{formatCurrency(cartItem.product.priceCents)}</h2>

                        <p>
                          Quantity: <span>{cartItem.quantity}</span>
                        </p>
                      </div>

                      <div className="cancel-icon" onClick={deleteCart}>
                        <i className="hgi hgi-stroke hgi-rounded hgi-cancel-01"></i>
                      </div>

                    </div>

                    
                      <DeliveryOptionClick
                        cartItem={cartItem}
                        fetchCart={fetchCart}
                        deliveryOption={deliveryOption}
                        reloadPayment={reloadPayment}
                      />
                  
                  </div>
                </div>
              );
            })}
        </div>

        <OrderSummary paymentSummary={paymentSummary} />
      </div>
    </>
  );
}
