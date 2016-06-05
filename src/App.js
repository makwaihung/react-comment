import React, { Component }from 'react';
import { NavBar, Modal } from './components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class App extends Component {
  render(){
    let { pathname }  = this.props.location;
    let modalData = { text: '您所输入的姓名会进行匿名处理, 还有不要忘记如果换性别角色，需要在首页重选喔！',confirmText: '朕明白', destroyed: false };
    return (
      <div>
        { pathname === '/react-comment' ? '' : <NavBar /> }
        { pathname === '/react-comment/comment' ? <Modal {...modalData} /> : ''}
        <ReactCSSTransitionGroup
          component="div"
          transitionName="animate"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>

      </div>
    )
  }
}
