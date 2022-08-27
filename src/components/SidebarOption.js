import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { enterRoom } from '../features/appSlice'

function SidebarOption({ Icon, title, addChannelOption, id }) {
	const dispatch = useDispatch()
	const addChanel = () => {
		const ChannelName = prompt('Please Enter The Channe Name')
		if (ChannelName) {
			const docref = addDoc(collection(db, 'rooms'), { name: ChannelName })
		}
	}
	const selectChannel = () => {
		if (id) {
			dispatch(enterRoom({ roomId: id }))
		}
	}
	return (
		<SidebarOptionContainer
			onClick={addChannelOption ? addChanel : selectChannel}>
			{Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
			{Icon ? (
				<h3>{title}</h3>
			) : (
				<SidebarOptionChannel>
					<span>#</span>
					{title}
				</SidebarOptionChannel>
			)}
		</SidebarOptionContainer>
	)
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
	display: flex;
	font-size: 12px;
	align-items: center;
	padding-left: 2px;
	cursor: pointer;
	:hover {
		opacity: 0.9;
		background-color: #04231e;
	}
	> h3 {
		font-weight: 500;
	}
	> h3 > span {
		padding: 15px;
	}
`
const SidebarOptionChannel = styled.h3`
	padding: 10px;
	font-weight: 300;
`
