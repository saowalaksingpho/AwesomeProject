import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function MyIcon() {
    return (
        <View style={{ justifyContent:'center',alignContent:'center'}}>
            <FontAwesome name="paw" size={32} color="orange" />
            <Text style={{ fontSize: 12, color: "black" }}>อุ้งมือ</Text>
        </View>
    );
}
