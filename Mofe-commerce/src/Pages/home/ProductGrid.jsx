import { Product } from './product'

export function ProductGrid({ ProductData, fetchCart }) {

  return (
    <>
      <div className="main-content-product js-product-grid">
        {ProductData.map((data) => {
          return (

            <Product key={data.id} data={data} fetchCart={fetchCart}  />

          );
        })}
      </div>
    </>
  );
}
