import React, { Component } from 'react';
import './App.css';


import Main from './Main'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {page : "goToMain"}
    this.handleApp = this.handleApp.bind(this)
  }
  handleApp(herf){
    console.log("handleApp: " + herf)
    this.setState((prevState)=>{
      return {page : herf}
    })
  }
  buttonClick() {
    console.log("CLICKED");
  }
  render() {
    console.log("app:" + this.state.page)

    return (
      <Main page={this.state.page} pageHandle={this.handleApp}/>
      
    );
  }
}

export default App;
