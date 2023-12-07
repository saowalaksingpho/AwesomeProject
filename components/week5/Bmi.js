import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [Body, setBody] = useState('Normal');


    console.log("STATE : ", weight, height, bmi, Body);
    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight / (height / 100 * height / 100));
        setBmi(output.toFixed(2));
        let description = "";
        if (output < 18.5)
            description = "Underweight ";
        else if (output >= 18.5 && output <= 24.99)
            description = "Normal ";
        else if (output >= 25 && output <= 29.99)
            description = "Overweight";
        else if (output >= 30 && output <= 39.99)
            description = "Obese ";
        else
            description = "Morbidly Obese";
            setBody(description);
    };

    return (
        <View>
            <View style={{ padding: 20, backgroundColor: "white", borderRadius: 10, marginVertical: 10, height: 120, justifyContent: "space-around", marginTop: 10 }}>
                <Text style={{ fontSize: 20 }}> Weight (kg.)</Text>
                <TextInput onChangeText={(newWeight) => setWeight(newWeight)} value={weight} keyboardType="numeric" placeholder="Input your Weight..." />
            </View>

            <View style={{ padding: 20, backgroundColor: "white", borderRadius: 10, marginVertical: 10, height: 120, justifyContent: "space-around", marginTop: 10 }}>
                <Text style={{ fontSize: 20 }}>  Height (cm.)</Text>
                <TextInput onChangeText={(newHeight) => setHeight(newHeight)} value={height} keyboardType="numeric" placeholder=" Input your Height …" />
            </View>

            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <View style={{ flex: 1, backgroundColor: "#fddfd6", marginRight: 10, borderRadius: 10, marginVertical: 10, height: 80, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}> {bmi}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "#e6d1f2", marginLeft: 10, marginVertical: 10, borderRadius: 10, height: 80, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>   {Body}</Text>
                </View>
            </View>

            {/*<Button title="Calculate" onPress={onPressButton} />*/}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}
