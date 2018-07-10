import React, { Component } from 'react';
import SignIn from './SignIn'
import './App.css';
import Main from './Main'

class App extends Component {
  constructor(){
    super()
    this.state={
      user: {},
    }
  }
  handleAuth = (user) =>{
    this.setState({user})
  }
  signedIn =()=>{
    return this.state.user.uid
  }
  signOut =()=>{
    this.setState({user:{}})
  }
  render() {
    return (
      <div className="App">
        {this.signedIn()
          ?<Main 
            user={this.state.user} 
            signOut={this.signOut}/>: 
          <SignIn 
            handleAuth={this.handleAuth}
          />
        }
        </div>
        );
  }
}

export default App;
