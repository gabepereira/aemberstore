import React from 'react';
import './Header.css';
import Icons from '../Icons';
import Search from './Search';

const Header = () => (
    <div className = 'header-wrapper'>
        <div className = 'upper-header'>
            <div className = 'container'>
                <p>Frete grátis acima de R$190,00</p>
            </div>
        </div>
        <hr></hr>
        <div className = 'header'>
            <div className = 'container'>
                { Icons.Logo }
                <Search />
            </div>
        </div>
    </div>
);

export default Header;