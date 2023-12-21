import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section6() {
    return (
        <View style={{ marginHorizontal: 20, flexDirection: 'colum', marginVertical: 20 }}>
            <View style={{}}>
                <Text style={{ fontSize: 20 }}>Location</Text>
                <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View>
            <View style={{  flexDirection: 'row', marginVertical: 10 }}>
                <Image style={{ flex:1,resizeMode: 'cover', aspectRatio: 16 / 9 }} source={require('../../assets/week3/map.jpg')} />
            </View>
        </View>
    );
}