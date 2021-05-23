import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainB } from '../staticVars/staticVars'
import Main from "./Main";
import Charts from "./Charts";
import AddBook from "./AddBook";
import InfoBook from "./InfoBook";
import Books from "./Books";
import Images from "./Images";

const Stack = createStackNavigator();

const BooksStack = () => {
    return(
        <Stack.Navigator initialRouteName="Books">
            <Stack.Screen name="Books" component={Books} options={{ headerShown: false, tabBarLabel: 'Books' }}/>
            <Stack.Screen name="AddBook" component={AddBook} />
            <Stack.Screen name="InfoBook" component={InfoBook} />
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer theme={ MainB }>
            <Tab.Navigator shifting={true} sceneAnimationEnabled={true} initialRouteName="Main">
                <Tab.Screen
                    name="Main"
                    component={Main}
                    options={{ tabBarLabel: 'Main', tabBarIcon: () => <Icon style={[{color: '#F9F3E7'}]} size={25} name={'pinterest-p'} /> }}
                />
                <Tab.Screen
                    name="Charts"
                    component={Charts}
                    options={{ tabBarLabel: 'Charts', tabBarIcon: () => <Icon style={[{color: '#F9F3E7'}]} size={25} name={'pie-chart'} />}}
                />
                <Tab.Screen
                    name="Books"
                    component={BooksStack}
                    options={{ tabBarLabel: 'Books', tabBarIcon: () => <Icon style={[{color: '#F9F3E7'}]} size={25} name={'book'}/>}}
                />
                <Tab.Screen
                    name="Images"
                    component={Images}
                    options={{ tabBarLabel: 'Images', tabBarIcon: () => <Icon style={[{color: '#F9F3E7'}]} size={22.5} name={'image'}/> }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
