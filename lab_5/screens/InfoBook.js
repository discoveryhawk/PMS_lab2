import React from "react";
import {imagesFrom, infoFrom, useScreenDimensions} from "../staticVars/staticVars";
import { View, Text, ScrollView, Image } from 'react-native'

const InfoBook = ({ route }) => {

    const { Id } = route.params;
    let data = []; data.push(infoFrom(Id))

    const screenData = useScreenDimensions();
    const isLand = screenData.isLandscape

    return (
        <ScrollView>
            <View>
                <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
                    {
                        data.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Image
                                        resizeMode="cover"
                                        source={imagesFrom(item.image)}
                                        style={ isLand ? { borderRadius: 30, marginLeft: '29%', marginBottom: 10, marginTop: 25, height: 360, width: 255}: { borderRadius: 30, marginLeft: '28%', marginTop: 25, height: 260, width: 155}}
                                    />
                                    <View style={{marginLeft: 10, marginRight: 10}}>
                                        <Text style={{color: '#292929', fontSize: 20, marginBottom: 5, fontWeight: 'bold'}}>Title</Text>
                                        <Text style={{color: '#292929', fontSize: 18, marginBottom: 5}}>{item.title}</Text>
                                        <Text style={{color: '#292929', fontSize: 20, marginBottom: 5, fontWeight: 'bold'}}>Subtitle</Text>
                                        <Text style={{color: '#292929', fontSize: 18, marginBottom: 5}}>{item.subtitle}</Text>
                                        <Text style={{color: '#292929', fontSize: 20, marginBottom: 5, fontWeight: 'bold'}}>Year</Text>
                                        <Text style={{color: '#292929', fontSize: 18, marginBottom: 5}}>{item.year}</Text>
                                        <Text style={{color: '#292929', fontSize: 20, marginBottom: 5, fontWeight: 'bold'}}>Price</Text>
                                        <Text style={{color: '#292929', fontSize: 18, marginBottom: 5}}>{item.price}</Text>
                                        <Text style={{color: '#292929', fontSize: 20, marginBottom: 5, fontWeight: 'bold'}}>Pages</Text>
                                        <Text style={{color: '#292929', fontSize: 18, marginBottom: 5}}>{item.pages}</Text>
                                        <Text style={{color: '#292929', fontSize: 20, marginBottom: 5, fontWeight: 'bold'}}>Authors</Text>
                                        <Text style={{color: '#292929', fontSize: 18, marginBottom: 5}}>{item.authors}</Text>
                                        <Text style={{color: '#292929', fontSize: 20, marginBottom: 5, fontWeight: 'bold'}}>Publisher</Text>
                                        <Text style={{color: '#292929', fontSize: 18, marginBottom: 5}}>{item.publisher}</Text>
                                        <Text style={{color: '#292929', fontSize: 20, marginBottom: 5, fontWeight: 'bold'}}>Rating</Text>
                                        <Text style={{color: '#292929', fontSize: 18, marginBottom: 5}}>{item.rating}</Text>
                                        <Text style={{color: '#292929', fontSize: 20, marginBottom: 5, fontWeight: 'bold'}}>Description</Text>
                                        <Text style={{color: '#292929', fontSize: 18, marginBottom: 5}}>{item.desc}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default InfoBook
