import React, { Component } from 'react';
import { Row, Button, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faVimeoV, faGithubSquare  } from '@fortawesome/free-brands-svg-icons';



class Footer extends Component {
    render() {
        return(
            <footer className="site-footer mt-5">
                <div className="container">
                    <Row>
                        <Col>
                            <a className="btn" role="button" href="https://www.instagram.com/morectangles/?hl=en">
                                <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
                            </a>
                            <a class="btn" role="button" href="https://vimeo.com/kathrynkonrad">
                                <FontAwesomeIcon icon={faVimeoV} size="3x" />
                            </a>
                            <a class="btn" role="button" href="https://github.com/morectangles">
                                <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                            </a>
                        </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}

export default Footer;