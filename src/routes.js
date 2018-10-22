import {StackNavigator} from 'react-navigation';

import Home from './App/Home.react';
import Main from './App/Main.react';
import Radio from './App/Radio.react';

const AppNavigator = StackNavigator({
    //main: {screen: Main},
    //home: {screen: Home},
    radio: {screen: Radio}
}, {
    headerMode: 'none',
});

export default AppNavigator;