'use strict';

import React, { Component } from 'react';
require('styles/welcome.scss');

let logo = require('images/logo.jpg');

export default class Welcome extends Component {

  handleClick(event){
    // 获取属性
    alert(event.target.getAttribute("data-role"))

  }

  render() {
    return (
      <div className="welcome">
          <div className="content">
            <div className="logo">
                <img src = {logo} />
            </div>
            <div className="text">有些话，说过才不后悔</div>
            <div className="text">快选择你的角色，说出您的心声</div>
            <div className="role">
                <ul>
                  <li>
                    <img src = { this.props.roleHeadImg.male}  ref="role" onClick={ this.handleClick } data-role="male"/>
                    <div className="sex-text">男生</div>
                  </li>
                  <li>
                    <img src = { this.props.roleHeadImg.default} ref="role" onClick={ this.handleClick } data-role="default"/>
                    <div className="sex-text">中性</div>
                  </li>
                  <li>
                    <img src = { this.props.roleHeadImg.female} ref="role" onClick={ this.handleClick } data-role="female"/>
                    <div className="sex-text">女生</div>
                  </li>
                </ul>
            </div>
          </div>
      </div>
    )
  }
}




Welcome.defaultProps = {
  roleHeadImg : {
    'default': require('images/head01.jpg'),
    'male': require('images/head02.jpg'),
    'female': require('images/head03.jpg'),
  }
}
