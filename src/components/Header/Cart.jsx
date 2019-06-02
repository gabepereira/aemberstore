import React from 'react';
import './Header.css';
import Icon from '../Icons/Cart';

export default class Cart extends React.Component {
    render () {
        return (
            <div className = 'cart-wrapper'>
                <Icon />
            </div>
        );
    }
}