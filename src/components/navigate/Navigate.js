import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MainPage from "../../pages/main/Main";
import ContactPage from "../../pages/contact/Contact";
import FullInfoPage from "../../pages/full-info/FullInfo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Головна"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home">
          {() => (
            <Tab.Navigator
              initialRouteName="Головна"
              tabBar={() => null}
              screenOptions={{ headerShown: true }}
            >
              <Tab.Screen
                name="Main"
                component={MainPage}
                options={{
                  title: "Головна",
                  headerStyle: {
                    backgroundColor: "#ed5d3d",
                    height: 50,
                  },
                  headerTitleStyle: {
                    fontWeight: "light",
                  },
                  tabBarLabel: "Головна",
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Contact"
                component={ContactPage}
                options={{
                  title: "Контакти",
                  tabBarLabel: "Контакти",
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="phone"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="FullInfo"
                component={FullInfoPage}
                options={{
                  title: "Стаття",
                  tabBarLabel: "Стаття",
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons
                      name="plus"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>

        <Stack.Screen name="Settings" component={ContactPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigate;
{
  /* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{ title: "Головна" }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactPage}
          options={{ title: "Контакти" }}
        />
      </Stack.Navigator>
    </NavigationContainer> */
}
