import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, Row, Col, Button } from 'reactstrap';
import { DESIGN } from '../shared/design';
import { CERAMICS } from '../shared/ceramics';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import Iframe from 'react-iframe';
import { motion } from 'framer-motion';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //showCeramics: true,
            //showDesign: true,
            //showEducation: true
        };
        //this.hideComponent = this.hideComponent.bind(this);
    }
/*
    hideComponent(name) {
        console.log(name);
        switch (name) {
          case "showCeramics":
            this.setState({ showCeramics: !this.state.showCeramics });
            break;
          case "showDesign":
            this.setState({ showDesign: !this.state.showDesign });
            break;
          case "showEducation":
            this.setState({ showEducation: !this.state.showEducation });
            break;
          default:
            null;
        }
    }

*/
    


    //function onTap(event, info) {
     //   console.log(info.point.x, info.point.y);

    //}
      
    render() {

        const list = { hidden: { opacity: 0 }, visible: { opacity: 1} };
        const item = { hidden: { x: -10, opacity: 0 }, visible: { opacity: 1} };
        const item2 = { hidden: { x: -10, opacity: 0 }, visible: { opacity: 1} };
    

        return(
            <motion.ul style={{ listStyleType: 'none', fontSize: 40 }} initial='hidden' animate="visible" variants={list} transition={{ duration: 2, staggerChildren: true }} >
                <motion.li variants={item} >
                    {`Ceramics  `}
                </motion.li>
                <motion.li  variants={item}>
                    {`Design  `}
                </motion.li>
                <motion.li variants={item}>
                    {`Education`}
                </motion.li>
            </motion.ul>
        )
    }
}

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
                                id={ceramics.id}
                                frameBorder="0" />
                            </Col>
                        <CardTitle style={{fontSize: 30}} className="m-1">{ceramics.name}</CardTitle>
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
                <Col key={ceramics.id} className="col-12 col-md-5 m-1 mx-auto my-auto">
                    <RenderItem ceramics={ceramics} />
                </Col>
            )}
        );


        return(
            <div>
                <Categories />
                <Row className="" >
                    {works}
                </Row>

            </div>
        )
    }
}



export default Works;