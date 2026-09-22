import axios from 'axios'
import formatCurrency from '../../utiles/funds'


export function ProductGrid( {ProductData} ) {

    function CartAdding () {
        // alert( "Axios")
        axios.post('http://localhost:3000/api/cart').then((response) => {

        })
    }
  return (
    <>
      <div className="main-content-product js-product-grid">
        {ProductData.map((data) => {
          return (
            <div key={data.id} className="product-image-content">
              <div className="product-image-div">
                <img
                  src={`http://localhost:3000/${data.image}`}
                  // {data.image}
                  className="product-image-div"
                />
              </div>

              <div className="product-content">
                <p className="product-name">{data.name}</p>

                <div className="rating-added-cart">
                  <div className="rating-and-count">
                    <img
                      src={`http://localhost:3000/images/ratings/rating-${data.rating.stars * 10}.png`}
                      alt="rating4.5"
                      className="rating-star"
                    />
                    <p className="rating-count">{data.rating.count} </p>
                  </div>

                  <div className="added-to-cart"> Added </div>
                </div>

                <div className="price-picker">
                  <p className="pricing">{formatCurrency(data.priceCents)}</p>

                  <select className="product-quantity">
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
                onClick = {CartAdding}
                >
                     Add to cart
              </button>
            </div>
          );
        })}

      </div>
    </>
  );
}
