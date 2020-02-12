import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import './App.css';

class App extends Component{
  render(){
    return <div className="App">
        My Todo Application
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    ;
  }
}

export default App;
