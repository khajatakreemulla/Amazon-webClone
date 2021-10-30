import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';

const Navbar = () => {
    const [{basket}] = useStateValue();
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="navbar__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="navbar_search">
                <input type="text" className="navbar__searchInput" />
                <i className='bx bx-search-alt-2 Navbar_search_icon'></i>
            </div>
            <div className="navbar__nav">
                <Link to="/login" className="navbar__link">
                    <div className="navbar__option">
                        <span className="header__option__one">Hello quazi</span>
                        <span className="header__otion__two">Sign in</span>
                    </div>
                </Link>


                <Link to="/" className="navbar__link">
                    <div className="navbar__option">
                        <span className="header__option__one">Return</span>
                        <span className="header__otion__two">& orders</span>
                    </div>
                </Link>


                <Link to="/" className="navbar__link">
                    <div className="navbar__option">
                        <span className="header__option__one">Your</span>
                        <span className="header__otion__two">Prime</span>
                    </div>
                </Link>
                <Link to="/cart" className="navbar__link">
                    <div className="navbar_optioncart">
                    <i className='bx bx-cart bx-sm'></i>
                    <span className="navbar__basketcount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}
export default Navbar
