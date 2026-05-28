// Tela principal do app.

// Ela possui:

// Título
// Campo de busca
// Lista de jogos
// useState

// Usado para:

// Guardar o texto digitado
// Guardar a lista filtrada

import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {

  // Lista original de jogos
  const jogos = [
    {
      id: '1',
      titulo: 'Cyberpunk 2077',
      genero: 'RPG',
      plataforma: 'PC',
    },
    {
      id: '2',
      titulo: 'Elden Ring',
      genero: 'Soulslike',
      plataforma: 'PS5',
    },
    {
      id: '3',
      titulo: 'Valorant',
      genero: 'FPS',
      plataforma: 'PC',
    },
    {
      id: '4',
      titulo: 'Minecraft',
      genero: 'Sandbox',
      plataforma: 'Multi',
    },
  ];

  // Estado da busca digitada
  const [busca, setBusca] = useState('');

  // Estado da lista filtrada
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  // useEffect

// Executa automaticamente quando a busca muda.

// Ele filtra os jogos
  useEffect(() => {

    const filtrados = jogos.filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    setJogosFiltrados(filtrados);

  }, [busca]);

  return (
    <View style={styles.container}>

      {/* Título da tela */}
      <Text style={styles.titulo}>
        GameVerse
      </Text>

      <Text style={styles.subtitulo}>
        Explore seus jogos favoritos
      </Text>

      {/* Campo de busca */}
      <TextInput
        style={styles.input}
        placeholder="Buscar jogo..."
        placeholderTextColor="#999"
        value={busca}
        onChangeText={setBusca}
      />


{/* FlatList

Usada para renderizar a lista de jogos de forma otimizada. */}
      {/* Lista de jogos */}
      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          // Card clicável
          <TouchableOpacity
            style={styles.card}

            // Navega para detalhes
            onPress={() =>
              navigation.navigate('Detalhe', {
                jogo: item,
              })
            }
          >

            <Text style={styles.nome}>
              {item.titulo}
            </Text>

            <Text style={styles.info}>
              {item.genero}
            </Text>

            <Text style={styles.info}>
              {item.plataforma}
            </Text>

          </TouchableOpacity>
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
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitulo: {
    color: '#aaa',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#6C63FF',
  },

  card: {
    backgroundColor: '#1A1A1A',
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2E2E2E',
  },

  nome: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  info: {
    color: '#aaa',
    marginTop: 4,
  },
});





