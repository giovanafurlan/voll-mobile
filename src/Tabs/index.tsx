import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851",
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#FFF",
};

const tabs = [
  {
    name: "Principal",
    componente: Principal,
    icon: "home",
  },
  {
    name: "Consultas",
    componente: Consultas,
    icon: "calendar",
  },
  {
    name: "Explorar",
    componente: Explorar,
    icon: "search",
  },
  {
    name: "Perfil",
    componente: Perfil,
    icon: "person",
  },
];

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.componente}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
