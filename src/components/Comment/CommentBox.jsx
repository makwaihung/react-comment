'use strict';

import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Wilddog from 'wilddog';
import { mixin } from 'core-decorators';
import WildReactMixin from 'wildreact';
require('styles/comment.scss');


@mixin(WildReactMixin)
class CommentBox extends Component {

  constructor(props){
    super(props);
    this.state = { data: [] };

    let role = this.getRole();

    console.log(role)
  }

  getRole(){
    let { query } = this.props.location
    if(query && query.role){
       if(query.role == 'male'){
         return 'male'
       } else if(query.role == 'female'){
         return 'female'
       }else{
         return 'default'
       }
    }else{
      return 'default'
    }
  }

  postCommentData(comment){
    let role = this.getRole();
    let ref = new Wilddog('https://reactchat.wilddogio.com/');
    let postsRef = ref.child('data');
    postsRef.push({
      cid: comment.cid,
      role: role,
      name: comment.name,
      text:comment.text,
      date:comment.date
    });
  }

  componentDidMount() {
    let ref = new Wilddog('https://reactchat.wilddogio.com/data');
    console.log(ref)
    this.bindAsArray(ref, 'data');
  }

  componentWillUnMount() {
    this.unbind('data');
  }

  handleCommentSubmit(comment){
    console.log(comment);
    this.postCommentData(comment)
    // let commentData = this.state.data;
    // let newCommentData = commentData.concat(comment);
    // this.setState({
    //   data: newCommentData
    // })
  }

  render() {
    return (
      <div className="commentBox">
        <h1 className="title W_swficon">有什么新鲜事想告诉大家</h1>
        <div className="bg">
          <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
          <CommentList data={this.state.data}/>
        </div>
      </div>
    )
  }
}
// 测试数据
// CommentBox.defaultProps = {
//   data:[{
//     cid:   1,
//     name: '李文军',
//     date: '2016-5-23 23:15:19',
//     text: '今天天气很好！'
//   },{
//     cid:   2,
//     name: '周小姐',
//     date: '2016-5-23 23:20:19',
//     text: '那么约么？'
//   },{
//     cid:   3,
//     name: '麦先生',
//     date: '2016-5-23 23:20:19',
//     text: '好的'
//   }]
// };

export default CommentBox;
