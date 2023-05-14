import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ContactRow from "../components/ContactRow";
import Separator from "../components/Separator";
import { colors } from "../config/constants";
import Cell from "../components/Cell"



const Settings = () => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <ContactRow
                name="Melkitaulamun"
                subtitle="me@melkita.com"
                style={styles.contactRow}


            />
            <Cell
            title="Logout"
            icon="log-out-outline"
            tintColor={colors.red}
            onPress={() => {
                alert("Don't touch me again")
            }} 
            />

        <Cell
            title="Help"
            icon="information-outline"
            tintColor={colors.green}
            onPress={() => {
                alert("Don't touch me again")
            }}
            style={{marginTop:20}}
            />

             <Cell
            title="Tell a Friend"
            icon="heart-outline"
            tintColor={colors.pink}
            onPress={() => {
                alert("Don't touch me again")
            }}
            />


            <Separator />
            

        </View>
    )

}

const styles = StyleSheet.create({
    contactRow: {
        backgroundColor: "white",
        marginTop: 16,
        borderTopWidth: StyleSheet.hairlineWidth,
        bordeColor: colors.border
    }
   
})
export default Settings;