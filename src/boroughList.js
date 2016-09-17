import React, {Component} from 'react';
import BoroughDetail from './boroughDetail'

class BoroughList extends Component {

  constructor(props){
    super(props)
    let json = require('./locationResponse.json').data
    let sortedBoroughs = json.sort(this.compareBoroughs())
    let sortedMacros = sortedBoroughs.map((borough)=>{
      if(borough.mappings.length===1){
        return borough
      }
      else{
        let sortedMappings = borough.mappings.sort(this.compareMacros())
        let newBorough = {borough:borough.borough, mappings:sortedMappings}
        return newBorough
      }
    })
    this.state = { allBoroughs : sortedMacros }
    }

  weightBorough(borough){
    return borough.mappings.map((mapping)=>{
      return mapping.neighborhoods.length
    }).reduce((a,b)=>a+b, 0)
  }

  weightMacros(mapping){
    return mapping.neighborhoods.length
  }

  compareBoroughs(boroughA,boroughB){
    return (boroughA,boroughB)=>{
      return this.weightBorough(boroughA) - this.weightBorough(boroughB)}
  }

  compareMacros(macroA,macroB){
    return (macroA,macroB)=>{
      return this.weightMacros(macroA) - this.weightMacros(macroB) }
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
