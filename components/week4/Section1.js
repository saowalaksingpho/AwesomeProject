import React from 'react';
import { Image, ScrollView,   View } from 'react-native';
import MyIcon from '../week3/MyIcon';

export default function Section1() {
    return (
        
            <View style={{ flexDirection:"row"}}>
            <Image style={{ flex:1, resizeMode:'cover', aspectRatio:16/9}} source={require('../../assets/week3/room-6.jpg')} /> 
            {/* <MyIcon title='หัวใจ' name='heart' size={30} color='orange'  /> */}
            </View>
        
    );
}


