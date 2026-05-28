// DetalheScreen.js

// Mostra os detalhes do jogo clicado.

// Recebe os dados usando:

// route.params




import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function DetalheScreen({ route }) {

  // Recebe os dados enviados pela navegação
  const { jogo } = route.params;

  // Estado para salvar o jogo
  const [salvo, setSalvo] = useState(false);

  return (
    <View style={styles.container}>

      {/* Nome do jogo */}
      <Text style={styles.titulo}>
        {jogo.titulo}
      </Text>

      {/* Informações */}
      <Text style={styles.info}>
        🎮 Gênero: {jogo.genero}
      </Text>

      <Text style={styles.info}>
        🕹 Plataforma: {jogo.plataforma}
      </Text>

      {/* Descrição */}
      <Text style={styles.descricao}>
        Um dos jogos mais populares da atualidade,
        conhecido por sua gameplay incrível e visual moderno.
      </Text>

      {/* Botão de salvar */}
      {/* TouchableOpacity

Cria o botão clicável.
O botão muda:

Texto
Cor
Estado */}
      <TouchableOpacity
        style={[
          styles.botao,
          salvo && styles.botaoSalvo,
        ]}

        // Alterna o estado
        onPress={() => setSalvo((valorAtual) => !valorAtual)}
      >

        <Text style={styles.textoBotao}>
          {salvo ? 'Salvo na Biblioteca' : 'Salvar Jogo'}
        </Text>

      </TouchableOpacity>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  info: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },

  descricao: {
    color: '#aaa',
    marginTop: 20,
    lineHeight: 24,
  },

  botao: {
    backgroundColor: '#6C63FF',
    padding: 16,
    borderRadius: 14,
    marginTop: 30,
    alignItems: 'center',
  },

  botaoSalvo: {
    backgroundColor: '#00C853',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});