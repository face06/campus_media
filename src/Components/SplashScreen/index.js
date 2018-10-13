import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image, View, ActivityIndicator, Text } from 'react-native';

/**
 * SplashScreen class
 */
export default class SplashScreen extends Component {

    /**
     * SplashScreen constructor
     * @param props
     */
    constructor(props) {
        super(props);

        this.styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            backgroundImage: {
                width: '100%',
                height: '100%',
            },
            loading: {
                marginTop: 20,
                color: '#FFF'
            },
            bottomView: {
                width: '100%',
                justifyContent: 'flex-end',
                padding: 5,
                alignItems: 'flex-end',
                position: 'absolute',
                bottom: 0
            },
        });
    }

    /**
     * Render method
     * @returns {*}
     */
    render() {
        return (
            <View style={this.styles.container}>
                <ImageBackground source={{uri: 'https://campus-media.face06.com/assets/images/background.png', cache: 'only-if-cached'}}
                                 style={this.styles.backgroundImage}>
                    <View style={this.styles.container}>
                        <View>
                            <Image
                                source={{uri: 'https://campus-media.face06.com/assets/images/logo.png', cache: 'only-if-cached'}}
                                style={{width: 264, height: 168}}/>
                        </View>
                        <View style={this.styles.loading}>
                            <ActivityIndicator size='small' color='#FFF'/>
                        </View>
                    </View>
                    <View style={this.styles.bottomView}>
                        <Text style={{color: '#474747'}}>CampusMedia v1.0.0</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }

};