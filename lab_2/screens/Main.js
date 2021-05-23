import React from "react";
import { View, Text } from 'react-native'

const Main = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', flexDirection:'column', alignItems:'center'}}>
            <Text style={{ fontSize: 20 }}>Литвиненко Олександр</Text>
            <Text style={{ fontSize: 20 }}>Група ІВ-83</Text>
            <Text style={{ fontSize: 20 }}>ЗК ІВ-8317</Text>
        </View>
    )
}

export default Main
