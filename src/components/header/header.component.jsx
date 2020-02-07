import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent  as Logo} from '../../assets/4.4 crown.svg.svg';

import { auth } from '../../components/firebase/firebase.utils'; 

import "../../components/header/header.component-styles.scss"

const Header = ({currentUser}) => (

        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="" className="option">
                    CONTACT
                </Link>
                {
                    currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}> SIGNOUT </div>
                    ) // auth.signOut default provided by firebase
                    : 
                    (
                        <Link to="/signin" className="option">SIGNIN</Link>)
                }
            </div>
        </div>
)

export default Header;