/**
 * Index app with spash screen
 * @author Face06
 */

import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Player } from 'react-native-audio-stream';
import { ImageBackground } from '@shoutem/ui';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Player url={"https://listen.radioking.com/radio/12856/stream/24842"}/>
                <ImageBackground
                    styleName="large-portrait"
                    source={{ uri: 'http://genchi.info/images/recording-studio-wallpaper-15.jpg' }}>
                    <Image source={{ uri: 'https://campus-media.face06.com/RUN-Logo.png' }} style={{width:200, height: 200}} />
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});