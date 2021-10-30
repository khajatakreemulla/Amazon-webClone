import React from 'react'
import './CartProduct.css'
import { useStateValue } from './StateProvider'
const CartProduct = ({id, title, image, price, rating}) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }
    return (
        <div className="cartproduct">
            <img className="cartproduct__image" src={image} alt="" />
            <div className="cartproduct__info">
                <p className="cartproduct__title">{title}</p>
                <p className="cartproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="cartproduct__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>🌟</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CartProduct
