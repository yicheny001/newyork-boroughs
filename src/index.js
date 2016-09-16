import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BoroughList from './boroughList'
import { Tabs, Tab } from 'react-bootstrap';
import './index.css';

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
