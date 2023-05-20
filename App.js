

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import { colors } from "./config/constants";
import SignUp from "./screens/SignUp";
import Chat from "./screens/Chat";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import SignIn from "./screens/SignIn";
import { getFirestore,collection } from "firebase/firestore";

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


export const auth = getAuth(app);
export const database=getFirestore(app)












const App = () => {



  const [user,setUser]=useState(false)
  listenAuth()

function listenAuth(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
  console.log(user)
  setUser(true)
      // ...
    } else {
    setUser(false)
    }
  });
}

useEffect(()=>{
  listenAuth()
},[])


   const ChatsScreen = () => {
    const ChatsStack = createNativeStackNavigator();
    return (
      <ChatsStack.Navigator>
  
        <ChatsStack.Screen name="Chats" component={Chats} />
        <ChatsStack.Screen name="Chat" component={Chat} />
      </ChatsStack.Navigator>
    )
  }

  const Loginstack = createNativeStackNavigator()

  function LandingPage() {
    return (
      <Loginstack.Navigator>
            <Loginstack.Screen name="SignIn" component={SignIn} />
        <Loginstack.Screen name="SignUp" component={SignUp} />
    
      </Loginstack.Navigator>
    )
  }





  const Tabs = createBottomTabNavigator()

  function TabsScreen() {
    return (
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
        <Tabs.Screen name='Chats' component={ ChatsScreen} />
        <Tabs.Screen name='Settings' component={Settings} />

      </Tabs.Navigator>
    )
  }


  const MainStack = createNativeStackNavigator()






  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ presentation: 'modal', headerShown: false }} >
        {user == false ? (<MainStack.Screen name="Landing" component={LandingPage} />) : (<MainStack.Screen name="Tabs" component={TabsScreen} />)}

      </MainStack.Navigator>

    </NavigationContainer>
  )
}

export default App;