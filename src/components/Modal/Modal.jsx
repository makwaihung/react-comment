import React, { Component } from 'react';
require('styles/model.scss')
export default class Modal extends Component {

  constructor(props){
    super(props)
    this.state = {
      destroyed: localStorage.closeModal? true : this.props.destroyed,
      className :'modal pop-scale'
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        className: 'modal pop-scale pop-normal'
      })
    }, 500);
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
      <div className={this.state.className} ref="modal" >
        <div className="modal-inner">
            <div className="modal-text">{ this.props.text }</div>
            <button className="modal-submitBtn" onClick={ this.destroy.bind(this) }>{ this.props.confirmText }</button>
        </div>
      </div>
    )
  }
}
