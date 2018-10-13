import React, { Component } from 'react';
import { NativeModules, StatusBar, View, Text } from 'react-native';

import { COLOR, ThemeContext } from 'react-native-material-ui';
import Container from '../Components/Container';
import MainTabNavigator from '../routes';

const UIManager = NativeModules.UIManager;

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
        accentColor: COLOR.pink500,
    },
};

class App extends Component {

    static configureScene(route) {
        return route.animationType || Navigator.SceneConfigs.FloatFromRight;
    }

    static renderScene(route, navigator) {
        return (
            <Container>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                <View style={{ backgroundColor: COLOR.green500, height: 24 }} />
                <Text>Yes</Text>
                <route.Page
                    route={route}
                    navigator={navigator}
                />
            </Container>
        );
    }

    componentWillMount() {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {
        return (
            <MainTabNavigator ref={(nav) => { this.navigator = nav; }} />
        );
    }
}

export default App;
