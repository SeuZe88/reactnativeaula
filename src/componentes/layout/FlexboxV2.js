import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    const lado = 50
    return (
       <View style={styles.FlexV2}>
        <Quadrado cor='#05f5a5'/>
        <Quadrado cor='#f71807'/>
        <Quadrado cor='#271ed6'/>
        <Quadrado cor='#ebc3c0'/>
        <Quadrado cor='#66e809'/>
       </View>


    )
}

const styles = StyleSheet.create({
FlexV2: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: '#000'
}
})