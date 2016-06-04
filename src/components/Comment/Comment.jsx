'use strict';

import React, { Component } from 'react';

class Comment extends Component {
  render (){
    let role = this.props.role === undefined ? 'default': this.props.role;
    let roleHeadSrc = require('images/'+ role +'.jpg');

    return (
      <div className="comment-item clearfix">
        <div className="comment-avatar fl">
            <img src={ roleHeadSrc }/>
        </div>
        <div className="content">
            <div className="comment-name">{ this.props.name }</div>
            <span className="comment-date">{ this.props.date }</span>
            <div className="comment-text">{ this.props.text }</div>
        </div>
      </div>
    )
  }
}


export default Comment;
