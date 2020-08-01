import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Farmacias from "./pages/Farmacias";
import Plantoes from "./pages/Plantoes";
import Plantao from "./pages/Plantao";
//import SignIn from "./pages/SignIn";
//import SignUp from "./pages/SignUp";

const Tab = createBottomTabNavigator();
//const Auth = createStackNavigator();
/*
const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      //headerTintColor: '#fff',
      //headerStyle: { backgroundColor: '#7159c1'},
      cardStyle: { backgroundColor: "#312e38" },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);
export default AuthRoutes;
*/
export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Plantão"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="notifications-active"
                size={24}
                color={color}
              />
            ),
          }}
          component={Plantao}
        />
        <Tab.Screen
          name="Plantoes"
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="notification" size={20} color={color} />
            ),
          }}
          component={Plantoes}
        />
        <Tab.Screen
          name="Farmacias"
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="pharmacy" size={24} color={color} />
            ),
          }}
          component={Farmacias}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
