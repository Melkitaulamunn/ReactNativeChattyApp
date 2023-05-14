import React from "react";
import { View, StyleSheet,TouchableOpacity} from "react-native";
import ContactRow from "../components/ContactRow";
import Separator from "../components/Separator";
import {colors} from "../config/constants";

import Icon from "@expo/vector-icons/Ionicons";
const Settings = () =>{
    return (
        <View>
            <ContactRow
                name="Melkitaulamun"
                subtitle="me@melkita.com"
                style={styles.contactRow}
            />
            <Separator/>
            <TouchableOpacity
            style={styles.cell}
             onPress={()=>{
                alert("hi ,you touched me")
            }}>
                <View style={styles.iconContainer}>
                    <Icon
                    name="log-out-outline"
                    size={24}
                    color={"red"}
                    />
                </View>
                <Text style={styles.title}>Logout</Text>
            </TouchableOpacity>

        </View>
    )
    
}

const styles= StyleSheet.create({
    contactRow: {
        backgroundColor:"white",
        marginTop: 16,
        borderTopWidth:StyleSheet.hairlineWidth,
        bordeColor:colors.border
    },
    cell:{
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor:"white",
        filexDirection:"row",
        alignItems:"center"


        
    },
    title:{
        fontSize:16,
        marginStart:16

    },
    iconContainer:{
        width:32,
        height:32,
        backgroundColor:"red",
        borderRadius:6

    }

})
export default  Settings;