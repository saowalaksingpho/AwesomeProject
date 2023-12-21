import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section4() {
    return (
        <View style={{ marginHorizontal:20 , flexDirection : 'row',marginVertical:20 }}>
            <View style={{ borderTopWidth:1, borderBottomWidth:1,   justifyContent: 'center'  }}>
                <Text style={{fontSize:20}}>Hotel Description</Text>
                <Text >218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text> 
            </View>

        </View>
    );
}