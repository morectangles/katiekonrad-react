import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardSubtitle, CardTitle, CardBody, Row, Col, Button } from 'reactstrap';
import { DESIGN } from '../shared/design';
import { CERAMICS } from '../shared/ceramics';
import { TEACHINGS } from '../shared/teachings';
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
            <motion.ul style={{ listStyleType: 'none', fontSize: 40, height: "100%" }} className="mr-3" initial='hidden' animate="visible" variants={list} transition={{ duration: 2, staggerChildren: true }} >
                <Link to="/ceramics">
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

function RenderItem2({design}) {
/*
    if (design.video) {
        return(
            <FadeTransform
            in 
                transformProps={{
                    exitTransform: 'scale(0.9) '
                }}
            >
                <Card style={{border: 'none'}}>
                    <Link to={`/works/${design.id}`}>
                        <Col  className="wrapper">
                            <Iframe url={design.video}
                                id={design.id}
                                frameBorder="0" />
                            </Col>
                        <CardTitle style={{fontSize: 30}} className="m-1">{design.name}</CardTitle>
                        <CardBody>{design.description}</CardBody>
                    </Link>
                </Card>
            </FadeTransform>
        )
    } else { */
        return(
            <FadeTransform
            in 
                transformProps={{
                    exitTransform: 'scale(0.9) '
                }}
            >
                <Card style={{border: 'none'}}>
                    <Link to={`/works/${design.id}`}>
                        <CardImg width="100%" src={process.env.PUBLIC_URL + design.image} /* alt={item.name} */ />
                        <CardTitle style={{fontSize: 30}}>{design.name}</CardTitle>
                        <CardBody>{design.description}</CardBody>
                    </Link>
                </Card>
            </FadeTransform>
        )
        
}

function RenderItem3({teaching}) {

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

class Works extends Component {
    constructor(props) {
        super(props);

        this.state = {
            design: DESIGN,
            ceramics: CERAMICS,
            teachings: TEACHINGS
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

        const works2 = this.state.design.map( design => {
            return(
                <Col key={design.id} className="col-12 col-md-5 m-1 mx-auto my-auto">
                    <RenderItem2 design={design} />
                </Col>
            )}
        );

        const works3 = this.state.teachings.map( teachings => {
            return(
                <Col key={teachings.id} className="col-12 col-md-5 m-1 mx-auto my-auto">
                    <RenderItem3 teaching={teachings} />
                </Col>
            )}
        );


        return(
            <div>
                <Categories />
                <Row className="" >
                    {works}
                </Row>
                <Row className="" >
                    {works2}
                </Row>
                <Row className="" >
                    {works3}
                </Row>

            </div>
        )
    }
}



export default Works;