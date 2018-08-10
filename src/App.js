import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import { FilterContainer} from "./components/FilterContainer/FilterContainer";



class App extends Component {
  constructor(){
    super();
    this.state = {
      clusterErrors: [
        { 
          name:"all clusters",
          count: 10,
          id: "allClusters"
        }
      ]
    }
  } 


  componentWillMount(){
  }



  render() {
    return (
      <div className="App">
        <Header />
        <FilterContainer clusterErrors={this.state.clusterErrors} />
        // Todo
        // Add header 
        // Add Filter block
           // set state for filter block clicker
        // Create Filter Card
        // Add get data based on filter Card clicks
        // ouput data to screen 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
