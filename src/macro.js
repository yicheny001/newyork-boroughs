import React, {Component} from 'react';
import Neighborhood from './neighborhood'
import {ListGroupItem} from 'react-bootstrap'

class Macro extends Component {
  render(props){
  return (
    <div>
      <ListGroupItem bsStyle="success">{this.props.macro.macro.name}</ListGroupItem>
      {this.props.macro.neighborhoods.map((neighborhood)=>{return <Neighborhood neighborhood={neighborhood} borough={this.props.borough}/>})}
      <br />
    </div>
    )
  }
}

export default Macro
