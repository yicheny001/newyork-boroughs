import React, {Component} from 'react';
import BoroughDetail from './boroughDetail'

class BoroughList extends Component {
  constructor(props){
    super(props)
    let json = require('./locationResponse.json').data
    let sortedJson = json.sort(function(a, b){
      return b.length - a.length;
    });
    this.state = { allBoroughs : sortedJson }
  }

  tabSelect(borough){
    if(this.props.tab==='1'){
      return(
        <BoroughDetail borough={borough}/>
      )
    }
    else{
      return(
        <h4>{borough.borough.name}</h4>
      )
    }
  }

  render(){
    return(
      <div className='col-md-3'>
        {this.state.allBoroughs.map((borough)=>
              {return this.tabSelect(borough)}
          )
        }
      </div>
    )
  }
}

export default BoroughList
