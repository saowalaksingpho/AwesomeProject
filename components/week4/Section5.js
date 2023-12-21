import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section5() {
    return (
        <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <FontAwesome name="wifi" size={32} color="#69cfcf" />
                {/* <Text style={{  color: "black" }}>หัวใจ</Text> */}
                <FontAwesome name="coffee" size={32} color="#69cfcf" />
                <FontAwesome name="bath" size={32} color="#69cfcf" />
                <FontAwesome name="car" size={32} color="#69cfcf" />
                <FontAwesome name="paw" size={32} color="#69cfcf" />
            </View>

        </View>
    );
}