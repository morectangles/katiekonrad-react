import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HOME } from '../shared/home';

class Home extends Component {
    renderBox() {
        
    }


    render() {
        return(
            <div className="mt-5 ml-5 mr-5">
                <Row className="mx-auto">
                    <Col md="4" >
                        <Link to="/works"  >
                            <video height="300px" autoPlay loop muted playsInline alt={HOME[0].description} src={HOME[0].video} />
                        </Link>
                        <Row className="mb-5">
                            <h2 className="col mx-auto" width="300px">Creator</h2>
                        </Row>
                    </Col>
                    <Col md="4" >
                        <Link to="/educator">
                            <video height="300px" autoPlay loop muted playsInline alt={HOME[1].description} src={HOME[1].video} />
                        </Link>
                        <Row className="mb-5">
                            <h2 className="col mx-auto" width="300px">Educator</h2>
                        </Row>
                    </Col>
                    <Col md="4" >
                        <Link to="/about">
                            <video height="300px" autoPlay loop muted playsInline alt={HOME[2].description} src={HOME[2].video} />
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