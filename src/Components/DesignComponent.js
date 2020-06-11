import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { DESIGN } from '../shared/design';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import Iframe from 'react-iframe';
 
function RenderItem({design}) {

        return (
            <FadeTransform
            in 
                transformProps={{
                    exitTransform: 'scale(0.9) '
                }}
            >
                <Card style={{border: 'none'}}>
                    <Link to={`/educator/${design.id}`}>
                        <CardImg width="100%" src={process.env.PUBLIC_URL + design.image} /* alt={item.name} */ />
                        <CardTitle style={{fontSize: 30}}>{design.name}</CardTitle>
                        <CardSubtitle>{design.description}</CardSubtitle>
                    </Link>
                </Card>
            </FadeTransform>
        )
}


class Design extends Component {
    constructor(props) {
        super(props);

        this.state = {
            design: DESIGN,
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

        const works = this.state.design.map( design => {
            return(
                <div key={design.id} className="col-md-5 m-1 mx-auto my-auto">
                    <RenderItem design={design} />
                </div>
            )}
        )

        return(
            <div>
                <h1>Design</h1>
                <Row >
                
                    {works}
                </Row>

            </div>
        )
    }
}

export default Design;
