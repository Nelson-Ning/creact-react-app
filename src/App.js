/* eslint-disable */
 
import React, {
    Component
} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import PrivateRoute from './components/privateRoute/index.js';
import home from './pages/home/index.jsx';
export default class App extends Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <Router>
                <div className="layout-content" >
                    <div>
                        <Switch>
                            <Route exact path="/" component={home} />
                            <PrivateRoute exact path="/home" component={home} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}