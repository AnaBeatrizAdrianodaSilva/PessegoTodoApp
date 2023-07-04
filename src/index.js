import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import EditarTaskScreen from "./components/EditarTaskScreen";
import EditTask from "./components/EditarTaskScreen";
import Task from "./components/Task";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tabs = createMaterialBottomTabNavigator();


export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen component={MyStack} name="Home" options={{ headerShown: false, tabBarLabel: "Home" }} />
        <Tabs.Screen
          name="AddTaskScreen"
          component={AddTaskScreen}
          options={{ headerShown: false, tabBarLabel: "Adicionar Task" }}
        />
        
      </Tabs.Navigator>
    </NavigationContainer>
    
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="EditTask" component={EditTask} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
}