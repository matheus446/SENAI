import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Importa o navegador principal do app
import AppNavigator from './src/navigation';

export default function App() {
  return (
    // Evita problemas com barra de status/notch
    <SafeAreaProvider>

      {/* Controla toda a navegação */}
      <NavigationContainer>

        {/* Renderiza as telas */}
        <AppNavigator />

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// Esse arquivo é o ponto principal do aplicativo.

// SafeAreaProvider evita problemas com notch e barra de status do celular.
// NavigationContainer controla toda a navegação do app.
// AppNavigator carrega os navegadores e telas.