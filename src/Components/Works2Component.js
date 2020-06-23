import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardSubtitle, CardTitle, CardBody, Row, Col, Button } from 'reactstrap';
import { WORKS } from '../shared/works';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import Iframe from 'react-iframe';
import { motion } from 'framer-motion';


class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }
      
    render() {

        const list = { hidden: { opacity: 0 }, visible: { opacity: 1} };
        const item = { hidden: { x: -10, opacity: 0 }, visible: { opacity: 1} };
        const item2 = { hidden: { x: -10, opacity: 0 }, visible: { opacity: 1} };
    

        return(
            <motion.ul style={{ listStyleType: 'none', fontSize: 40, height: "100%" }} className="mr-3" initial='hidden' animate="visible" variants={list} transition={{ duration: 2, staggerChildren: true }} >
                <Link to="/developer">
                    <motion.li variants={item}>
                        {`Developer`}
                    </motion.li>
                </Link>
                <Link to="/ceramics">
                    <motion.li variants={item} >
                        {`Artist`}
                    </motion.li>
                </Link>
                <Link to="/design">
                    <motion.li  variants={item}>
                        {`Designer`}
                    </motion.li>
                </Link>
                <Link to="/educator">
                    <motion.li variants={item}>
                        {`Educator`}
                    </motion.li>
                </Link>
            </motion.ul>
        )
    }
}

function RenderItem({works}) {

    if (works.video) {
        return(
            <FadeTransform
            in 
                transformProps={{
                    exitTransform: 'scale(0.9) '
                }}
            >
                <Card style={{border: 'none'}}>
                    <Link to={`/works/${works.id}`}>
                        <Col  className="wrapper">
                            <Iframe url={works.video}
                                id={works.id}
                                frameBorder="0" />
                            </Col>
                        <CardTitle style={{fontSize: 30}} className="m-1">{works.name}</CardTitle>
                        <CardBody>{works.description}</CardBody>
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
                }}>
                <Card style={{border: 'none'}}>
                    <Link to={`/works/${works.id}`}>
                        <CardImg width="100%" src={process.env.PUBLIC_URL + works.image} /* alt={item.name} */ />
                        <CardTitle style={{fontSize: 30}}>{works.name}</CardTitle>
                        <CardBody>{works.description}</CardBody>
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
            works: WORKS

        };


    }

    render() {

        const worksA = this.state.works.map( works => {
            return(
                <Col key={works.id} className="col-12 col-md-5 m-1 mx-auto my-auto">
                    <RenderItem works={works} />
                </Col>
            )}
        );


        return(
            <div>
                <Categories />
                <Row className="" >
                    {worksA}
                </Row>
            </div>
        )
    }
}



export default Works;