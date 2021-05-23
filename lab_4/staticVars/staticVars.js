import React, {useEffect, useState} from 'react';
import { Dimensions } from "react-native";

export const MainB = {
    dark: false,
    colors: {
        primary: '#049CA6',
        background: 'rgb(242, 242, 242)',
        card: '#7DD7BD',
        text: '#049CA6',
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
        text: '#049CA6',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};
export const Buttons = {
    dark: false,
    colors: {
        primary: '#7DD7BD',
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


export const infoFrom = (book) => {
    switch (book) {
        case '9780321856715':
            return require('../assets/boksInfo/9780321856715.json');
        case '9780321862969':
            return require('../assets/boksInfo/9780321862969.json');
        case '9781118841471':
            return require('../assets/boksInfo/9781118841471.json');
        case '9781430236054':
            return require('../assets/boksInfo/9781430236054.json');
        case '9781430237105':
            return require('../assets/boksInfo/9781430237105.json');
        case '9781430238072':
            return require('../assets/boksInfo/9781430238072.json');
        case '9781430245124':
            return require('../assets/boksInfo/9781430245124.json');
        case '9781430260226':
            return require('../assets/boksInfo/9781430260226.json');
        case '9781449308360':
            return require('../assets/boksInfo/9781449308360.json');
        case '9781449342753':
            return require('../assets/boksInfo/9781449342753.json');
        default:
            return require('../assets/boksInfo/test.json');
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
