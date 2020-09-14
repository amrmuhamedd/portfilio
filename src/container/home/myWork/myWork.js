import React from 'react';
import {connect} from 'react-redux';
import { Container ,Row , Col} from 'reactstrap';
import Modal from '../../../component/ui/modal/modale'
import classes from './_myWork.module.scss'
import * as action from '../../../store/actions/index'
 const myWork = (props) => {
     const projects = props.projects.map(project =>{
         return   <Col md="6" lg = "4" key = {project.id}>
             <div className ={classes.project}>
           
             <div 
             style={{backgroundImage: 'url(' + project.video +')'}}
              onClick = {() => props.openModal(project.video)}
               className = {classes.video} >
               </div>
             <h3>{project.title}</h3>
             <p>{project.discription}</p>
             <details className = {classes.details}>
             <summary> technology </summary>
             {project.technology.map(tech => {
                 return <span key = {tech} className = {classes.tag}>{tech}</span>
                })} 
           </details>
                <a href = {project.url}  rel="noopener noreferrer" className = {classes.link} target = "_blank"> <i className="fas fa-search"></i>  live preview </a>
         </div>
         </Col>
     })
        return (
            <div className={classes.myWork + ' myWork'}>
                <Container>
                <h1 className = "text-center">my work</h1>
                <Row>
                {projects}
                </Row>
                <Modal show = {props.modal} clicked = {() => props.closeModal()} class = {classes.modal}> <img src = {props.img} alt = 'project'/> <span onClick = {() => props.closeModal()} className = {classes.close}>x</span> </Modal>
               </Container>
            </div>
        )
}
const mapDispatchToprops = dispatch => {
    return {
        openModal : (img) =>  dispatch(action.openModal(img)),
        closeModal : () => dispatch(action.closeModal())
    }
}
const mapStateToProps = (state) => {
    return {
        projects : state.projects.projects,
        img : state.ui.img,
        modal : state.ui.modal
    }
}
export default connect(mapStateToProps , mapDispatchToprops)(myWork);