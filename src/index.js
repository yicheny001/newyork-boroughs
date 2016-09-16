import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BoroughDetail from './boroughDetail'
import { Tabs, Tab } from 'react-bootstrap';
import './index.css';

class BoroughList extends Component {
  constructor(props){
    super(props)
    let json = require('./locationResponse.json').data
    this.state = { allBoroughs : json , selectedBorough: '' }
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

const tabsInstance = (
  <Tabs defaultActiveKey={1}>
    <Tab eventKey={1} title="Area A"><BoroughList tab='1'/></Tab>
    <Tab eventKey={2} title="Area B"><BoroughList tab='2'/></Tab>
  </Tabs>
);

ReactDOM.render(
  tabsInstance,
  document.getElementById('root')
);
