// Componente reutilizável para mostrar informações de um jogo.

// Recebe props:

// titulo
// genero
// plataforma
// nota

// Isso evita repetir código várias vezes.


import { View, Text, StyleSheet } from 'react-native';

export default function CardJogo({
  titulo,
  genero,
  plataforma,
  nota,
}) {
  return (

    // Card individual do jogo
    <View style={styles.card}>

      {/* Nome do jogo */}
      <Text style={styles.titulo}>
        {titulo}
      </Text>

      {/* Informações do jogo */}
      <Text style={styles.texto}>
        Gênero: {genero}
      </Text>

      <Text style={styles.texto}>
        Plataforma: {plataforma}
      </Text>

      {/* Nota do jogo */}
      <Text style={styles.nota}>
        ⭐ Nota: {nota}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#6C63FF',
  },

  titulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  texto: {
    color: '#ccc',
    fontSize: 15,
    marginBottom: 4,
  },

  nota: {
    color: '#00E5FF',
    fontWeight: 'bold',
    marginTop: 8,
  },
});



