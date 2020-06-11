import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { CERAMICS } from '../shared/ceramics';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import Iframe from 'react-iframe';

 
function RenderItem({ceramics}) {

    if (ceramics.video) {
        return(
            <FadeTransform
            in 
                transformProps={{
                    exitTransform: 'scale(0.9) '
                }}
            >
                <Card style={{border: 'none'}}>
                    <Link to={`/educator/${ceramics.id}`}>
                    <Col className="wrapper">
                        <Iframe url={ceramics.video}
                        id={ceramics.id}
                        frameBorder="0"/>
                    </Col>
                    <CardTitle style={{fontSize:30}}>{ceramics.name}</CardTitle>
                    <CardSubtitle>{ceramics.description}</CardSubtitle>
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
                    <Link to={`/educator/${ceramics.id}`}>
                        <CardImg width="100%" src={process.env.PUBLIC_URL + ceramics.image} /* alt={item.name} */ />
                        <CardTitle style={{fontSize: 30}}>{ceramics.name}</CardTitle>
                        <CardSubtitle>{ceramics.description}</CardSubtitle>
                    </Link>
                </Card>
            </FadeTransform>
        )
    }
}


class Ceramics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ceramics: CERAMICS,
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

        const works = this.state.ceramics.map( ceramics => {
            return(
                <div key={ceramics.id} className="col-md-5 m-1 mx-auto my-auto">
                    <RenderItem ceramics={ceramics} />
                </div>
            )}
        )

        return(
            <div>
                <h1>Ceramics</h1>
                <Row >
                
                    {works}
                </Row>

            </div>
        )
    }
}

export default Ceramics;