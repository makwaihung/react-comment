import React, { Component } from 'react';
require('styles/model.scss')
export default class Modal extends Component {

  constructor(props){
    super(props)
    this.state = {
      destroyed: localStorage.closeModal? true : this.props.destroyed
    }
  }

  destroy(){
    this.setState({
      destroyed: true
    });
    localStorage.closeModal = true;
 }

  render(){
    if(this.state.destroyed){
        return null;
    }

    return(
      <div className="modal" ref="modal">
        <div className="modal-inner">
            <div className="modal-text">{ this.props.text }</div>
            <button className="modal-submitBtn" onClick={ this.destroy.bind(this) }>{ this.props.confirmText }</button>
        </div>
      </div>
    )
  }
}
