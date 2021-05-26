import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Switch, Dimensions} from 'react-native';
import {LineChart, PieChart} from "react-native-chart-kit";
import { data, useScreenDimensions } from '../staticVars/staticVars'
import Svg, { Circle } from 'react-native-svg';

const Charts = () => {

    const dim = Dimensions.get("screen")

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const screenCheck = useScreenDimensions();

    if (isEnabled) {
        return (
            <View style={ screenCheck.isLandscape ? { flex: 0, alignItems: "center", justifyContent: "center", marginTop: '5%'} : {flex: 0, alignItems: "center", justifyContent: "center", marginTop: '30%',}}>
            <Text>Line</Text>
                <Switch
                    trackColor={{ false: "#F79E63", true: "#049CA6" }}
                    thumbColor={isEnabled ? "#F79E63" : "#049CA6"}
                    ios_backgroundColor="#049CA6"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={ screenCheck.isLandscape ? {flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 10} : {flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: '15%'}}
                />
                <PieChart
                    data={[ { percent: 45, color: '#06dcea' }, { percent: 5, color: '#e2b6ff' }, { percent: 25, color: '#f6ff89' }, { percent: 25, color: '#bebebe' },]}
                    hasLegend={false}
                    width={ dim.width }
                    height={ screenCheck.isLandscape ? dim.height / 1.8: dim.height / 3 }
                    chartConfig={{ color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})` }}
                    style={{ alignItems: "center", marginLeft: '50%' }}
                    accessor="percent"
                    absolute
                />
                <View style={ screenCheck.isLandscape ? { zIndex: 1, position: 'absolute', paddingLeft: '39.5%', top: '43.7%' } :  { zIndex: 1, position: 'absolute', paddingLeft: '35.5%', top: '51.7%' }}>
                    <Svg height="180" width="200">
                        <Circle cx="50" cy="50" r="50" fill="white" />
                    </Svg>
                </View>
            </View>
        )
    } else {
        return (
            <View style={ screenCheck.isLandscape ? { flex: 0, alignItems: "center", justifyContent: "center", marginTop: '5%'} : {flex: 0, alignItems: "center", justifyContent: "center", marginTop: '30%',}}>
                <Text>Pie</Text>
                <Switch
                    trackColor={{ false: "#049CA6", true: "#F79E63" }}
                    thumbColor={isEnabled ? "#049CA6" : "#F79E63"}
                    ios_backgroundColor="#049CA6"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={ screenCheck.isLandscape ? {flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: '8%'} : {flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: '15%'}}

                />
                <LineChart
                    data={{ datasets: [{ data: data }] }}
                    width={ screenCheck.isLandscape ? dim.width : dim.width * 1.3 }
                    height={ screenCheck.isLandscape ? dim.height / 4.5 : dim.height / 6 }
                    chartConfig={{
                        backgroundColor: "rgb(242, 242, 242)",
                        backgroundGradientFrom: "rgb(242, 242, 242)",
                        backgroundGradientTo: "rgb(242, 242, 242)",
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        propsForDots: {r: "0", strokeWidth: "0", stroke: "#000", barPercentage: '1'}
                    }}
                    style={ screenCheck.isLandscape ? { flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 10 } : { flex: 0, marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: '15%', marginLeft: '-5%'}}
                    withInnerLines={false}
                    withOuterLines={false}
                    withHorizontalLabels={false}
                    withVerticalLabels={false}
                    bezier
                />
            </View>
        )
    }
}

export default Charts
