// Responsável pelas abas inferiores do aplicativo.

// Ele cria:

// Aba Jogos
// Aba Lista
// Aba Perfil
// Componentes:
// createBottomTabNavigator() → cria a navegação por abas
// Tab.Navigator → controla as abas
// Tab.Screen → registra cada aba

// Também define:

// Cor das abas
// Tema escuro
// Cor da aba ativa

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigator from './StackNavigator';
import ListaScreen from '../screens/ListaScreen';
import PerfilScreen from '../screens/PerfilScreen';

// Cria o Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (

    // Navegação por abas
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: '#6C63FF',
          height: 65,
        },

        tabBarActiveTintColor: '#8B5CF6',
        tabBarInactiveTintColor: '#999',
      }}
    >

      {/* Aba Jogos */}
      <Tab.Screen
        name="Jogos"
        component={StackNavigator}
      />

      {/* Aba Lista */}
      <Tab.Screen
        name="Lista"
        component={ListaScreen}
      />

      {/* Aba Perfil */}
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
      />

    </Tab.Navigator>
  );
}

