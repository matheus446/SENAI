import React from 'react';
import { Text } from 'react-native';

export default function Saudacao({ nome }) {
  return (
    <Text>Olá, {nome}! Bem-vindo(a)</Text>
  );
}



//app.js
import React from 'react';
import { View } from 'react-native';
import Saudacao from './Saudacao';

export default function App() {
  return (
    <View>
      <Saudacao nome="Ana" />
      <Saudacao nome="João" />
      <Saudacao nome="Maria" />
    </View>
  );
}