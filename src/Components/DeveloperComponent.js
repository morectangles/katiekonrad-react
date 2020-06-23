import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { DEVELOPER } from '../shared/developer';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import Iframe from 'react-iframe';

function RenderItem({developer}) {

    if (developer.video) {
        return(
            <FadeTransform
            in 
                transformProps={{
                    exitTransform: 'scale(0.9) '
                }}
            >
                <Card style={{border: 'none'}}>
                    <Link to={`/developer/${developer.id}`}>
                    <Col className="wrapper">
                        <Iframe url={developer.video}
                        id={developer.id}
                        frameBorder="0"/>
                    </Col>
                    <CardTitle style={{fontSize:30}}>{developer.name}</CardTitle>
                    <CardSubtitle>{developer.description}</CardSubtitle>
                    </Link>
                </Card>
            </FadeTransform>
        )
    } else {
        return (
            <FadeTransform
            in 
                transformProps={{
                    exitTransform: 'scale(0.9) '
                }}
            >
                <Card style={{border: 'none'}}>
                    <Link to={`/educator/${developer.id}`}>
                        <CardImg width="100%" src={process.env.PUBLIC_URL + developer.image} /* alt={item.name} */ />
                        <CardTitle style={{fontSize: 30}}>{developer.name}</CardTitle>
                        <CardSubtitle>{developer.description}</CardSubtitle>
                    </Link>
                </Card>
            </FadeTransform>
        )
    }
}


class Developer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            developer: DEVELOPER,
            //isTeachingsOpen: true
        };
        //this.toggleTeachings = this.isTeachingsOpen.bind(this);

    }
/*
    toggleTeachings() {
        this.setState({
            isTeachingsOpen: !this.state.isTeachingsOpen
        });
    };

*/
    render() {

        const works = this.state.developer.map( developer => {
            return(
                <div key={developer.id} className="col-md-5 m-1 mx-auto my-auto">
                    <RenderItem developer={developer} />
                </div>
            )}
        )

        return(
            <div>
                <h1>Development</h1>
                <Row >
                
                    {works}
                </Row>

            </div>
        )
    }
}


export default Developer;