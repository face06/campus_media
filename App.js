/**
 * Index application views and routes
 * @author Face06
 */

import React, { Component } from 'react';
import { SplashScreen, Home } from './src/components';

/**
 * App class
 * @extends Component
 */
export default class App extends Component {

    /**
     * App Constructor.
     */
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: null
        };
    }

    /**
     * Render view
     * @returns {*}
     */
    render() {
        if (this.state.isLoading)
            return (<SplashScreen/>);

        return (<Home splashScreen={this} />);
    }

}
