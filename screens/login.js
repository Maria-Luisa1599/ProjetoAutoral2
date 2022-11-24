import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default class Login extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Login</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
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