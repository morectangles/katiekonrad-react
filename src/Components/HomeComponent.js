import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import bubbleVideo from '../media/bubbletest.mp4';
import educatorVideo from '../media/educator.mp4';
import aboutGif from '../media/compyfinal.gif';

class Home extends Component {

    render() {
        return(
            <div className="mt-5 ml-5 mr-5">
                <Row className="mx-auto">
                    <Col md="4" >
                        <Link to="/works">
                            <video height="300px" autoPlay loop muted playsInline alt="bubbling head" src={bubbleVideo} />
                        </Link>
                        <Row className="mb-5">
                            <h2 className="col mx-auto" width="300px">Creator</h2>
                        </Row>
                    </Col>
                    <Col md="4" >
                        <Link to="/educator">
                            <video height="300px" autoPlay loop muted playsInline alt="images of children's art" src={educatorVideo} />
                        </Link>
                        <Row className="mb-5">
                            <h2 className="col mx-auto" width="300px">Educator</h2>
                        </Row>
                    </Col>
                    <Col md="4" >
                        <Link to="/about">
                            <img id="aboutGif" height="300px" width="300px" alt="author pixelated" src={aboutGif} />
                        </Link>
                        <Row className="mb-3">
                            <h2 className="col mx-auto" width="300px">About</h2>
                        </Row>
                    </Col>
                </Row>

            </div>
        )
    }
}


export default Home;