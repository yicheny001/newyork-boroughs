import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {ListGroupItem} from 'react-bootstrap'

class Neighborhood extends Component {
  showBorough(event){
    let borough = event.target.parentElement.parentElement.parentElement.parentElement.firstChild.innerHTML
    this.changeBoroughCss(borough)
  }

  changeBoroughCss(borough){
    document.getElementById(borough).style.backgroundColor='#EAF8FC'
    setTimeout(() => document.getElementById(borough).style.backgroundColor='', 1000)
  }

  render(props){

  return (
    <ListGroupItem onClickCapture={this.showBorough.bind(this)}>{this.props.neighborhood.name}</ListGroupItem>
    )
  }
}

export default Neighborhood
