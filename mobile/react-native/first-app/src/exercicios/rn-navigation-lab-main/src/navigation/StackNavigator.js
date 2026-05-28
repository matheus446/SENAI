// Responsável pela navegação em pilha (Stack Navigation).

// Ele controla:

// HomeScreen
// DetalheScreen

// Quando o usuário clica em um jogo na Home, ele “empilha” a tela de detalhes em cima da atual.

// Componentes principais:
// createNativeStackNavigator() → cria o sistema de pilha
// Stack.Navigator → área que controla as telas
// Stack.Screen → registra cada tela

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetalheScreen from '../screens/DetalheScreen';

// Cria o Stack Navigator
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (

    // Navigator da navegação em pilha
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: '#fff',
      }}
    >

      {/* Tela principal */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Games' }}
      />

      {/* Tela de detalhes */}
      <Stack.Screen
        name="Detalhe"
        component={DetalheScreen}
        options={{ title: 'Detalhes do Jogo' }}
      />

    </Stack.Navigator>
  );
}

