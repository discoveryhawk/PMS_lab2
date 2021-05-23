import React from "react";
import { View, Text, ScrollView, Image } from 'react-native'
import BooksList from '../assets/BooksList.json'
import { useScreenDimensions, imagesFrom} from '../staticVars/staticVars'

const Books = () => {

    let gotBooksData = [];
    BooksList.books.map( item => (gotBooksData.push(item)))

    const screenData = useScreenDimensions();
    const isLand = screenData.isLandscape

    return (
        <ScrollView>
            <View style={{marginTop: 10}}>
                {
                    gotBooksData.map(( item, index) => {
                        return(
                            <View key={index}>
                                <View style={{ borderRadius: 30, backgroundColor: '#aff8fd', flexDirection: 'row', margin: 10}}>
                                    <View>
                                        <Image
                                            resizeMode="cover"
                                            source={imagesFrom(item.image)}
                                            style={{ borderRadius: 30, height: 200, width: 150}}
                                        />
                                    </View>
                                    <View style={{marginLeft: '5%'}}>
                                        <Text style={{flex: 0, width: isLand ? '100%' : '45%', fontSize: 18, marginBottom: 10, marginTop: 10, textAlign: 'left',}}>
                                            { item.title.length >= 43 ? item.title.slice(0, 43 - 1) + '…' : item.title }
                                        </Text>
                                        <Text style={{flex: 0, width: isLand ? '100%' : '45%', fontSize: 15, marginBottom: 10, marginTop: 10, textAlign: 'left',}}>
                                            { item.subtitle.length === 0 ? 'subtitle' : item.subtitle.length >= 40 ? item.subtitle.slice(0, 40 - 1) + '…' : item.subtitle }
                                        </Text>
                                        <Text style={{position: 'absolute', bottom: -5, marginBottom: '5%'}}>
                                            Price: { item.price.length === 0 ? '9999' : item.price }
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Books
