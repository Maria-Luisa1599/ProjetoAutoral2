import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stackNavigator";
import Login from "../screens/login";

const Drawer = createDrawerNavigator()

export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <Drawer.Navigator initialRouteName="Login">
                <Drawer.Screen name="Home" component={StackNavigator}/>
                <Drawer.Screen name="Login" component={Login}/>
            </Drawer.Navigator>
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