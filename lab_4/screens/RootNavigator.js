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
                    options={{
                        tabBarLabel: 'Main',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'pinterest-p'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Charts"
                    component={Charts}
                    options={{
                        tabBarLabel: 'Charts',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'pie-chart'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Books"
                    component={BooksStack}
                    options={{
                        tabBarLabel: 'Books',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'book'}
                                />
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
