import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View, Button, Text } from 'react-native'

export default function AtividadeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu</Text>
      <Button
        title="Próxima Página"
        onPress={() => navigation.navigate('Atividade2')}
      />
    </View>
  );
}