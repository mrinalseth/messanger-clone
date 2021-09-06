import { Button, Input, FormControl, FormLabel } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import Message from './components/Message'
import db from './firebase' 
import firebase from 'firebase/compat'

function App() {

  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt('enter ur username'))
  }, [])
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snap) => {
      setMessages(snap.docs.map((doc) => {
          return (doc.data())
      }))
    })
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    db.collection('messages').add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div>
      <h1>Hello there</h1>
      <form>
        <FormControl>
          <FormLabel>Enter a message</FormLabel>
          <Input
          value = {input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button disabled={!input} type='submit' onClick={sendMessage} variant='outlined' color='primary'>Send!</Button>
        </FormControl>
      </form>
      {messages.map((msg) => {
        return (
          <Message
            username={username}
            message={msg}
          />
        )
      })}
    </div>
  );
}

export default App;
