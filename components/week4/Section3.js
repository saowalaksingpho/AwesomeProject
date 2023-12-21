import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section3() {
    return (
        <View style={{ marginHorizontal:20 , flexDirection : 'row',marginVertical:20 }}>
            <View style={{  backgroundColor: "red", borderRadius: 50/2,height:50 ,width:50,  justifyContent: 'center' ,alignItems:'center' }}>
                <Text>9.5</Text>
            </View>
            <View >
                <Text style={{color:'orange',fontSize:20}}>Excellent</Text> 
                   <Text>See 801 reviews</Text>
            </View>
        </View>
    );
}