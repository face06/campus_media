import React, { Component } from 'react';
import { View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Screen, Title, NavigationBar, ImageBackground, Tile, Subtitle, Divider, ListView} from '@shoutem/ui';
import {youtubeStream} from "../streams/youtube";
import SplashScreen from "./SplashScreen";

export default class Home extends Component {

    constructor(props) {
        super(props);
        console.log("PROPS: " + props.videoIdList);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            isLoading: true,
            videoIdList: props.videoIdList
        }
    }

    renderRow(videoIdList) {
        return (
            <View>
                <ImageBackground
                    styleName="large-banner"
                    source={{ uri: videoIdList.thumbnail }}
                >
                    <Tile>
                        <Title styleName="md-gutter-bottom">{videoIdList.title}</Title>
                        <Subtitle styleName="sm-gutter-horizontal">{videoIdList.id}</Subtitle>
                    </Tile>
                </ImageBackground>
                <Divider styleName="line" />
            </View>
        );
    }

    render() {
        const videoIdList = this.state.videoIdList;

        return (
            <Screen>
                <NavigationBar
                    title="Vidéos"
                    styleName="inline"
                />
                <ListView
                    data={videoIdList}
                    renderRow={this.renderRow}
                />
            </Screen>
        );
    }


};