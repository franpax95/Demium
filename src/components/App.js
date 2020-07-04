import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Navbar from './Navbar';

import Home from '../pages/Home';
import Classes from '../pages/Classes';
import About from '../pages/About';

import './App.css';

const App = () => {
    const location = useLocation();
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, position: 'absolute' },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    });
    return(<>
        <Navbar />
        <div className="App">
            {transitions.map(({ item: location, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={location}>
                        <Route exact path={["/", "/home"]} component={Home} />
                        <Route exact path="/classes" component={Classes} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </animated.div>
            ))}
        </div>
    </>);
}

export default App;