/**
 * Index application views and routes
 * @author Face06
 */
import React, { Component } from 'react';

import { SplashScreen, Home, RadioPlayer } from './src/components';
import { youtubeStream } from './src/streams/youtube';

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
            isLoading: true
        };

        this.youtubeStream = new youtubeStream();
        this.youtubeStream.fillVideoIdList().then(
            () => this.setState({isLoading: false})
        ).catch(
            function (err) {
                console.log(err);
            }
        );
    }

    /**
     * Render view
     * @returns {*}
     */
    render() {
        if (this.state.isLoading)
            return (<SplashScreen/>);

        return (<Home videoIdList={this.youtubeStream.videoIdList}/>);
        //return (<RadioPlayer />)
    }
}