import React from 'react';
import { View } from 'react-native';
import Image from 'react-native-image-progress';

const Gallery = ({ data: imagesData, width, height}) => {

    const img = { width: width, height: height }
    const img3 = { width: width * 3, height: height * 3 }
    const ComponentOf = (uri, optionsStyles = img) => <Image style={optionsStyles} source={uri} threshold={150} />

    return (
        <View>
            <View style={{ display: "flex", flexDirection: "row"}}>
                <View style={{display: "flex", flexDirection: "column"}}>
                    <View style={{display: "flex", flexDirection: "column"}}>
                        {imagesData[0] && ComponentOf(imagesData[0])}
                        {imagesData[2] && ComponentOf(imagesData[2])}
                        {imagesData[3] && ComponentOf(imagesData[3])}
                        {imagesData[4] && ComponentOf(imagesData[4])}
                    </View>
                </View>
                <View style={{display: "flex", flexDirection: "column"}}>
                    {imagesData[1] && ComponentOf(imagesData[1], img3)}
                    <View style={{display: "flex", flexDirection: "row"}}>
                        {imagesData[5] && ComponentOf(imagesData[5])}
                        {imagesData[6] && ComponentOf(imagesData[6])}
                        {imagesData[7] && ComponentOf(imagesData[7])}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Gallery
