import React, { Component } from 'react';
import { NavLink } from '../index';
require('styles/navbar.scss');

export default class NavBar extends Component {
  render(){
    return (
      <header>
        <nav>
          <ul className="clearfix">
            <li><NavLink to='/' onlyActiveOnIndex={true} >首页</NavLink></li>
            <li><NavLink to='comment'>树洞</NavLink></li>
            <li><NavLink to="about">关于</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}
