import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ExercicioView06 from './jsx_examples/exercicios_FlexBox_ViewComponent/exercicio06.js';
import ExercicioView07 from './jsx_examples/exercicios_FlexBox_ViewComponent/exercicio07.js';
import ExercicioView08 from './jsx_examples/exercicios_FlexBox_ViewComponent/exercicio08.js';
import ExercicioView09 from './jsx_examples/exercicios_FlexBox_ViewComponent/exercicio09.js';
import ExercicioView10 from './jsx_examples/exercicios_FlexBox_ViewComponent/exercicio10.js';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ExercicioView10/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});
