import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { database } from '../App';
import { doc, setDoc } from "firebase/firestore";


const Chat = ({route}) => {
  const [messages, setMessages] = useState([]);
  console.log(route)

  // useEffect(() => {
  //   firebase.firestore
  //   .doc("chats/"+route.params.id)Hasan@gmail.com
  //   .onSnapshot(doc=>{
  //     setMessages(doc.data().messages.map((message) => ({
  //       ...message,
  //       createdAt: message.createdAt.toDate()
  //     })))
  //   }) {  messages:GiftedChat.append(messages,m)},{merge:true}
    
  // }, [route.params.id])

  // const onSend = useCallback((messages = []) => {
    setDoc(doc(db, "chats", route.params.id), { /* data to be set */ });
  //  }, [route.params.id,messages])

  const onSend = useCallback((messages = []) => {
    const chatRef = doc(database, "chats", route.params.id);
    const updatedMessages = append(messages);
  
    updateDoc(chatRef, {
      messages: updatedMessages
    }, { merge: true });
  }, [route.params.id,  messages]);


  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default Chat