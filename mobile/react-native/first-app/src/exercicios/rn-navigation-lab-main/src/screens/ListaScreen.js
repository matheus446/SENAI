// ListaScreen.js

// Tela que mostra vários jogos usando o componente CardJogo.


import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import { CardJogo } from '../components';

export default function ListaScreen() {
  const jogos = [
    {
      id: '1',
      titulo: 'God of War Ragnarök',
      genero: 'Ação',
      plataforma: 'PS5',
      nota: '9.8',
    },
    {
      id: '2',
      titulo: 'Fortnite',
      genero: 'Battle Royale',
      plataforma: 'Multi',
      nota: '8.9',
    },
    {
      id: '3',
      titulo: 'Resident Evil 4',
      genero: 'Terror',
      plataforma: 'PC',
      nota: '9.5',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Lista de Jogos
      </Text>

      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardJogo
            titulo={item.titulo}
            genero={item.genero}
            plataforma={item.plataforma}
            nota={item.nota}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 20,
  },

  titulo: {
    color: '#8B5CF6',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});