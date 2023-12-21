import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section2() {
    return (
        
            <View style={{flex:1 , padding: 20, backgroundColor: "#e6d1f2", borderRadius: 10,  justifyContent: 'center' ,alignItems:'center', marginTop: -40 ,marginHorizontal:20 }}>
                <Text>Hilton San Francisco</Text>
                <View style = {{flexDirection : 'row'}}>
                    <FontAwesome name="star"  color="red" />
                    <FontAwesome name="star"  color="red" />
                    <FontAwesome name="star"  color="red" />
                    <FontAwesome name="star"  color="red" />
                    <FontAwesome name="star-half-o" color="red" />
                </View>
                    <Text style={{textAlign:'center'}} >Facilities provided may range from a modest quality mattress in a small room to large suites</Text>

            </View>
        
    );
}
