import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { auth, provider } from '../firebase'

function Login() {
	const signIn = (e) => {
		e.preventDefault()
		auth.signInWithPopup(provider).catch((error) => alert(error.message))
	}
	return (
		<LoginContainer>
			<LoginInnerContainer>
				<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.odrive.com%2Fimages%2Flinks%2Flogos%2Fslack.png&f=1&nofb=1'></img>
				<h3>Sign Into Our Slack!</h3>
				<Button type='submit' onClick={signIn}>
					Sign In with Google
				</Button>
				<p>Made with❤️by Nasrat Nejat</p>
			</LoginInnerContainer>
		</LoginContainer>
	)
}

export default Login

const LoginContainer = styled.div`
	background-color: #0c6153;
	height: 100vh;
	display: grid;
	place-items: center;
`
const LoginInnerContainer = styled.div`
	padding: 100px;
	text-align: center;
	border-radius: 20px;
	background-color: #eee7ce;
	box-shadow: #201f1b 0px 20px 30px -10px;
	> img {
		object-fit: contain;
		height: 100px;
		margin-bottom: 10px;
	}
	> button {
		margin-top: 30px;
		margin-bottom: 20px;
		text-transform: inherit !important ;
		background-color: #0c6153 !important;
		color: #eee7ce;
	}
	> p {
		margin-top: 10px;
	}
`
