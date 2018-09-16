/**
 * Index application views and routes
 * @author Face06
 */

import React, { Component } from 'react';
import { Player } from 'react-native-audio-stream';
import { Examples } from '@shoutem/ui';

import { SplashScreen, Home } from './src/components';

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

        //this.youtubeStram = new youtubeStream();
        this.state = {
            isLoading: false
        };
    }

    /**
     * Render view
     * @returns {*}
     */
    render() {
        if (this.state.isLoading)
            return (<SplashScreen/>);

        return (<Home/>);
    }
}