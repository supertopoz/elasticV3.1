import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import {getErrors} from "./scripts/helpers.js";
import {Header} from "./components/Header/Header";
import { FilterContainer} from "./components/FilterContainer/FilterContainer";



class App extends Component {
  constructor(){
    super();
    this.state = {
      clusterErrors: [
        { 
          name:"all clusters",
          count: 0,
          id: "allClusters"
        }
      ]
    }
  } 

  componentWillMount(){
    // const url = "https://gist.githubusercontent.com/bevacqua/1225b9d6ae1842e99373c0057f5176b4/raw/dbfbe16c9b685af371827e4a550dde1188fa0dee/clusters.json";
    // try {
    // axios.get(url).then(data => {
    //   console.log(JSON.stringify(data))
    //   const model = getErrors(data.data.record);
    //   const errorList = model.allClusters()
    //   console.log('this is the error list:', errorList)
    // })
    // } catch (e){
    //   console.log(e)
    // }
  }
  render() {
    return (
      <div className="App">
        <Header />
        {//<FilterContainer clusterErrors={this.state.clusterErrors} />
        // Todo
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


