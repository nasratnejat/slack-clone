import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import { AccessTime } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
function Header() {
	const [user] = useAuthState(auth)

	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar
					onClick={() => auth.signOut()}
					src={user?.photoURL}
					alt={user?.displayName}
				/>
				<AccessTime />
			</HeaderLeft>
			<HeaderSearch>
				<SearchIcon />
				<input placeholder='Search' />
			</HeaderSearch>
			<HeaderRight>
				<HelpOutlineIcon />
			</HeaderRight>
		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	background-color: var(--slack-color);
	color: #eee7ce;
`
const HeaderLeft = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	margin-left: 20px;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 30px;
	}
`
const HeaderAvatar = styled(Avatar)`
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`
const HeaderSearch = styled.div`
	flex: 0.4;
	opacity: 1;
	border-radius: 6px;
	background-color: #eee7ce;
	text-align: center;
	display: flex;
	padding: 0 50px;
	color: gray;
	border: 1px gray solid;

	> input {
		background-color: transparent;
		border: none;
		text-align: center;
		min-width: 30vw;
		outline: none;
		color: #064439;
	}
`
const HeaderRight = styled.div`
	flex: 0.3;
	display: flex;
	align-items: flex-end;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 20px;
	}
`
