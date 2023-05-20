import React,{useState} from "react";
import {Text,SafeAreaView,StyleSheet,View,TextInput,TouchableOpacity} from "react-native";
import { colors } from "../config/constants";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import {  createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { auth } from "../App";
const SignUp = () =>{

    const navigation=useNavigation()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [ user , setUser] = useState(false)






    return(
        <View style={styles.container} >
            <SafeAreaView>
                <View style={styles.contentContainer}>
           
                    <Text style={styles.title}>Create New Account</Text>
                    <TextInput style={styles.input} placeholder="Enter your name"/>
                    <TextInput onChangeText={(text)=>setEmail(text)} style={styles.input} placeholder="Enter your e-mail"/>
                    <TextInput onChangeText={(text)=>setPassword(text)} style={styles.input} placeholder="Enter your password"/>
                    <View style={styles.buttonsContainer}>
                        <Button onPress={()=> navigation.navigate('SignIn')}  title="Sign In" varient="secondary" />
                        <Button onPress={()=>{
        

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });















                        }} title="Sign Up" varient="primary"/>
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

export default SignUp