import React from 'react'
import Particles from 'react-particles-js';
import '@fortawesome/fontawesome-free/css/all.css';
import Typed from 'react-typed';
import Service from '../services/services'
import About from '../about/about';
import Freelancer from '../freelancer/freelancer';
import Footer from '../footer/footer';
import MyWork from '../myWork/myWork';
import Skills from '../skills/skills'
import classes from './_head.module.scss';

const ParticlesOpt = {
  Particles : {
    size: {
      value: 56,
      random: true,
      anim: {
        enable: true,
        speed: 60,
        size_min: 0.1,
        sync: false
      },
    number : {
      value : 800,
      density: {
        enable: true,
        value_area : 1803,
      },
      
    }
  } }
  
}
const Home = (props) => {
    return (
        <React.Fragment>
          <div className={classes.head + ' head'} id="head">
            <div className="overlay">
          <Particles 
                params={ParticlesOpt}  style={{
                width: '600px',
                position:"absolute",
                top: '0',
                left:'0',
                zIndex:'2',
              }}/>
              <div className={classes.content}>
            <h1>  <Typed
            strings={[
                    'Hello ',
                    'i am Amr mohamed ',
                    'i am front end developer ']}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                /> </h1>
            <p>creative front end developer</p>
            </div>
           
            </div>
        </div>
        <About/>
        <Skills />
        <Service/>
        <Freelancer/>
        <MyWork/>
        <Footer/>

        </React.Fragment>
    )
  }

export default Home;