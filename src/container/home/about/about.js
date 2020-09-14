import React from 'react'
import {Container, Row} from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import aboutImg from  '../../../assets/about.JPG';
import classes from './about.module.scss';
import amrCv from '../../../assets/AmrCv.pdf';
export default function about() {
    return (
     
           <div className={classes.about + ' about'}>
               <Container>
               <Row>
               <div className={classes.img + ' col-lg-6'}>
                   <img src={aboutImg} alt=""/>
               </div>
               <div className={classes.aboutContent + ' col-lg-6'}>
                   <h2>Amr mohamed </h2>
                   <h3><span> Web  developer </span></h3>
                   <div className = {classes.info}>
                       <strong>Date of Birth : </strong> <p>25 / 3 / 1997 </p>
                   </div>

                   <div className = {classes.info}>
                       <strong>Nationality : </strong> <p> Egyptian </p>
                   </div>
                   <div className = {classes.info}>
                     <p> Resourceful Front End Web Developer bringing in-depth knowledge of javascript frameworke (React js)  and latest technology trends to produce clean website design. Experience handling complex HTML and CSS coding, design and extensions to meet organization's front-facing internet needs. Detail-oriented collaboration with others to deﬁne project expectations and demand. Hands-on testing and preforamence thresholds</p>
                   </div>
                   <div className = {classes.contact} >
                   <strong>contact : </strong>
                   <p className={classes.social}><a href="https://www.facebook.com/profile.php?id=100020387917321" rel="noopener noreferrer" target = "_blank"><i className="fab fa-facebook-f"></i></a></p>
                   <p className={classes.social}><a href="https://www.instagram.com/amrmuhmedd/"  rel="noopener noreferrer" target = "_blank"><i className="fab fa-instagram"></i></a></p>
                   <p className={classes.social}><a href="https://twitter.com/amrmuhmedd"  rel="noopener noreferrer" target = "_blank"><i className="fab fa-twitter"></i></a></p>
                   </div>
                   <a href = {amrCv} download className = {classes.download}> <i className={classes.icon + ' fas fa-download'}></i> my resume</a>
               </div>
               </Row>
              </Container>
          </div> 
       
    )
}
