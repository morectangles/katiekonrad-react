import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { TEACHINGS } from '../shared/teachings';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import Iframe from 'react-iframe';


function RenderItem({teaching}) {

    if (teaching.video) {
        return(
            <FadeTransform
            in 
                transformProps={{
                    exitTransform: 'scale(0.9) '
                }}
            >
                <Card style={{border: 'none'}}>
                    <Link to={`/educator/${teaching.id}`}>
                    <Col className="wrapper">
                        <Iframe url={teaching.video}
                        id={teaching.id}
                        frameBorder="0"/>
                    </Col>
                    <CardTitle style={{fontSize:30}}>{teaching.name}</CardTitle>
                    <CardSubtitle>{teaching.description}</CardSubtitle>
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
                    <Link to={`/educator/${teaching.id}`}>
                        <CardImg width="100%" src={process.env.PUBLIC_URL + teaching.image} /* alt={item.name} */ />
                        <CardTitle style={{fontSize: 30}}>{teaching.name}</CardTitle>
                        <CardSubtitle>{teaching.description}</CardSubtitle>
                    </Link>
                </Card>
            </FadeTransform>
        )
    }
}


class Educator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teachings: TEACHINGS,
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

        const works = this.state.teachings.map( teaching => {
            return(
                <div key={teaching.id} className="col-md-5 m-1 mx-auto my-auto">
                    <RenderItem teaching={teaching} />
                </div>
            )}
        )

        return(
            <div>
                <Row >
                    {works}
                </Row>

            </div>
        )
    }
}

export default Educator;