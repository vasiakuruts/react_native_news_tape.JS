import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "../../pages/main/Main";
import ContactPage from "../../pages/contact/Contact";
import FullInfoPage from "../../pages/full-info/FullInfo";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
                options={{ title: "Головна" }}
              />
              <Tab.Screen
                name="Contact"
                component={ContactPage}
                options={{ title: "Контакти" }}
              />
              <Tab.Screen
                name="FullInfo"
                component={FullInfoPage}
                options={{ title: "Стаття" }}
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
