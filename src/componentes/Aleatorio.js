import React from 'react';
import { Text, View } from 'react-native';

function gerarNumeroAleatorio(mino, maxo) {
  return Math.floor(Math.random() * (maxo - mino + 1)) + mino;
}

const Aleatorio = ({ mino, maxo }) => {
  const numeroAleatorio = gerarNumeroAleatorio(mino, maxo);

  return (
    <View>
      <Text>Número Aleatório: {numeroAleatorio}</Text>
    </View>
  );
};

export default Aleatorio;