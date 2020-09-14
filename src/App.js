import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './container/home/header/header';
import Nav from './component/nav/nav';
import { Link} from "react-scroll";
import './App.scss';
class  App extends Component {
  componentDidMount() {
    window.onscroll = function() {myFunction();scrollTop()};

// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = 30;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("navbar-light");
    navbar.classList.remove("navbar-dark");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("navbar-dark");
  }
}
function scrollTop(){
  let scrollTop = document.getElementById('scrollTop');
  if (window.pageYOffset >= 600) {
    scrollTop.classList.add('hidden');
  }
  else {
    scrollTop.classList.remove('hidden');
  }
}

  }
  render() {
  return (
    <div className="App">
      <Nav  />
      <Home />
      <span className="scroll-top" id ="scrollTop">   
          <Link
            className="nav-link"
            activeClass="active"
            to="head"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}><i className="fas fa-arrow-up"></i>
            </Link>
            </span>
    </div>
  )
}
}

export default App;
