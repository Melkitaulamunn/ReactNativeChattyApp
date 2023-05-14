import React from "react"; 
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { colors } from "../config/constants";




const Cell = ({title,icon,style,tintColor,onPress}) => {
    return(
        <TouchableOpacity
                style={[styles.cell,style]}
                onPress={onPress}>
                <View style={[styles.iconContainer ,{backgroundColor:tintColor}]}>
                    <Ionicons
                        name={icon}
                        size={24}
                        color={"white"}
                    />
                </View>
                <Text style={styles.title}>{title}</Text>
                <Ionicons name="chevron-forward-outline" size={20}/>
            </TouchableOpacity>
    )


}
const styles=StyleSheet.create({
    cell: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    flexDirection: "row",
 
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    bordeColor: colors.border



},
title: {
    fontSize: 16,
    marginStart: 16,
    flex:1

},
iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 6,
    marginLeft: 11,
    alignItems:"center",
    justifyContent:"center"
 

}
})


export default Cell