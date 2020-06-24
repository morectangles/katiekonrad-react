import React, { Component } from 'react';
import { Button, Label, Col, Row, FormGroup, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faLastfmSquare } from '@fortawesome/free-brands-svg-icons';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            message: ''
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputValueChange = this.inputValueChange.bind(this);
    }

    handleSubmit(event) {
        console.log(`Current state is: ${JSON.stringify(this.state)}`);
        alert(`You are about to submit: ${JSON.stringify(this.state)}`);
        event.preventDefault();
    }

    inputValueChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col pt-2">
                        <h3>Want to work on something?  Let me know!</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content align-items-center">
                    <div className="col align-items-center">
                        <a role="button" className="btn btn-link" href="mailto:kathrynkonrad@gmail.com" style={{ fontSize: 30 }}>email <i className="fa fa-envelope-o fa-lg"></i> me</a>
                        <br></br>
                        <br></br>
                        <h5>or, fill out the form below!</h5>
                    </div>
                </div>
                <div className="row row-content pt-2">
                    <div className="col-md-8 mx-auto pt-3">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Row className="form-group align-items-center">
                                    <Label htmlFor="firstName" md={3}>First Name</Label>
                                    <Col md={6}>
                                        <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={this.inputValueChange} />
                                        {/* <Control.text model=".firstName" type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstName"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }} 
                                        /> */}
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={3}>Last Name</Label>
                                    <Col md={6}>
                                        <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            onChange={this.inputValueChange} />
                                        {/* <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }} 
                                        /> */}
                                    </Col>                        
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row className="form-group">
                                    <Label htmlFor="phoneNum" md={3}>Phone</Label>
                                    <Col md={6}>
                                        <Input type="phoneNum" id="phoneNum" name="phoneNum"
                                            placeholder="Phone Number"
                                            value={this.state.phoneNum}
                                            onChange={this.inputValueChange} />
                                        {/* <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(10),
                                                maxLength: maxLength(15),
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".phoneNum"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 10 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }} 
                                        /> */}
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={3}>Email</Label>
                                    <Col md={6}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.inputValueChange} />
                                        {/* <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }} 
                                        /> */}
                                    </Col>
                                </Row>
                            </FormGroup>
                            {/* <FormGroup>
                                <Row className="form-group">
                                    <Col md={{size: 4, offset: 2}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox
                                                    model=".agree"
                                                    name="agree"
                                                    className="form-check-input"
                                                /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        {/* <Control.select model=".contactType" name="contactType"
                                            className="form-control">
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                            </FormGroup> */}
                            <FormGroup>
                                <Row className="form-group">
                                    <Label htmlFor="message" md={3}>Message</Label>
                                    <Col md={8}>
                                        <Input type="textarea" id="message" name="message" rows="12"
                                            placeholder="Message"
                                            value={this.state.message}
                                            onChange={this.inputValueChange} />
                                        {/* <Control.textarea model=".feedback" id="feedback" name="feedback"
                                            rows="12"
                                            className="form-control"
                                        /> */}
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 2}} className="mx-auto">
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;

