import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ExercicioView01 from './jsx_examples/exercicios_FlexBox_ViewComponent/exercicio01';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ExercicioView01/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});
