import React from 'react';

import Icons from '../Icons';

export default class Search extends React.Component {
    render () {
        return (
            <div className = 'search-wrapper'>
                <div className = 'search-box'>
                    <input placeholder = 'O que você procura?'>
                    </input>
                    { Icons.Search }
                </div>
            </div>
        )
    }
}