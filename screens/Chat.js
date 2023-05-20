import React, { useState, useCallback, useEffect,useLayoutEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { database } from '../App';
import {set,onSnapshot,orderBy,query, doc, setDoc ,addDoc, collection,updateDoc,arrayUnion} from "firebase/firestore";
import { View } from 'react-native';

const Chat = ({route}) => {
  const [messages, setMessages] = useState([]);
  //console.log(route)
//Hasann@gmail.com




const onSend = (m = []) => {
  const chatId = route.params.chatId; // Assuming `route.params.chatId` is defined elsewhere
 
console.log(m)
  set(doc(database, "chats", chatId), {
    messages: m.text,
  }, { merge: true });
};



return (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    <GiftedChat
     
     messages={messages.map((x) => ({
      ...x,
      createdAt: x.createdAt?.toDate(),
    }))}
    onSend={(messages) => onSend(messages)}
   
    />
  </View>
);
}

export default Chat