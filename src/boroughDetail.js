import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MappingCounter from './mappingCounter'
import {Button, Collapse, Well} from 'react-bootstrap'

class BoroughDetail extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render(props){
  return (
    <div>
    <h4
      id={this.props.borough.borough.name}
      onClick={ (event)=> this.setState({ open: !this.state.open })}>
      + {this.props.borough.borough.name}
    </h4>
      <Collapse in={this.state.open}>
        <div>
          <MappingCounter mappings={this.props.borough.mappings}/>
        </div>
      </Collapse>
    </div>
    )
  }
}

export default BoroughDetail
