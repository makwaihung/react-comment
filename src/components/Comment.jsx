'use strict';

import React, { Component } from 'react';


class Comment extends Component {
  render (){
    return (
      <div className="comment-item clearfix">
        <div className="comment-avatar fl">
            <img src="images/default.jpeg"/>
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
