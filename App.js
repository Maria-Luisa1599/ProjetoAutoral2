import React from "react";
import { Text, View, StyleSheet } from "react-native";
import DrawerNavigator from "./navigation/drawerNavigator";
import Start from "./screens/start";
import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { NavigationContainer } from "@react-navigation/native";

export default class App extends React.Component{
    render(){
        return(
            <NavigationContainer>
                 <AppNavigator/>
            </NavigationContainer>
           
        )
    }
}

const AppSwitchNavigator = createSwitchNavigator({
    Start: Start,
    DrawerNavigator: DrawerNavigator
});

const AppNavigator = createAppContainer(AppSwitchNavigator);