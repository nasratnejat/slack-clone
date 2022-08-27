import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Login from './components/Login'
import Spinner from 'react-spinkit'
function App() {
	const [user, loading] = useAuthState(auth)

	if (loading) {
		return (
			<AppLoading>
				<AppLoadingContents>
					<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.odrive.com%2Fimages%2Flinks%2Flogos%2Fslack.png&f=1&nofb=1'></img>
					<Spinner name='ball-spin-fade-loader' color='green' fadeIn='none' />
				</AppLoadingContents>
			</AppLoading>
		)
	}
	return (
		<div className='App'>
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<AppBody>
							<Sidebar />
							<Switch>
								<Route path='/' exact>
									<Chat />
								</Route>
							</Switch>
						</AppBody>
					</>
				)}
			</Router>
		</div>
	)
}

export default App

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`
const AppLoading = styled.div`
	display: grid;
	place-content: center;
	height: 100vh;
	width: 100%;
`
const AppLoadingContents = styled.div`
	text-align: center;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	> img {
		height: 160px;
		padding: 20px;
		margin-bottom: 40px;
	}
`
