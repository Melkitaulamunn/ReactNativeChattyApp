import React,{useEffect} from "react";
import { View, SafeAreaView, StyleSheet ,Text} from "react-native";
import ContactRow from "../components/ContactRow";

const Chats = ({navigation}) => {
   
    return (
        <SafeAreaView>
           <ContactRow
                name="Ayşe Albayrak"
                subtitle="React Native Course"
                onPress={() => {
                    alert("OLa ! Ayşe ALBAYRAK touched")
                }} />

            <ContactRow
                name="Nesrin Demir"
                subtitle="Rehberlik Terapi"
                onPress={() => {
                    alert("OLa ! Nesrin DEMİR touched")
                }} />
            <View style={styles.separator} />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: "#E2E2E2",
        marginStart: 88

    }



})
export default Chats;