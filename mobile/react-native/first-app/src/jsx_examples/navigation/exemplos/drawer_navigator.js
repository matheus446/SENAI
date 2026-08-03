import { createDrawerNavigator } from "@react-navigation/drawer";
import PerfilScreen from "../screens/PerfilScreen";
import HomeScreen from "../screens/HomeScreen";
import ConfigScreen from "../screens/ConfigScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Perfil" component={PerfilScreen} />
      <Drawer.Screen name="config" component={ConfigScreen} />
    </Drawer.Navigator>
  );
}
