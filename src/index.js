import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import EditTask from "./screens/EditarTaskScreen";
import Task from "./components/Task";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tabs = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        activeColor="white"
        barStyle={{
          backgroundColor: "#3A0166",
        }}
      >
        <Tabs.Screen
          component={MyStack}
          name="Home"
          options={{
            tabBarColor: "#000",
            headerShown: false,
            tabBarLabel: "Home",
          }}
        />
        <Tabs.Screen
          name="AddTaskScreen"
          component={AddTaskScreen}
          options={{
            tabBarColor: "#000",
            headerShown: false,
            tabBarLabel: "Adicionar Task",
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={
        { 
          headerStyle: { backgroundColor: "#3A0166" },
          headerTitleStyle: { color: 'white' },
          headerTintColor: { color: 'white' }
        }
      }
    >
      <Stack.Screen  name="HomeScreen" component={HomeScreen} ScreenOptions={ {headerTintColor: {color: 'white'}} } />
      <Stack.Screen name="EditTask" component={EditTask}  />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
}
