import React, { Component } from 'react';
import { Row, Col, NavLink } from 'reactstrap';
import bubbleVideo from '../media/bubbletest.mp4';
import educatorVideo from '../media/educator.mp4';
import aboutGif from '../media/compyfinal.gif';

class Home extends Component {

    render() {
        return(
            <div className="mt-5">
                <Row>
                    <Col md="4">
                        <NavLink href="">
                            <video height="300px" autoPlay loop muted playsInline src={bubbleVideo} />
                        </NavLink>
                        <Row>
                            <h2 className="col mx-auto" width="300px">Artist</h2>
                        </Row>
                    </Col>
                    <Col md="4">
                        <NavLink href="">
                            <video height="300px" autoPlay loop muted playsInline src={educatorVideo} />
                        </NavLink>
                        <Row>
                            <h2 className="col mx-auto" width="300px">Educator</h2>
                        </Row>
                    </Col>
                    <Col md="4">
                        <NavLink href="">
                            <img height="300px" autoPlay loop muted playsInline src={aboutGif} />
                        </NavLink>
                        <Row>
                            <h2 className="col mx-auto" width="300px">About</h2>
                        </Row>
                    </Col>
                </Row>

            </div>
        )
    }
}


export default Home;