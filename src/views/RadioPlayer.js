import { Player } from 'react-native-audio-stream';
import React, { Component } from "react";
import { Button, TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RadioPlayer extends Component {

    constructor(props) {
         super(props);

         this.state = {
             isPlaying: true
         };

         this.styles = StyleSheet.create({
            buttons: {
                flexDirection: 'row',
                alignItems: 'center'
            },
            container: {
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 10
            }
         });
    }

    onPressPlay = () => {
        this.setState({
            isPlaying: false
        })
    };

    render() {
        return(
            <View style={this.styles.container}>
                <View style={this.styles.buttons}>
                <TouchableOpacity onPress={this.onPressPlay}>
                    <Icon name="play-circle"/>
                    <Text style={this.styles.buttonText}>Salut</Text>
                </TouchableOpacity>
                </View>
            </View>
            //<Player url={"https://listen.radioking.com/radio/12856/stream/24842"}/>
        );
    }
}
