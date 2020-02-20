import React from 'react';
import './App.css';
import Nav from './components/Nav'
import { Routes } from './components/Routes'
import Home from './components/Home'
// import Portfolio from './components/Portfolio'


class App extends React.Component {
  state = {
    mode: ''
  }

  handleLightMode = () => {
    if ((this.state.mode.length === 0)) {
      this.setState({
        mode: 'light-mode'
      })
    } else if (this.state.mode.length > 0)
      this.setState({
        mode: ''
      })
  }
  render() {
    return (
      <div className={this.state.mode}>
        <div className="App">
          <Nav onClick={()=> this.handleLightMode()}/>



            <Routes />
        </div>
       </div>
    );
  }
}

export default App;
