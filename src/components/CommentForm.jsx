'use strict';

import React, { Component } from 'react';
import moment from 'moment';

class CommentForm extends Component {
  handleSubmit(e){
    e.preventDefault();
    console.log('提交表单....');

    let name = this.refs.name.value;
    let text = this.refs.text.value;

    if( name =='' || text == ''){
      alert('亲！请填完整资料！');
    }else {
      console.log(name, text);
      let date  = moment().format('YYYY-MM-DD, h:mm:ss');
      let cid = Math.round(new Date().getTime()/1000)
      this.props.onCommentSubmit({cid: cid,  name, text, date: date });
      //清空
      this.refs.name.value = '';
      this.refs.text.value = '';
    }
  }

  render (){
    return (
      <div className="comment-form">
         <form onSubmit = { this.handleSubmit.bind(this) } >
            <div className="field">
                <input type="text" placeholder="请输入您的姓名..." className="input" ref="name"/>
            </div>
            <div className="field">
                <textarea  placeholder="该评论点什么..." className="textarea" ref="text"></textarea>
            </div>
            <div className="field clearfix">
                <button type="submit" className="button green fr">发表</button>
            </div>
         </form>
      </div>
    )
  }
}

export default CommentForm;
