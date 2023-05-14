import React from "react";
import {Text,SafeAreaView,StyleSheet,View,TextInput,TouchableOpacity} from "react-native";
import { colors } from "../config/constants";


const SignUp = () =>{

    return(
        <View style={styles.container} >
            <SafeAreaView>
                <View styles={styles.contentContainer}>
           
                    <Text>Create New Account</Text>
                    <TextInput styles={styles.input} placeholder="Enter your name"/>
                    <TextInput styles={styles.input} placeholder="Enter your e-mail"/>
                    <TextInput styles={styles.input} placeholder="Enter your password"/>
                    <View styles={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonLabel}>Sign In </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonLabel}>Sign UP</Text>
                        </TouchableOpacity>
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
        fontWeight: 16
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
        flexirection: "row",
        justifyContent: "space-between",
        marginTop:32
    },

    buttonLabel:{
        color:"white",
        fontsize:18
    },
    buttonContainer: {
    backgroundColor: "black",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
}

})

export default SignUp