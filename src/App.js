import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import {uiModel} from "./scripts/helpers.js";
import {Header} from "./components/Header/Header";
import { FilterContainer} from "./components/FilterContainer/FilterContainer";



class App extends Component {
  constructor(){
    super();
     this.state = {
      buttons: []
    };
  } 

  createButtons(model ){
      const buttons = Object.entries(model).reduce((arc,item) => { 
      const name = item[0]
      const obj = {};
      obj[name] = item[1]
      if(typeof item[1] !== 'function') arc.push(obj) 
        return arc
      },[])
      this.setState({buttons})
  }

  componentWillMount(){
    const url = "https://gist.githubusercontent.com/bevacqua/1225b9d6ae1842e99373c0057f5176b4/raw/dbfbe16c9b685af371827e4a550dde1188fa0dee/clusters.json";
    axios.get(url).then(data => {
      const model = uiModel(data.data.record);
      model.countClusters();
      model.unhealthyClusters();
      model.snapshotFailed();
      model.shardErrors();
      model.snapshotFailed();
      model.rollback();
      model.buildStepFailed();
      this.createButtons(model)
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <FilterContainer clusterErrors={this.state.buttons} />
        {// Todo
        // set state for filter block clicker
        // Add get data based on filter Card clicks
        // ouput data to screen 
        }
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;


