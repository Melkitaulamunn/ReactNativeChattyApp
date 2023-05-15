

import React, { useState,useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text} from "react-native";
import {Ionicons} from "@expo/vector-icons"
import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import {colors} from "./config/constants";
import SignUp from "./screens/SignUp";
import Chat from "./screens/Chat";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeKCX8zhTHflzpHN8hPEK1xURO5dFISBg",
  authDomain: "chatty-f52e3.firebaseapp.com",
  projectId: "chatty-f52e3",
  storageBucket: "chatty-f52e3.appspot.com",
  messagingSenderId: "1032816079765",
  appId: "1:1032816079765:web:c43bc506e1c0d5b7fe7c9c",
  measurementId: "G-8CZZ63B73R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




const ChatsStack = createNativeStackNavigator();
  

const SettingsStack = createNativeStackNavigator()
  


const App = () => {
const [ user , setUser] = useState(false)

const auth = getAuth(app);

// ...

// Check if a user is already authenticated
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in");
    setUser(true); // Set the user state to true

    // Perform necessary actions
  } else {
    // No user is signed in
    setUser(false); 
    console.log("No user is signed in");
    // Perform necessary actions
  }
});





  const SettingsStack =  createNativeStackNavigator()

 

  const Tabs = createBottomTabNavigator()

  function TabsScreen(){
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
      <MainStack.Navigator screenOptions={{ presentation: 'modal', headerShown:false}} >
          {user==false ? (<MainStack.Screen  name="SignUp" component={SignUp}/>):(<MainStack.Screen  name="Tabs" component={TabsScreen}/>)}
 
        </MainStack.Navigator>
     
    </NavigationContainer>
  )
}

export default App;