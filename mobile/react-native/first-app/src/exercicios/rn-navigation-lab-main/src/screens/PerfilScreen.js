import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>
        Matheus Andrade
      </Text>

      <Text style={styles.info}>
        Gamer • Desenvolvedor Mobile
      </Text>

      <Text style={styles.bio}>
        Apaixonado por tecnologia, jogos e criação
        de aplicativos com React Native.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  nome: {
    color: '#8B5CF6',
    fontSize: 32,
    fontWeight: 'bold',
  },

  info: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },

  bio: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
  },
});