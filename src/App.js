import React from 'react';
import './App.css';
import Nav from './components/Nav'
import { Routes } from './components/Routes'
import Home from './components/Home'


class App extends React.Component {
  state = {
    mode: 'dark-mode'
  }

  handleLightMode = () => {
    if ((this.state.mode === 'dark-mode')) {
      this.setState({
        mode: 'light-mode'
      })
    } else if (this.state.mode === 'light-mode')
      this.setState({
        mode: 'dark-mode'
      })
  }
  render() {
    return (
      <>
      <div className={this.state.mode}>
          <Nav/>
            <Routes />
        </div>
     </>
    );
  }
}

export default App;
