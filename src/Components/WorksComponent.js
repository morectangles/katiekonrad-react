import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, Row, Col } from 'reactstrap';
import { DESIGN } from '../shared/design';
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
                    <Link to={`/works/${ceramics.id}`}>
                        <Col  className="wrapper">
                            <Iframe url={ceramics.video}
                                id={ceramics.id}/>
                            </Col>
                        <CardTitle style={{fontSize: 30}}>{ceramics.name}</CardTitle>
                        <CardBody>{ceramics.description}</CardBody>
                    </Link>
                </Card>
            </FadeTransform>
        )
    } else {
        return(
            <FadeTransform
            in 
                transformProps={{
                    exitTransform: 'scale(0.9) '
                }}
            >
                <Card style={{border: 'none'}}>
                    <Link to={`/works/${ceramics.id}`}>
                        <CardImg width="100%" src={process.env.PUBLIC_URL + ceramics.image} /* alt={item.name} */ />
                        <CardTitle style={{fontSize: 30}}>{ceramics.name}</CardTitle>
                        <CardBody>{ceramics.description}</CardBody>
                    </Link>
                </Card>
            </FadeTransform>
        )
        
    }
}

class Works extends Component {
    constructor(props) {
        super(props);

        this.state = {
            design: DESIGN,
            ceramics: CERAMICS,
            //isCeramicsOpen: true,
            //isDesignOpen: true
        };
        //this.toggleCeramics = this.isCeramicsOpen.bind(this);
        //this.toggleDesign = this.isDesignOpen.bind(this);

    }
/*
    toggleCeramics = () => {
        this.setState({
            isCeramicsOpen: !this.state.isCeramicsOpen
        });
    }

    toggleDesign() {
        this.setState({
            isDesignOpen: !this.state.isDesignOpen
        });
    }

    toggleWorks() {
        this.setState({
            isCeramicsOpen: true,
            isDesignOpen: true
        })
    }
*/
    render() {

        const works = this.state.ceramics.map( ceramics => {
            return(
                <Col key={ceramics.id} className="col-12 col-md-5 m-1 mx-auto">
                    <RenderItem ceramics={ceramics} />
                </Col>
            )}
        );


        return(
            <div>
                <h1>Works</h1>
                <Row className="" >
                    {works}
                </Row>

            </div>
        )
    }
}



export default Works;