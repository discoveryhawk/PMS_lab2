import React, { useState } from "react";
import {View, Text, ScrollView, Image, TouchableHighlight, Dimensions} from 'react-native'
import { useScreenDimensions, MainT} from '../staticVars/staticVars'
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchBar from "react-native-dynamic-search-bar";
import * as Network from 'expo-network';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/actions';

const Books = ({ navigation }) => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const { BooksData } = useSelector(state => state.booksReducer);
    const dispatch = useDispatch();

    const addToStorage = items => dispatch(addBook(items));

    const addBooks = items => { addToStorage(items) };

    const screenData = useScreenDimensions();
    const dim = Dimensions.get("screen")

    const deletion = (id) => {
        const idx = BooksData.findIndex((el) => el.isbn13 === id)
        const newBooksData = [...BooksData.slice(0, idx),...BooksData.slice(idx + 1)]
        addBooks(newBooksData)
    };

    const forSearch = (data, text) => {
        if(text.trim().length === 0 || text.length === 0) { return data
        } else {return data.filter((item) => { if( item.title.replace(/[^a-zA-Z ]/g, "").toLowerCase().indexOf(text)> -1 ){return (item)}})}
    }

    const FilterFroDuplicates = (arr, key) => {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const getNewData = async (searchTxt) => {
        let InitArray = []
        const txt = searchTxt.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, ' ').trim().replace(/,/g, '')
        setSearch(txt)
        if( txt.length <= 2) {
            return null
        } else if ( (await Network.getNetworkStateAsync()).isConnected ) {
            let url = `https://api.itbook.store/1.0/search/${txt}`
            const fetchResult = await fetch(url);
            const loadedData = await fetchResult.json();
            InitArray = [...forSearch(BooksData, txt), ...loadedData.books]
        }
        addBooks(FilterFroDuplicates([...InitArray, ...BooksData], 'isbn13' ))
    }

    const vis_data = forSearch(BooksData, search)

    return (
        <ScrollView>
            <View>
                <Appbar.Header theme={ MainT }>
                    <Appbar.Action icon="home" />
                    <SearchBar
                        style={{ backgroundColor: 'rgb(242, 242, 242)', flex: 1}}
                        placeholder="Search some books"
                        onClearPress={() => {setSearch('')}}
                        onChangeText={(text) => getNewData(text)}
                    />
                    <Appbar.Action icon="plus" onPress={() => {navigation.navigate('AddBook', {data: data, setData: setData})}} />
                </Appbar.Header>
            </View>
            <View>
                {
                    search.length <= 2 ?
                        <View style={{height: dim.height, paddingTop: screenData.isLandscape ? '15%' : '65%', flexDirection:'column', alignItems:'center'}}>
                            <Text style={{fontSize: 20}}>
                                type in search
                            </Text>
                        </View> :
                    vis_data.length === 0 ?
                        <View style={{height: dim.height, paddingTop: screenData.isLandscape ? '15%' : '65%', flexDirection:'column', alignItems:'center'}}>
                            <Text style={{fontSize: 20}}>
                                not_found
                            </Text>
                        </View> :
                        vis_data.map(( item, i) => {
                            return(
                                <View key={i}>
                                    <TouchableHighlight onPress={() => { navigation.navigate('InfoBook', {Id: item.isbn13})}}>
                                        <View style={{backgroundColor: '#aff8fd', borderRadius: 30, flexDirection: 'row', margin: 10}}>
                                            <View>
                                                <Image resizeMode="cover" source={ item.image === 'N/A' || item.image === '' ? require('../assets/istockphoto.jpeg') : {uri: item.image}} style={{ borderRadius: 30, height: 200, width: 150}} />
                                            </View>
                                            <View style={{ marginLeft: '5%',  width: '76%' }}>
                                                <Text style={{ flex: 0,  width: screenData.isLandscape ? '100%' : '45%',  fontSize: 18,  marginBottom: 10,  marginTop: 10,  textAlign: 'left' }}>
                                                    { item.title.length >= 43 ? item.title.slice(0, 43 - 1) + '…' : item.title }
                                                </Text>
                                                <Text style={{ flex: 0, width: screenData.isLandscape ? '100%' : '45%', fontSize: 15, marginBottom: 10, marginTop: 10, textAlign: 'left' }}>
                                                    { item.subtitle.length === 0 ? 'Programming skills' : item.subtitle.length >= 40 ? item.subtitle.slice(0, 40 - 1) + '…' : item.subtitle }
                                                </Text>
                                                <Text style={{ position: 'absolute', bottom: -15, marginBottom: '5%' }}>
                                                    Price: { item.price.length === 0 ? '$100' : item.price }
                                                </Text>
                                            </View>
                                            <TouchableHighlight
                                                style={{ borderRadius: 30, position: "absolute", right: 0, top: 0, width: screenData.isLandscape ? '8%' : '10%', height: screenData.isLandscape ? '20%' : '18%', backgroundColor: '#049CA6'}}
                                                onPress={() => { deletion(item.isbn13) }}>
                                                <View>
                                                    <Icon
                                                        onPress={() => { deletion(item.isbn13) }}
                                                        style={[{color: '#aff8fd', flex: 0, marginTop: screenData.isLandscape ? '12%' : '18%', alignSelf: 'center' }]}
                                                        size={ screenData.isLandscape ? 25 : 22}
                                                        name={'arrow-left'}
                                                    />
                                                </View>
                                            </TouchableHighlight>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            )
                        })
                }
            </View>
        </ScrollView>
    )
}

export default Books
