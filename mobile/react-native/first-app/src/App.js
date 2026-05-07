// ============================================
// AULA:
// ============================================
// SCAFFOLD - Arquivo base para a aula
// Os alunos recebem este arquivo ANTES da aula
// ============================================

import { View, Text, StyleSheet } from "react-native";
import FlatListExemplo from "./jsx_examples/exemplos/formularios_listas/flatList/flatList";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListExemplo/>
    </View>
  );
}