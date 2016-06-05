'use strict';

import React, { Component } from 'react';
require('styles/welcome.scss');
import { NavLink } from '../index';

let logo = require('images/logo.jpg');

export default class Welcome extends Component {

  render() {
    return (
      <div className="welcome">
          <div className="content">
            <div className="logo">
                <img src = {logo} />
            </div>
            <div className="text">有些话，说过才不后悔</div>
            <div className="text">快选择您的角色，说出您的心声</div>
            <div className="role">
                <ul>
                  <li>
                      <NavLink to = {{ pathname: '/react-comment/comment', query: { role: 'male' } }} >
                        <img src = { this.props.roleHeadImg.male}/>
                        <div className="sex-text">男生</div>
                      </NavLink>
                  </li>
                  <li>
                    <NavLink to = {{ pathname: '/react-comment/comment', query: { role: 'default' } }} >
                        <img src = { this.props.roleHeadImg.default}/>
                        <div className="sex-text">默认</div>
                    </NavLink>

                  </li>
                  <li>
                    <NavLink to = {{ pathname: '/react-comment/comment', query: { role: 'female' } }} >
                      <img src = { this.props.roleHeadImg.female} />
                      <div className="sex-text">女生</div>
                    </NavLink>
                  </li>
                </ul>
            </div>
          </div>
          <div className="about-link">
              <NavLink to = '/react-comment/about'>关于</NavLink>
          </div>
      </div>

    )
  }
}




Welcome.defaultProps = {
  roleHeadImg : {
    'default': require('images/default.jpg'),
    'male': require('images/male.jpg'),
    'female': require('images/female.jpg')
  }
}
