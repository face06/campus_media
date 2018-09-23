import React, {Component} from 'react';
import {View} from 'react-native';
import {Screen, Title, NavigationBar, ImageBackground, Tile, Subtitle, Divider, ListView} from '@shoutem/ui';
import { youtubeStream } from '../streams/youtube';

export default class Home extends Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);

        let youtubeStream = new youtubeStream();
        youtubeStream.fillVideoIdList()
            .then(() => this.props.splashScreen.setState({isLoading: false}))
            .catch(err => {
                console.error(err);
                this.props.splashScreen.setState({error: err.message});
            });

        this.renderRow = this.renderRow.bind(this);
        this.state = {videoIdList: props.videoIdList};
    }

    renderRow(videoIdList) {
        return (
            <View>
                <ImageBackground styleName="large-banner" source={{uri: videoIdList.thumbnail}}>
                    <Tile>
                        <Title styleName="md-gutter-bottom">{videoIdList.title}</Title>
                        <Subtitle styleName="sm-gutter-horizontal">{videoIdList.id}</Subtitle>
                    </Tile>
                </ImageBackground>
                <Divider styleName="line"/>
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