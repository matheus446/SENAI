import { View, Text, StyleSheet } from "react-native";

export default function CardProduto(props) {
    return (
        <View>
            <Text>Produto: {props.produto}</Text>
            <Text>Preço: R$ {props.preco}</Text>
        </View>
    )
}




// App.js
import React from 'react';
import { View } from 'react-native';
import Produto from './Produto';

export default function App() {
  return (
    <View>
      <Produto nome="Camisa" preco={50} />
    </View>
  );
}