import React,{useEffect,useState} from "react";
import { View, SafeAreaView, StyleSheet ,TouchableOpacity,Alert} from "react-native";
import ContactRow from "../components/ContactRow";
import Separator from "../components/Separator";
import { addDoc } from 'firebase/firestore';
import { auth } from "../App";
import {Ionicons} from "@expo/vector-icons";
import{ colors}  from "../config/constants";

import { collection } from "firebase/firestore";

import { database } from "../App";
import { useNavigation } from "@react-navigation/native";


const Chats = () => {

    const navigation=useNavigation()

const [chats,setChats]=useState([])
    // useEffect(() => {
    //     firebase.auth(),onAuthStateChanged((user)=>{ firebase.firestore().collection("chats")
    //     .where("users" , "array-contains", user.email)
    //     .onSnapshot((snapshot)=>{
    //         setChats(snapshot.docs)});
            
    //     });
       
    //     },[])
 const handleFABPress=()=>{
    Alert.prompt("Email","Enter user email",(email)=>{
        const chatsCollectionRef = collection(database, 'chats');
       
        addDoc(chatsCollectionRef, {
            users: [auth?.currentUser?.email, email],
            messages: []
          }).then((doc)=>{
            navigation.navigate("Chat",{id: doc.id})

        })
    })

}
   
    return (
        <SafeAreaView style={styles.container}>
            {chats.map(chat => (
                <React.Fragment key={chat.id}>
                     <ContactRow

                      name={chat.data(0).users.find( (x) => x !== firebase.auth()?.currentUser?.email)}
                        subtitle= {chat.data().messages.length === 0 ? "No Messages Yet" : chat.data().messages[0].text }
                        onPress={() => {
                        navigation.navigate("Chat",{id :chat.id});
                        }} />
            <Separator/>

                </React.Fragment>
            ))

            }
            <TouchableOpacity style={styles.fab} onPress={handleFABPress}>
                <View style={styles.fabContainer}>
                <Ionicons name="add" size={24} color="white"/>
                </View>
            </TouchableOpacity>

          
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    fab:{
        position:"absolute",
        bottom:16,
        right:16,
        borderRadius:50,
        backgroundColor:colors.primary


    },

    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#E2E2E2",
        marginStart: 88

    },
    fabContainer:{
        width:56,
        height:56,
        backgroundColor:'Red',
        borderRadius:28,
        justifyContent:'center',
        alignItems:'center',
        
    }




})
export default Chats;

