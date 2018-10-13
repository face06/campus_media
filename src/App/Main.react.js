import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ScrollView, Image, Text, View } from 'react-native';
import { Toolbar, Card } from "react-native-material-ui";

import YoutubeList from '../BackProcess/YoutubeList';
import CustomBottomNavigation from '../Components/CustomBottomNavigation';
import Container from '../Components/Container';
import SplashScreen from "../Components/SplashScreen";

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = { active: 'videos', isLoading: true, videosList: [] };

        // Get videos list
        this.youtubeList = new YoutubeList();
        this.youtubeList.fillVideoIdList()
            .then(() => {
                // For seeing spaslscreen always
                setTimeout(() => {
                    this.setState({ isLoading: false, videosList: this.youtubeList.videoIdList });
                }, 2000);
            })
            .catch(err => console.error(err));
    }

    renderToolbar() {
        return (
            <Toolbar
                key="toolbar"
                leftElement="menu"
                onLeftElementPress={() => this.props.navigation.goBack()}
                centerElement="Campus Média"
            />
        );
    }

    renderVideo(video) {
        return (
            <Card key={video.key}>
                <Image
                    style={{width: '100%', height: 200}}
                    source={{uri: video.thumbnail }}
                />
                <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        { video.title }
                    </Text>
                </View>
            </Card>
        )
    }

    render() {
        if (this.state.isLoading)
            return <SplashScreen/>;

        return (
            <Container>
                { this.renderToolbar() }
                <ScrollView keyboardShouldPersistTaps="always" keyboardDismissMode="interactive">
                    { this.state.videosList.map(video => this.renderVideo(video)) }
                </ScrollView>
                <CustomBottomNavigation parent={this}/>
            </Container>
        )
    }

}

Main.propTypes = propTypes;

export default Main;
