import React from 'react';
import { Button } from 'react-native';
import { Image, Text, View } from 'react-native';


const onPressButton = () => {
    console.log("calculate button is pressed!!!");
};


export default function Section8() {
    return (
        <View style={{ marginHorizontal: 20 , marginVertical: 30, flexDirection: 'row', alignContent: 'space-between', borderTopColor: 'gray', borderTopWidth: 1 }}>
            <View style={{ marginVertical: 5, flexDirection: 'column', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 15 }}>Price</Text>
                <Text style={{ fontSize: 20, color: 'orange' }}>$399.99</Text>
                <Text style={{ fontSize: 15 }}>AVG/Night</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingLeft: 200, paddingTop: 20, paddingBottom: 20 }}>
                <Button title="Book now" onPress={onPressButton}></Button>
            </View>
        </View>
    );
}
