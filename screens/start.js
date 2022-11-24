import React from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import AppTitle from "../components/appTitle";

export default class Start extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <AppTitle/>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("DrawerNavigator")}>
                    <Text>INICIAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c51bf"
    }
});