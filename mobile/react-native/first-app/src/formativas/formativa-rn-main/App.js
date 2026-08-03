import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
      {/* TODO: envolver com NavigationContainer */}
      {/* TODO: chamar o componente AppNavigator */}
    </SafeAreaProvider>
  );
}
