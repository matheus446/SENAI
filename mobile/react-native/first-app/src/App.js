import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ExercicioView10 from './jsx_examples/exercicios_FlexBox_ViewComponent/exercicio10';
import ExercicioView12 from './jsx_examples/somativa01/exercicio01somativa';
import ExercicioView13 from './jsx_examples/somativa01/exercicio02somativa';




export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ExercicioView13/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});
