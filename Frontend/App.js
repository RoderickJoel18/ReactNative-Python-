import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/pages/Login';
import Registry from './src/pages/Registry';

const navegacion = createStackNavigator({
    Login : {
        screen : Login,
        
    },

    Register : {
        screen : Registry,

    }
}, {headerMode : 'none',
    initialRouteName : 'Login'
});

export default createAppContainer(navegacion)

