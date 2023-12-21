import React from "react";
import { FlatList } from "react-native";
import { Image, Text, View } from "react-native";

export default function Event(props) {
    const tours = [

        { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg", "month": "DEC", "date": "30", "datetime": "Thu, DEC 30, 09.00 am", "place": "London" },
        { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg", "month": "DEC", "date": "31", "datetime": "Thu, DEC 30, 09.00 am", "place": "Paris" },
        { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg", "month": "JAN", "date": "01", "datetime": "Thu, JAN 01, 09.00 am", "place": "Canada" },
        { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg", "month": "JAN", "date": "11", "datetime": "Thu, JAN 11, 09.00 am", "place": "USA" },
        { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg", "month": "JAN", "date": "21", "datetime": "Thu, JAN 21, 09.00 am", "place": "Thailand" }
    ];
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 18 }}>Up Coming Event</Text>
            <Text style={{ color: 'gray' }}>What's the Worst That Could Happend</Text>
            <FlatList
                horizontal={true}
                data={tours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View>
                                <View style={{ marginRight: 10 }}>
                                    <Image style={{ width: 200, height: 150, borderRadius: 10 }} source={{ uri: item.uri }} />
                                    <View style={{ marginTop: -40, height: 50, width: 200, paddingHorizontal: 20, backgroundColor: 'lightyellow', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 0.5, borderColor: 'black' }}>
                                        <View style={{paddingLeft:5}}>
                                            <Text >{item.title}</Text>
                                            <Text style={{ fontSize: 10, color: 'gray' }}>{item.datetime}</Text>
                                            <Text style={{ fontSize: 10, color: 'gray' }}>{item.place}</Text>
                                        </View>
                                        <View style={{paddingRight:5}}>
                                            <Text >{item.title}</Text>
                                            <Text style={{ fontSize: 10, color: 'gray' }}>{item.place}</Text>
                                            <Text style={{ fontSize: 10, color: 'gray' }}>{item.date}</Text>
                                        </View>


                                   
                                    </View>


                                </View>


                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}
