import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Educator from './EducatorComponent';
import About from './AboutComponent';
import Works from './WorksComponent';
import Design from './DesignComponent';
import Ceramics from './CeramicsComponent';
import Developer from './DeveloperComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { faKickstarter } from '@fortawesome/free-brands-svg-icons';

class Main extends Component {
    render() {

        const HomePage = () => {
            return(
                <Home />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/educator' component={Educator} />
                    <Route path='/about' component={About} />
                    <Route path='/works' component={Works} />
                    <Route path='/design' component={Design} />
                    <Route path='/ceramics' component={Ceramics} />
                    <Route path='/developer' component={Developer} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);