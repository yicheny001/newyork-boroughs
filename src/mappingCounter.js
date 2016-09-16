import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Neighborhood from './neighborhood'
import Macro from './macro'
import { ListGroup } from 'react-bootstrap'

class MappingCounter extends Component {
  
  checkMacro(){
    if(this.props.mappings.length === 1){
      return(
        this.checkNeighborhoods()
      )
    }
    else{
      return(
        <div>
        {this.props.mappings.map((macro)=>{return <Macro macro={macro}/>})}
        </div>
      )
    }
  }

  checkNeighborhoods(){
    if(this.props.mappings[0].neighborhoods.length !== 1)
    {
      return( <ListGroup>
        {this.props.mappings[0].neighborhoods.map((neighborhood)=>{return <Neighborhood neighborhood={neighborhood} />})}
        </ListGroup>
      )
    }
  }

  render(props){
  return (
    <div>
      {this.checkMacro()}
    </div>
    )
  }
}

export default MappingCounter
