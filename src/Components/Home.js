import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
    return (

        <div className="home">
            <img className="main__image" src="https://m.media-amazon.com/images/I/71FogCh8vvL._SX3000_.jpg" alt="" />
            <div className="homemain__row">
                <Product
                    id="12321341"
                    title="
                    Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate"
                    price={135.8}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71r69Y7BSeL._SL1500_.jpg"
                />
                <Product
                    id="49538094"
                    title="Bigmuscles Nutrition Premium Gold Whey 1Kg [Belgian Chocolate] | Whey Protein Isolate & Whey Protein Concentrate | 25g Protein Per Serving | 0g Sugar |..."
                    price={18}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51JJtqTByuL._SL1000_.jpg"
                />
            </div>
            <div className="homemain__row">
                <Product
                    id="4903850"
                    title="Apple iPhone 13 Pro Max (1TB) - Gold"
                    price={2500}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/619m8rLBQSL._SL1500_.jpg"
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>

            <div className="homemain__row">
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>
        </div>

    )
}

export default Home
