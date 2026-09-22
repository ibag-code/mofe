import axios from 'axios';
import { ProductGrid } from './ProductGrid';
import { useEffect, useState } from 'react';
import './HomePage.css'; 



export function HomePage ( { totalQuantity}) {

    const [ProductData, setProductData] = useState([]) 

    //Lifting for global access
    // const [cart, setCart] = useState([])

    
    useEffect(() => {

        axios.get ("http://localhost:3000/api/products")
            .then((response) => {
                    setProductData(response.data)
        })

    }, [])

    

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

        <ProductGrid ProductData={ProductData} />


        </>
    );
}