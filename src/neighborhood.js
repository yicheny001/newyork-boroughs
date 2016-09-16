import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap'

class Neighborhood extends Component {
  showBorough(event){
    let borough = this.props.borough
    this.changeBoroughCss(borough)
  }

  changeBoroughCss(borough){
    document.getElementById(borough).style.backgroundColor='#EAF8FC'
    setTimeout(() => document.getElementById(borough).style.backgroundColor='', 1000)
  }

  render(props){

  return (
    <ListGroupItem onClick={this.showBorough.bind(this)}>{this.props.neighborhood.name}</ListGroupItem>
    )
  }
}

export default Neighborhood
