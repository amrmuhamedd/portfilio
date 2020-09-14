import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap';
import Slider from "react-slick";
import male1 from '../../../assets/male.svg'
import classes from './_client.module.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class client extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear"
          };
        return (
            <div className={classes.client + ' client'}>
                <Container>
                <Slider {...settings} className={classes.slider + ' text-center'}>
          <div className={classes.sliderBoxes}>
              <Row className="justify-content-center">
                 <img src ={male1} alt = "people"></img>
              <Col sm="12" className={classes.content}>
              <h3>hello</h3>
              <p className="text-muted">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi distinctio nulla, minima sed asperiores libero."</p>
              </Col>
              </Row>
          </div>
          <div className={classes.sliderBoxes}>
              <Row className="justify-content-center">
                 <img src ={male1} alt = "people"></img>
              <Col sm="12" className={classes.content}>
              <h3>hello</h3>
              <p className="text-muted">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi distinctio nulla, minima sed asperiores libero."</p>
              </Col>
              </Row>
          </div>
          <div className={classes.sliderBoxes}>
              <Row className="justify-content-center">
                 <img src ={male1} alt = "people"></img>
              <Col sm="12" className={classes.content}>
              <h3>hello</h3>
              <p className="text-muted">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi distinctio nulla, minima sed asperiores libero."</p>
              </Col>
              </Row>
          </div>
          <div className={classes.sliderBoxes}>
              <Row className="justify-content-center">
                 <img src ={male1} alt = "people"></img>
              <Col sm="12" className={classes.content}>
              <h3>hello</h3>
              <p className="text-muted">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi distinctio nulla, minima sed asperiores libero."</p>
              </Col>
              </Row>
          </div>
          <div className={classes.sliderBoxes}>
              <Row className="justify-content-center">
                 <img src ={male1} alt = "people"></img>
              <Col sm="12" className={classes.content}>
              <h3>hello</h3>
              <p className="text-muted">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi distinctio nulla, minima sed asperiores libero."</p>
              </Col>
              </Row>
          </div>
          <div className={classes.sliderBoxes}>
              <Row className="justify-content-center">
                 <img src ={male1} alt = "people"></img>
              <Col sm="12" className={classes.content}>
              <h3>hello</h3>
              <p className="text-muted">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi distinctio nulla, minima sed asperiores libero."</p>
              </Col>
              </Row>
          </div>
        </Slider>
                </Container>
           
            </div>
        )
    }
}
