import formatCurrency from "../../utiles/funds";

export function OrderSummary({ paymentSummary }) {
  return (
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
  );
}
