import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WeatherDetails from "../screens/weatherDetails";
import Home from "../screens/home";

const Tab = createBottomTabNavigator()

export default class TabNavigator extends React.Component{
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="WeatherDetails" component={WeatherDetails}/>
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});