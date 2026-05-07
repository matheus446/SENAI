import React from 'react';
import { Text, View } from 'react-native';

export default function Produto({ nome, preco }) {
  return (
    <View>
      <Text>Produto: {nome}</Text>
      <Text>Preço: R$ {preco}</Text>
    </View>
  );
}