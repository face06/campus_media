/**
 * Index application views and routes
 * @author Face06
 */

import React, { Component } from 'react';
import { Player } from 'react-native-audio-stream';

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

        //this.youtubeStram = new youtubeStream();
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

        return (<Player url={"https://listen.radioking.com/radio/12856/stream/24842"}/>);
    }
}