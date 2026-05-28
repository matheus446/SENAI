// ============================================
// AULA:
// ============================================
// SCAFFOLD - Arquivo base para a aula
// Os alunos recebem este arquivo ANTES da aula
// ============================================

import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./jsx_examples/navigation/exemplos/drawar_navigator";

export default function App() {
  return (
    <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
  
  );
}