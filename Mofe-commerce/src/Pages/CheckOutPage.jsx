import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import formatCurrency from "../utiles/funds";
import { Checkoutheader } from "../components/Header";
import "./CheckOutPage.css";

export function CheckOutPage({ cart, totalQuantity, fetchCart }) {
  // console.log(totalQuantity);
  const [deliveryOption, setDeliveryOption] = useState([]);

  const [paymentSummary, setPaymentSummary] = useState(null);

  const reloadPayment = async () => {
     const response = await axios.get("http://localhost:3000/api/payment-summary");
     
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

      reloadPayment()
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
                    <div className="delivery-price-quantity">
                      <p className="tender-date">
                        Delivery date:
                        {dayjs(
                          selectedDeliveryOption.estimatedDeliveryTimeMs,
                        ).format("dddd, MMMM D")}
                      </p>

                      <h5>{cartItem.product.name}</h5>

                      <h1>{formatCurrency(cartItem.product.priceCents)}</h1>

                      <p>
                        Quantity <span>{cartItem.quantity}</span>
                      </p>
                    </div>

                    <div className="cancel-delivery-option">
                      <div className="cancel-icon">
                        <i className="hgi hgi-stroke hgi-rounded hgi-cancel-01"></i>
                      </div>

                      <div className="delivery-option-and-header">
                        <p>Choose Delivery Option:</p>

                        <div className="delivery-options">
                          {deliveryOption.map((deliverOption) => {
                            let priceString = "Free Shipping";

                            if (deliverOption.priceCents > 0) {
                              priceString = `${formatCurrency(deliverOption.priceCents)} - Shipping `;
                            }

                            //Updating the Deliver Option

                            const updDeliverOpt = async () => {
                              await axios.put(
                                `http://localhost:3000/api/cart-items/${cartItem.productId}`,
                                {
                                  deliveryOptionId: deliverOption.id,
                                },
                              );
                              await fetchCart();
                              reloadPayment()
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
                                  checked={
                                    deliverOption.id ===
                                    cartItem.deliveryOptionId
                                  }
                                  onChange={() => {}}
                                />

                                <div className="delivery-info">
                                  <h5>
                                    {dayjs(
                                      deliverOption.estimatedDeliveryTimeMs,
                                    ).format("dddd, MMMM D")}
                                  </h5>
                                  <p>{priceString}</p>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="order-summary">
          <h3 className="summary-title"> Order Summary </h3>

          {paymentSummary && (
            <>
              <div>
                <p>Item ({paymentSummary.totalItems}):</p>

                <p>{formatCurrency(paymentSummary.productCostCents)}</p>
              </div>

              <div>
                <p>Shipping and Handling :</p>

                <p>{formatCurrency(paymentSummary.shippingCostCents)}</p>
              </div>

              <hr />

              <div>
                <p>Estimated tax (10%):</p>

                <p>{formatCurrency(paymentSummary.taxCents)}</p>
              </div>

              <div>
                <p>Total before tax:</p>

                <p>{formatCurrency(paymentSummary.totalCostBeforeTaxCents)}</p>
              </div>

              <hr />

              <div className="Total">
                <h3>Order Total</h3>

                <h3>{formatCurrency(paymentSummary.totalCostCents)}</h3>
              </div>

              <a className="order-btn call-to-action" href="./order">
                Place Order
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}
