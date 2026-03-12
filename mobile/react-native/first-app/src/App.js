import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo01 from './jsx_examples/exemplo-01-estrutura';
import Exemplo02 from './jsx_examples/exemplo-02-expressoes';
import Exemplo03 from './jsx_examples/exemplo-03-condicionais';
import Exemplo04 from './jsx_examples/exemplo-04-listas';
import Lista01 from './jsx_examples/lista-01';
import Lista02 from './jsx_examples/lista-02';
import Lista03 from './jsx_examples/lista-03';
import ViewExemplo from './basic_components/view_exemples01';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewExemplo/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
