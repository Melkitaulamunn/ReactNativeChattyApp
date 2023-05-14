

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text} from "react-native";
import {Ionicons} from "@expo/vector-icons"
import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import {colors} from "./config/constants"


const App = () => {

  const SettingsStack =  createNativeStackNavigator()

 

  const Tabs = createBottomTabNavigator()

  function MyTabs(){
    return(
      <Tabs.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Chats') {
            iconName = focused
              ? 'chatbubbles'
              : 'chatbubbles-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
          tabBarActiveTintColor: colors.primary
          
      })}
      >
        <Tabs.Screen name='Chats' component={Chats}/>
        <Tabs.Screen name='Settings' component={Settings}/>
      </Tabs.Navigator>
    )
  }


const MainStack= createNativeStackNavigator()
  
  return (
    <NavigationContainer>
      <MainStack.Navigator>
      <MainStack.Screen options={{headerShown:false}} name="MyTabs" component={MyTabs}/>
        </MainStack.Navigator>
     
    </NavigationContainer>
  )
}

export default App;