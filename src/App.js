import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import ImagesRenderer from './Components/ImagesRenderer';
import { connect } from "react-redux";
import { isUserLoggedIn } from './Redux/Actions/LoginActions';


class App extends Component {
  constructor(props){
    super(props)
  }
 
  componentDidMount = () =>{
    this.props.isUserLoggedIn()
  }
  render (){
    if(!this.props.userLogged) return <Login />
    return (
      <div className="App">
       <ImagesRenderer {...this.props}/>
      </div>
    );
  }
  
}

function mapStateToProps(state){
  return {
    userLogged : state.loginRed.userLoggedIn
  }
}

export default connect(mapStateToProps,{isUserLoggedIn})(App);
