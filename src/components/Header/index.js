import React from 'react';
import './Header.css';
import Icons from '../Icons';
import Search from '../Search';

export default class Header extends React.Component {
    state = {
        path: window.location.pathname
    }

    to = path => this.state.path === path ? '' : '/';

    render () {
        return (
            <div className = 'header-wrapper'>
                <div className = 'upper-header'>
                    <div className = 'container'>
                        <p>Frete grátis acima de R$190,00</p>
                    </div>
                </div>
                <hr></hr>
                <div className = 'header'>
                    <div className = 'container'>
                        <a href = { this.to('/') }>
                            { Icons.Logo }
                        </a>
                        <Search
                            placeholder = 'O que você procura?'/>
                        { Icons.Cart }
                    </div>
                </div>
            </div>
        );
    }
}