import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation";

export default function App(HomeScreen) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <AppNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
