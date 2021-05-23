import React, {useEffect, useState} from 'react';
import { Dimensions } from "react-native";

export const MainB = {
    dark: false,
    colors: {
        primary: '#049CA6',
        background: 'rgb(242, 242, 242)',
        card: '#7DD7BD',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const MainT = {
    dark: false,
    colors: {
        primary: '#7DD7BD',
        background: 'rgb(242, 242, 242)',
        card: '#7DD7BD',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};
export const Buttons = {
    dark: false,
    colors: {
        primary: '#133943',
        background: 'rgb(242, 242, 242)',
        card: '#133943',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const imagesFrom = (book) => {
    switch (book) {
        case 'Image_01.png':
            return require('../assets/bookImages/Image_01.png');
        case 'Image_02.png':
            return require('../assets/bookImages/Image_02.png');
        case 'Image_03.png':
            return require('../assets/bookImages/Image_03.png');
        case 'Image_05.png':
            return require('../assets/bookImages/Image_05.png');
        case 'Image_06.png':
            return require('../assets/bookImages/Image_06.png');
        case 'Image_07.png':
            return require('../assets/bookImages/Image_07.png');
        case 'Image_08.png':
            return require('../assets/bookImages/Image_08.png');
        case 'Image_10.png':
            return require('../assets/bookImages/Image_10.png');
        default:
            return require('../assets/istockphoto.jpeg');
    }
};

export const useScreenDimensions = () => {
    const [screenData, setScreenData] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenData(result.screen);
        };

        Dimensions.addEventListener('change', onChange);

        return () => Dimensions.removeEventListener('change', onChange);
    });

    return { ...screenData, isLandscape: screenData.width > screenData.height };
};


export const data = [1, 0, 1, 0, 1, 0, 1, 0, 1];
