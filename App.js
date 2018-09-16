/**
 * Index application views and routes
 * @author Face06
 */

import React, { Component } from 'react';
import { Player } from 'react-native-audio-stream';
import { Examples } from '@shoutem/ui';

import { SplashScreen, Home } from './src/components';
import {youtubeStream} from './src/streams/youtube';

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
        this.youtubeStream = new youtubeStream();
        this.youtubeStream.fillVideoIdList().then(
            () => this.setState({isLoading: false})
        ).catch(
            function (err) {
                console.log(err);
            }
        );
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
        console.log(this.youtubeStream.videoIdList);

        return (<Home youtubeStream={this.youtubeStream.videoIdList}/>);
    }
}