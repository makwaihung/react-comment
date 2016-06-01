'use strict';

import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends  Component {
  render(){
    let commentNodes = [];
    this.props.data.map( (comment,index) => {
      // 匿名处理
      if(comment.name.length == 2){
        comment.name = comment.name[0]+'*'
      }else{
        comment.name = comment.name[0]+'*'+comment.name[comment.name.length-1]
      }
      commentNodes.push( <Comment key = {index} name = {comment.name} date = {comment.date} text = {comment.text} /> );
    });

    return (
      <div className="comment-list">
        { commentNodes.reverse() }
      </div>
    )
  }
}

export default CommentList
