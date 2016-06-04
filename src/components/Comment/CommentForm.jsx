'use strict';

import React, { Component } from 'react';
import moment from 'moment';

class CommentForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      wordNum: 140,
      wordTips: '还可以输入',
      numOver: false
    };
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('提交表单....');

    let name = this.refs.name.value;
    let text = this.refs.text.value;

    if( name =='' || text == ''){
      alert('亲！请填完整资料！');
    }else {
      console.log(name, text);
      let date  = moment().format('YYYY-MM-DD, HH:mm:ss');
      let cid = Math.round(new Date().getTime()/1000)
      this.props.onCommentSubmit({cid: cid,  name, text, date: date });
      //清空
      this.refs.name.value = '';
      this.refs.text.value = '';
      this.setState({
        wordNum: 140,
        wordTips: '还可以输入',
        numOver: false
      });
    }
  }

  handleChange(e){
    if (e.target.value.length == 0){
      this.setState({
        wordNum: 140,
        wordTips: '还可以输入',
        numOver: false
      })
    }else if( e.target.value.length > 0 && e.target.value.length <= 140  ){
      this.setState({
        wordNum: 140 - e.target.value.length,
        wordTips: '还可以输入',
        numOver: false
      })
    }else{
      this.setState({
        wordNum: e.target.value.length - 140,
        wordTips: '已超出',
        numOver: true
      })
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
                <textarea  placeholder="该评论点什么..." className="textarea" ref="text" onChange = { this.handleChange.bind(this) }></textarea>
            </div>
            <div className="field clearfix">
                <div className="enterNum fl">{ this.state.wordTips }<span className = { this.state.numOver ? 'error' : '' }>{ this.state.wordNum }</span>字</div>
                <button type="submit" className="button green fr" disabled = {this.state.numOver}>发表</button>
            </div>
         </form>
      </div>
    )
  }
}

export default CommentForm;
