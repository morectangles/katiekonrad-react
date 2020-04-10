import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';

class Main extends Component {
    render() {
        return(
            <div>
                <head>
                    <title>Katie Konrad</title>
                </head>
                <Header />
                <Home />
            </div>
        )
    }
}

export default Main;