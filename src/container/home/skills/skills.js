import React from 'react'
import {connect} from 'react-redux';
import {Container, Row , Col} from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import classes from './skills.module.scss';

 const skills = (props) => {
    const skills = props.skills.map(skill => {
        return    <Col xs = "6" md = "3"  key = {skill.id}>
        <div className = {classes.skill}>
            <div className = {classes.icon }> {skill.img ? <img src = {skill.img} alt = "skill"/> : <i className ={skill.icon}></i>}</div>
            <p>{skill.skill}</p>
        </div>
        </Col>
     })

    return (
     
           <div className={classes.skills + ' skills'}>
               <Container>
              <h2 className ="text-center">What I know ?</h2>
               <Row>
            {skills}
               </Row>
              </Container>
          </div> 
       
    )
}
const mapStateToProps = (state) => {
    return{
        skills : state.services.skills
    }
}
export default connect(mapStateToProps)(skills)