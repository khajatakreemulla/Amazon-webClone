import React from 'react'
import './Cart.css'
import { useStateValue } from './StateProvider'
import CartProduct from './CartProduct'
import Subtotal from './Subtotal'

const Cart = () => {
    const [{ basket }] = useStateValue();
    return (
        <div className="cart">
            <div className="cart__left">
                <img className="cart__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                {basket.length === 0 ? (
                    <div>
                        <h2>Your Basket Is Empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className="cart__title">Your Shopping Basket</h2>
                        {basket.map(item => (
                            <CartProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />
                        ))}


                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="cart__right">
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Cart
