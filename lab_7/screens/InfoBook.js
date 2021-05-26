import React from "react";
import {useScreenDimensions} from "../staticVars/staticVars";
import { View, Text, ScrollView, Image, Dimensions } from 'react-native'
import * as Network from 'expo-network';
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../redux/actions";

const InfoBook = ({ route }) => {

    const { Id } = route.params;
    const dim = Dimensions.get("screen")
    const { InfoData } = useSelector(state => state.booksReducer);
    const dispatch = useDispatch();

    const addToStorage = items => dispatch(addInfo(items));
    const addInfoData = items => { addToStorage(items) };

    const uniq = (arr, key) => {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    React.useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                if((await Network.getNetworkStateAsync()).isConnected) {
                    fetch(`https://api.itbook.store/1.0/books/${Id}`)
                        .then(response => response.json())
                        .then( (data) => { const infoArr = uniq([data, ...InfoData], 'isbn13')
                                addInfoData(infoArr)
                            }
                        )
                }
            } catch (err) {
                console.error(err.message)
            }
        };
        fetchData();
        return () => cleanupFunction = true;
    }, []);

    const screenData = useScreenDimensions();

    let check = []

    return (
        <ScrollView>
            <View>
                <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
                    {
                        InfoData.map((item, index) => {
                            if( item.isbn13 === Id ) {
                                check.push('')
                                return (
                                    <View key={index}>
                                        <Image resizeMode="cover" source={ item.image === 'N/A' || item.image === '' ? require('../assets/istockphoto.jpeg') : {uri: item.image}} style={ screenData.isLandscape ? { borderRadius: 30, marginLeft: '29%', marginBottom: 10, marginTop: 25, height: 360, width: 255}: { borderRadius: 30, marginLeft: '28%', marginTop: 25, height: 260, width: 155}} />
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
                            }
                        })
                    }
                    <View key={Id}>
                        {
                            check.length === 0 ?
                                <View style={{height: dim.height, paddingTop: screenData.isLandscape ? '15%' : '65%', flexDirection:'column', alignItems:'center'}}>
                                    <Text style={{fontSize: 20}}>
                                        No info in Storage
                                    </Text>
                                </View> :
                                null
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default InfoBook
