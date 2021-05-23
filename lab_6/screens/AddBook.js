import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Buttons } from "../staticVars/staticVars";
import { Button } from "react-native-elements";
import { FloatingLabelInput } from 'react-native-floating-label-input';

const AddBook = ({ navigation, route }) => {

    const { data } = route.params;
    const { setData } = route.params;

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState('');

    function getDataBeck() {
        try {
            const number = parseInt(price);
            if ( isNaN(number)) { setPrice('that should be number' )
                setTimeout(() => {setPrice('')}, 1500);
            } else {
                const newBook = { image: '', isbn13: 100, price: price, subtitle: subtitle, title: title,}
                const newData = [...data, newBook]
                setData(newData)
                navigation.navigate('Books')
            }
        } catch(e) {console.log(e)}
    }

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <View style={{padding: 50, flex: 1}}>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        label={'Title'}
                        value={title}
                        rightComponent={(
                            <TouchableOpacity
                                style={{alignContent:'center', justifyContent:'center'}}
                                onPress={()=>{setTitle('')}}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(data) => setTitle(data)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        label={'Subtitle'}
                        value={subtitle}
                        rightComponent={(
                            <TouchableOpacity
                                style={{alignContent:'center', justifyContent:'center'}}
                                onPress={()=>{setSubtitle('')}}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(data) => setSubtitle(data)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        keyboardType="numeric"
                        label={'Price'}
                        value={price}
                        rightComponent={(
                            <TouchableOpacity
                                style={{alignContent:'center', justifyContent:'center'}}
                                onPress={()=>{setPrice('')}}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(data) => setPrice(data)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Button
                        onPress={() => {getDataBeck()}}
                        theme={Buttons}
                        title="Add"
                        buttonStyle={{ width: 150 }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default AddBook
