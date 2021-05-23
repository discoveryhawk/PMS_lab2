import React from 'react';
import RootNavigator from './screens/RootNavigator'
import { LogBox } from "react-native";
LogBox.ignoreLogs([""]);

const App = () => <RootNavigator />; export default App
