import axios from 'axios';
import formatCurrency from '../utiles/funds'
import { useEffect, useState } from 'react';
// import { ProductData } from '../Data/data.jsx'
import './HomePage.css'; 



export function HomePage ( {cart}) {

    const [ProductData, setProductData] = useState([]) 

    //Lifting for global access
    // const [cart, setCart] = useState([])

    
    useEffect(() => {

        axios.get ("http://localhost:3000/api/products")
            .then((response) => {
                    setProductData(response.data)
        })


        // axios.get('http://localhost:3000/api/cart-items').then((response) => {
        //     setCart(response.data)
        // })

    }, [])

     
    //Simplest way to fetch data from the Back end


        //ways to use fetch method
    //  fetch("http://localhost:3000/api/products")
    //     .then((response) => {
    //         response.json().then((productdata) => {
    //             console.log(productdata)
    //         })
    //     })



        //Shortcut for fetching data
    //  fetch("http://localhost:3000/api/products")
    //     .then((response) => {
    //         return response.json()
    //     }).then((productdata) => {
    //             console.log(productdata)
    //     })

    let totalQuantity = 0;
    // console.log(cart)
    cart.forEach((cartList)=> {
        // console.log(cartList)
        totalQuantity = totalQuantity + cartList.quantity
    })


    return (
        <>
        <header>

            <div className="vurno-logo-div">

                <img src="images/product/Vurno-logo.jpg" alt="Mofe-logo" className="vurno-logo" />

            </div>


            <div 

                className="search-bar-and-input">
                
                        <input type="text" placeholder="Search" className="input-field" />

                    <button className="search-bar-icon">

                        <i className="hgi hgi-stroke hgi-rounded hgi-search-01 search-icon" ></i>

                    </button>

            </div>



            <a

                className="cart-icon-number" 
                href='/checkout'>



                <i className="hgi hgi-stroke hgi-rounded hgi-shopping-cart-02 cart-icon"></i>


                <p className="cart-number js-cart-number">{totalQuantity}</p>

            </a>



        </header>

        <main className="main-content-product js-product-grid">

            {ProductData.map( (data) => {
                return (
                    
                <div 
                    key={ data.id }                    className="product-image-content"
                >

                    <div className="product-image-div">
                        <img src={`http://localhost:3000/${data.image}`} 
                        // {data.image} 
                             className="product-image-div" 
                        />
                    </div>

                    <div className="product-content">
                        <p className="product-name">{data.name}</p>

                        <div className="rating-added-cart">
                            
                            <div className="rating-and-count">
                                <img 
                                    src=

                                    {`http://localhost:3000/images/ratings/rating-${(data.rating.stars) * 10}.png`}

                                    alt="rating4.5" 
                                    className="rating-star" 
                                />
                                <p className="rating-count">{data.rating.count} </p>
                            </div>



                            <div className="added-to-cart"> Added </div>
                        </div>


                        <div className="price-picker">
                            <p className="pricing">
                            {formatCurrency(data.priceCents)}
                            </p>

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

                    <button className="call-to-action"> Add to cart</button>
                </div>
                   
                    
                )
            })}


 
               
{/* 
            <div className="product-image-content">

                <div className="product-image-div">
                    <img src="images/product/socks.jpg" alt="productimage" className="product-image-div" />
                </div>

                <div className="product-content">
                    <p className="product-name">Black and Gray Athletic Cotton Socks - 6 Pairs</p>

                    <div className="rating-added-cart">
                        
                        <div className="rating-and-count">
                            <img src="images/ratings/Rating 4.5.svg" alt="rating4.5" className="rating-star" />
                            <p className="rating-count">87</p>
                        </div>



                        <div className="added-to-cart"> Added </div>
                    </div>


                    <div className="price-picker">
                        <p className="pricing">$6.99</p>

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

                <button className="call-to-action"> Add to cart</button>
            </div>


            <div className="product-image-content">

                <div className="product-image-div">
                    <img src="images/product/Basketball.jpg " alt="productimage" className="product-image-div" />
                </div>

                <div className="product-content">
                    <p className="product-name">Adults Plain Cotton T-Shirt - 2 Pack</p>

                    <div className="rating-added-cart">
                        
                        <div className="rating-and-count">
                            <img src="images/ratings/Rating 4.5.svg" alt="rating4.5" className="rating-star" />
                            <p className="rating-count">87</p>
                        </div>



                        <div className="added-to-cart"> Added </div>
                    </div>

                    <div className="price-picker">
                        <p className="pricing">$12.99</p>

                        <select className="product-quantity">
                            <img src="images/icons/dropsoun-Vector.svg" alt="" />
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

                <button className="call-to-action"> Add to cart</button>
            </div>


            <div className="product-image-content">

                <div className="product-image-div">
                    <img src="images/product/tshirt.jpg" alt="productimage" className="product-image-div" />
                </div>

                <div className="product-content">
                    <p className="product-name">Adults Plain Cotton T-Shirt - 2 Pack</p>

                    <div className="rating-and-count">
                        <img src="images/ratings/Rating 4.0.svg" alt="rating4.5" className="rating-star"/>
                        <p className="rating-count">87</p>
                    </div>

                    <div className="price-picker">
                        <p className="pricing">$63.99</p>

                        <select className="product-quantity">
                            <img src="images/icons/dropsoun-Vector.svg" alt="" />
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

                <button className="call-to-action"> Add to cart</button>
            </div>


            <div className="product-image-content">

                <div className="product-image-div">
                    <img src="images/product/toaster.jpg" alt="productimage" className="product-image-div" />
                </div>

                <div className="product-content">
                    <p className="product-name">2 Slot Toaster - Black</p>

                    <div className="rating-and-count">
                        <img src="images/ratings/Rating 4.5.svg" alt="rating4.5" className="rating-star" />
                        <p className="rating-count">70</p>
                    </div>

                    <div className="price-picker">
                        <p className="pricing">$6.99</p>

                        <select className="product-quantity">
                            <img src="images/icons/dropsoun-Vector.svg" alt="" />
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

                <button className="call-to-action"> Add to cart</button>
            </div>


            <div className="product-image-content">

                <div className="product-image-div">
                    <img src="images/product/plate.jpg" alt="productimage" className="product-image-div" />
                </div>

                <div className="product-content">
                    <p className="product-name">6 Piece White Dinner Plate Set</p>

                    <div className="rating-and-count">
                        <img src="images/ratings/Rating 4.5.svg" alt="rating4.5" className="rating-star" />
                        <p className="rating-count">87</p>
                    </div>

                    <div className="price-picker">
                        <p className="pricing">$6.99</p>

                        <select className="product-quantity">
                            <img src="images/icons/dropsoun-Vector.svg" alt="" />
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

                <button className="call-to-action"> Add to cart</button>
            </div>


            <div className="product-image-content">

                <div className="product-image-div">
                    <img src="images/product/bakeware.jpg" alt="productimage" className="product-image-div" />
                </div>

                <div className="product-content">
                    <p className="product-name">6-Piece Nonstick, Carbon Steel Oven Bakeware </p>

                    <div className="rating-and-count">
                        <img src="images/ratings/Rating 4.5.svg" alt="rating4.5" className="rating-star" />
                        <p className="rating-count">87</p>
                    </div>

                    <div className="price-picker">
                        <p className="pricing">$6.99</p>

                        <select className="product-quantity">
                            <img src="images/icons/dropsoun-Vector.svg" alt="" />
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

                <button className="call-to-action"> Add to cart</button>
            </div>

            
            <div className="product-image-content">

                <div className="product-image-div">
                    <img src="images/product/sweatshirt.jpg" alt="productimage" className="product-image-div" />
                </div>

                <div className="product-content">
                    <p className="product-name">Plain Hooded Fleece Sweatshirt</p>

                    <div className="rating-and-count">

                        <img src="images/ratings/Rating 5.0.svg" alt="rating4.5" className="rating-star" />

                        <p className="rating-count">56</p>

                    </div>

                    <div className="price-picker">
                        <p className="pricing">$6.99</p>

                        <select className="product-quantity">
                            <img src="images/icons/dropsoun-Vector.svg" alt="" />
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

                <button className="call-to-action"> Add to cart</button>
            </div>


            <div className="product-image-content">

                <div className="product-image-div">
                    <img src="images/product/towel.jpg" alt="productimage" className="product-image-div" />
                </div>

                <div className="product-content">
                    <p className="product-name">Luxury Towel Set - Graphite Gray </p>

                    <div className="rating-and-count">
                        <img src="images/ratings/Rating 5.0.svg" alt="rating4.5" className="rating-star" />
                        <p className="rating-count">120</p>
                    </div>

                    <div className="price-picker">
                        <p className="pricing">$10.99</p>

                        <select className="product-quantity">
                            <img src="images/icons/dropsoun-Vector.svg" alt="" />
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

                <button className="call-to-action"> Add to cart</button>
            </div> */}
            
        </main>
        </>
    );
}