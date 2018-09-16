/**
 * Index app with spash screen
 * @author Face06
 */

import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { SplashScreen } from './src/components';

/**
 * App class
 * @extends Component
 */
export default class App extends Component {

    /**
     * App Constructor.
     */
    constructor() {
        super();

        this.state = {
            isLoading: true
        };
    }

    /**
     * Render view
     * @returns {*}
     */
    render() {
        if (this.state.isLoading)
            return (<SplashScreen/>);

        return (<ScrollView/>);
    }
}