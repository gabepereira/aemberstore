import React from 'react';
import './Search.css';
import Icon from './Icon';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props }
  }

  render () {
    return (
      <div className="search">
        <input 
        className="search-wrapper"
        placeholder = { this.state.placeholder } />
        <div className="icon-wrapper">
          <Icon />
        </div>
      </div>
    );
  }
}