import React from "react";
import {Button} from 'react-native'

export default props => {
    function executar() {
        console.warn("Esta executando!!!")
    }
    return (
        <>
        <Button 
            title="Aperte o botao 1"
            onPress={executar}
            />
            <Button 
            title="Aperte o botao 2"
            onPress={function() {
                console.warn("Esta executando o botao numero 2!!!")
            }}

            />
            <Button 
            title="Aperte o botao 3"
            onPress={() => {
                console.warn("Esta executando o botao numero 3!!!")
            }}/>
            </>
            
    )
}