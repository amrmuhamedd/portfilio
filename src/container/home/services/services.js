import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import classes from './_services.module.scss';

const services = (props) =>{
    const services = props.services.map(service => {
       return <Col lg="4" md = "6" key = {service.id} className={classes.serviceBox}>
        <i className={service.icon}></i>
        <h2>{service.service}</h2>
        <span className={classes.serviceBorder}></span>
    <p className="text-muted">{service.discription}</p>
        </Col>
    })
    return (
        <div className={classes.service + ' service'}>
            <Container className="text-center">
                <h1>My services</h1>
                <Row >
                  {services}
                </Row>

            </Container>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        services : state.services.services
    }
}
export default connect(mapStateToProps)(services)