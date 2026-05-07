// Botao.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Botao({ titulo }) {
  return (
    <TouchableOpacity style={{ backgroundColor: '#2196F3', padding: 10, margin: 5 }}>
      <Text style={{ color: '#fff', textAlign: 'center' }}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

//app.js
import React from 'react';
import { View } from 'react-native';
import Botao from './Botao';

export default function App() {
  return (
    <View>
      <Botao titulo="Entrar" />
      <Botao titulo="Sair" />
      <Botao titulo="Cadastrar" />
    </View>
  );
}