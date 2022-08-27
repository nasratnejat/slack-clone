import { Button } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { auth, db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'

function ChatInput({ channelName, channelId, chatRef }) {
	const [input, setInput] = useState('')
	const [user] = useAuthState(auth)

	const sendMessage = (e) => {
		e.preventDefault()
		if (!channelId) {
			return false
		}
		const collRef = collection(db, `rooms/${channelId}/messages`)
		addDoc(collRef, {
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: user.displayName,
			userImage: user.photoURL,
		})
		chatRef.current.scrollIntoView({ behavior: 'smooth' })
		setInput('')
	}

	return (
		<ChatInputContainer>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={`Message #${channelName}`}
				/>
				<Button hidden='true' type='submit' onClick={sendMessage}>
					Send
				</Button>
			</form>
		</ChatInputContainer>
	)
}

export default ChatInput

const ChatInputContainer = styled.div`
	border-radius: 20px;
	> form {
		position: relative;
		display: flex;
		justify-content: center;
	}
	> form > input {
		position: fixed;
		bottom: 30px;
		width: 60%;
		border: 1px solid var(--slack-color);
		border-radius: 10px;
		padding: 20px;
		outline: none;
	}
	> form > button {
		display: none !important ;
	}
`
