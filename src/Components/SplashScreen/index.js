import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image, View, ActivityIndicator, Text, StatusBar } from 'react-native';

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
            background: {
                width: '100%',
                height: '100%',
                backgroundColor: '#4c687a'
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
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4C687A"
                />
                <View style={this.styles.background}>
                    <View style={this.styles.container}>
                        <View>
                            <Image
                                source={{uri: 'https://campus-media.face06.com/assets/images/logo.png', cache: 'only-if-cached'}}
                                style={{width: 264 / 1.3, height: 168 / 1.3}}/>
                        </View>
                        {/*<View style={this.styles.loading}>
                            <ActivityIndicator size='large' color='#FFF'/>
                        </View>*/}
                    </View>
                    <View style={this.styles.bottomView}>
                        <Text style={{color: '#d9d9d9'}}>CampusMedia v1.0.0</Text>
                    </View>
                </View>
            </View>
        );
    }

};