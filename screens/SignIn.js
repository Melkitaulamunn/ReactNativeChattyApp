import React,{useState,useEffect} from "react";
import {Text,SafeAreaView,StyleSheet,View,TextInput,TouchableOpacity} from "react-native";
import { colors } from "../config/constants";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../App";
import {  signInWithEmailAndPassword } from "firebase/auth";


const SignIn = () => {


    const [email,setEmail]=useState('Ayse@gmail.com')
    const [password,setPassword]=useState(123456)




  const navigation=useNavigation()

function sign(){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...

    navigation.navigate('Chats')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
useEffect(()=>{ 
sign()

},[])

//   Hasann@gmail.com

  return(
      <View style={styles.container} >
          <SafeAreaView>
              <View style={styles.contentContainer}>
         
                  <Text style={styles.title}>Sign In </Text>
                 
                  <TextInput onChangeText={(text)=>setEmail(text)} style={styles.input} placeholder="Enter your e-mail"/>
                  <TextInput onChangeText={(text)=>setPassword(text)} style={styles.input} placeholder="Enter your password"/>
                  <View style={styles.buttonsContainer}>
                    
                      <Button  onPress={()=> navigation.navigate('SignUp')} title="Sign Up" varient="secondary"/>
                 
                 
                 
                      <Button onPress={()=>{}













                      } title="Sign In" varient="primary" />
                  </View>

              </View>
          
        
        
        
          </SafeAreaView>
      </View>

      
  )



}


const styles= StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: colors.primary

  },
  contentContainer: {
      padding: 16,

  },
  title: { 
      fontSize: 36, 
      color: "white",
      fontWeight: "800"
  },
  input: { 
      backgroundColor: "white",
      fontSize: 15,
      marginTop: 16,
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderRadius: 6,
  },
  buttonsContainer: {
      flexDirection:"row",
      justifyContent: "space-between",
      marginTop:32
  },

  
})


export default SignIn

