import React from "react";
import {Text,SafeAreaView,StyleSheet,View,TextInput,TouchableOpacity} from "react-native";
import { colors } from "../config/constants";
import Button from "../components/Button";


const SignUp = () =>{

    return(
        <View style={styles.container} >
            <SafeAreaView>
                <View style={styles.contentContainer}>
           
                    <Text style={styles.title}>Create New Account</Text>
                    <TextInput style={styles.input} placeholder="Enter your name"/>
                    <TextInput style={styles.input} placeholder="Enter your e-mail"/>
                    <TextInput style={styles.input} placeholder="Enter your password"/>
                    <View style={styles.buttonsContainer}>
                        <Button title="Sign In" varient="secondary"/>
                        <Button title="Sign Up" varient="primary"/>
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