import React, { Component } from 'react';
import './App.css';

import { uiModel, createButtons, getData } from "./scripts/helpers.js";
import { Header } from "./components/Header/Header";
import { FilterContainer } from "./components/FilterContainer/FilterContainer";
import { ClusterInfoContainer } from "./components/ClusterInfoContainer/ClusterInfoContainer";



class App extends Component {
  constructor(){
    super();
     this.state = {
      buttons: [],
      dataView: []
    };
  this.getClusterList = this.getClusterList.bind(this)
  }

  getClusterList(cluster){
    const dataView = this.state.buttons.filter(item => item[cluster])
    this.setState({dataView})
  }



  componentDidMount(){
    getData().then((model)=>{
      this.setState({buttons : createButtons(model)});
    }).catch(error => {
      console.log(error)
    })
       
  }
  render() {
    return (
      <div className="App">
        <Header />
        <FilterContainer clusterErrors={ this.state.buttons } filter={ this.getClusterList }/>
        <ClusterInfoContainer clusters={ this.state.dataView } />
      </div>
    );
  }
}

export default App;


