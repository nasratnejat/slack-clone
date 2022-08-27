import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
function Message({ message, user, userImage, timestamp }) {
	return (
		<MessageContainer>
			<img src={userImage} />

			<MsessageInfo>
				<h4>
					{user}
					<span>{new Date(timestamp?.toDate()).toUTCString()}</span>
				</h4>
				<p>{message}</p>
			</MsessageInfo>
		</MessageContainer>
	)
}

export default Message

const MessageContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
	> img {
		height: 50px;
		border-radius: 110px;
	}
`
const MsessageInfo = styled.div`
	padding-left: 10px;
	h4 > span {
		color: gray;
		font-weight: 600;
		margin-left: 4px;
		font-size: 10px;
	}
`
