import React, {Component} from 'react';
import BoroughDetail from './boroughDetail'

class BoroughList extends Component {

  constructor(props){
    super(props)
    let json = require('./locationResponse.json').data
    let sortedBoroughs = json.sort(this.compareBoroughs())
    let sortedNeighborhoods = sortedBoroughs.map((borough)=>{
      if(borough.mappings.length===1){
        return borough
      }
      else{
        return borough.mappings.sort(this.compareNeighborhoods())
      }
    })
    this.state = { allBoroughs : sortedBoroughs }
    }

  weightBorough(borough){
    return borough.mappings.map((mapping)=>{
      return mapping.neighborhoods.length
    }).reduce((a,b)=>a+b, 0)
  }

  weightNeighborhood(neighborhood){
  }

  compareBoroughs(boroughA,boroughB){
    return (boroughA,boroughB)=>{
      return this.weightBorough(boroughB) - this.weightBorough(boroughA)}
  }

  compareNeighborhoods(neighborhoodA,neighborhoodB){
    return (a,b)=>{
      return this.weightNeighborhood(b) - this.weightNeighborhood(a)}
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
