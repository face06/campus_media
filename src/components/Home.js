import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Screen, Title, ImageBackground, NavigationBar, Tile, Text, Subtitle, Divider, ListView, TouchableOpacity, Button, Image} from '@shoutem/ui';
import {youtubeStream} from "../streams/youtube";
import SplashScreen from "./SplashScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

export default class Home extends Component {

    constructor(props) {
        super(props);
        Home.renderRow = Home.renderRow.bind(this);
        Home.onVideoPress = Home.onVideoPress.bind(this);
        Home.onNavigateBack = Home.onNavigateBack.bind(this);
        this.state = {
            isLoading: true,
            videoIdList: props.videoIdList,
            videoPanel: true
        };

        this.styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        });
    }

    static onVideoPress() {
        this.setState({
            isWatching: true
        });
    }

    static onNavigateBack() {
        this.setState({
            isWatching: false
        });
    }

    static renderRow(videoIdList) {
        return (
            <View>
                <TouchableOpacity onPress={Home.onVideoPress}>
                    <ImageBackground
                        styleName="large-ultra-wide"
                        source={{ uri: videoIdList.thumbnail }}
                    >
                    <Tile>
                        <Title styleName="md-gutter-bottom">{videoIdList.title}</Title>
                        <Subtitle styleName="sm-gutter-horizontal">{videoIdList.id}</Subtitle>
                    </Tile>
                    </ImageBackground>
                    <Divider styleName="line" />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const videoIdList = this.state.videoIdList;
        /*
        if (this.state.isWatching) {
            return (
                <Screen>
                    <NavigationBar
                        title="Videos"
                        styleName="inline"
                        hasHistory
                        navigateBack={Home.onNavigateBack}
                    />
                </Screen>
            );
        }
        */

        return (
            <Screen>
                <NavigationBar
                    styleName="inline"
                    centerComponent={
                        <Image
                            source={{uri: 'https://campus-media.face06.com/RUN-Logo.png', cache: 'only-if-cached'}}
                            style={{width: 66, height: 42}}
                        />
                    }
                    leftComponent={(
                        <Button style={this.styles.container} onPress={() => this.setState({videoPanel: true})}>
                            <Icon name="youtube" size={30} color={"#104d97"}/>
                            <Text style={{marginLeft: 5}}>Vidéos</Text>
                        </Button>
                    )}
                    rightComponent={(
                        <Button style={this.styles.container} onPress={() => this.setState({videoPanel: false})}>
                            <Text style={{marginRight: 5}}>Radio</Text>
                            <Icon name="music" size={30} color={"#104d97"}/>
                        </Button>
                    )}
                />
                <ListView
                    data={videoIdList}
                    renderRow={Home.renderRow}
                />
            </Screen>
        );
    }


};