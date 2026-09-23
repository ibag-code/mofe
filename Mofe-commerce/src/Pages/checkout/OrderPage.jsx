import axios from "axios";
import { Checkoutheader } from "../../components/Header";
import formatCurrency from "../../utiles/funds";
import "./OrderPage.css";
import { useState, useEffect, Fragment } from "react";
import dayjs from "dayjs";

export function Orderpage() {
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/orders?expand=products")
      .then((response) => {
        setOrders(response.data);
      });
  }, []);
  return (
    <>
      <Checkoutheader />

      <div className="orders-page">

        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {Orders.map((order) => {
            return (
            
                <div key={order.id} className="order-container first">
                  <div className="order-header">
                    <div className="order-header-left-section">
                      <div className="order-date">
                        <div className="order-header-label">Order Placed:</div>
                        <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                      </div>

                      <div className="order-total">
                        <div className="order-header-label">Total:</div>
                        <div>{formatCurrency(order.totalCostCents)}</div>
                      </div>
                    </div>

                    <div className="order-header-right-section">
                      <div className="order-header-label">Order ID:</div>
                      <div>{order.id}</div>
                    </div>
                  </div>


                  <div className="order-details-grid">
                    {order.products.map((OrderProduct) => {
                      return (
                        <Fragment key={OrderProduct.product.id} >
                          <div className="product-image-container">
                            <img src=
                            {`http://localhost:3000/${OrderProduct.product.image}`}                             
                            />
                          </div>

                          <div className="product-details">
                            <div className="product-name">
                              {OrderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                              Arriving on: {dayjs(OrderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                            </div>
                            <div className="product-quantity-text">
                              Quantity: {OrderProduct.quantity}
                            </div>

                            <button className="order-call-to-action">
                              <i
                                className="hgi hgi-stroke hgi-rounded hgi-shopping-cart-02
                        buy-again-icon
                        "
                              ></i>

                              <span className="buy-again-message">
                                Add to Cart
                              </span>
                            </button>
                          </div>

                          <div className="product-actions">
                            <a href="/tracking">
                              <button className="track-package-button button-secondary">
                                Track package
                              </button>
                            </a>
                          </div>
                        </Fragment>
                      );
                    })}

                  </div>

                  
                </div>
              
            );
          })}

        </div>

      </div>
    </>
  );
}
