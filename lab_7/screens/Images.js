import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Appbar } from 'react-native-paper';
import SearchBar from "react-native-dynamic-search-bar";
import { useScreenDimensions, MainT } from '../staticVars/staticVars'
import Gallery from "./Gallery";
import { useSelector, useDispatch } from 'react-redux';
import { addImg } from '../redux/actions';
import * as Network from 'expo-network';

const Images = () => {

    const screenData = useScreenDimensions();
    const { ImagesData } = useSelector(state => state.booksReducer);
    const dispatch = useDispatch();
    const addToStorage = img => dispatch(addImg(img));
    const addImage = img => { addToStorage(img) };


    React.useEffect(() => {
        const url = `https://pixabay.com/api/?key=19193969-87191e5db266905fe8936d565&q=hot+summer&image_type=photo&per_page=16`;
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const fetchResult = await fetch(url);
                const loadedData = await fetchResult.json();
                const loadedDataURIs = loadedData['hits'].map((lD) => ({ uri: lD['largeImageURL'] }));
                addImage(loadedDataURIs)
            } catch (e) { console.error(e.message) }
        };fetchData();
        return () => cleanupFunction = true;
    }, []);

    const GalleryCreator = (images = [], size = 8) => {
        const result = [];
        for (let i = 0; i < Math.ceil(images.length / size); i++) {
            result[i] = images.slice(i * size, (i * size) + size);
        } return result;
    };

    const pickImage = async () => {
        const pickedImage = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [3, 4],
            quality: 1
        });
        if (pickedImage.cancelled) { console.log('cancelled') } else {
            const newItem = { uri: pickedImage.uri }
            addImage([...ImagesData, newItem])
        }
    };

    const component = GalleryCreator(ImagesData).map( items => <Gallery key={ items[0].uri} data={items} width={screenData.width / 4 } height={screenData.isLandscape ? screenData.height / 2.5 : screenData.height / 6.5} /> );

    return (
        <>
            <View>
                <Appbar.Header theme={MainT}>
                    <Appbar.Action icon="home"/>
                    <SearchBar placeholder='Search' style={{flex: 1}} />
                    <Appbar.Action icon="plus" onPress={pickImage} />
                </Appbar.Header>
            </View>
            <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
                {
                    component.length === 0 ?
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center", height: "100%"}}>
                            <Text style={{fontStyle: "italic", fontSize: 20}}>
                                Tap on plus icon
                            </Text>
                        </View> :
                    <ScrollView style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
                        { component }
                    </ScrollView>
                }
            </View>
        </>
    );
};

export default Images
