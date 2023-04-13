import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Chatbot = () => {
	return (
		<React.Fragment>
			<Pdiv>
				<div className="chatbot">
					<div className="div1">
						<iframe
							allow="microphone;"
							width="350"
							height="430"
							src="https://console.dialogflow.com/api-client/demo/embedded/2b7fd569-84a2-4e97-87f0-4d9f4eca8ad9"
						/>
					</div>
					<div className="div1">
						<iframe
							allow="microphone;"
							width="350"
							height="430"
							src="https://console.dialogflow.com/api-client/demo/embedded/a324ed43-ccf4-4c38-9d54-0df7fc1f43c3"
						/>
					</div>
				</div>
			</Pdiv>
		</React.Fragment>
	);
};

export default Chatbot;

const Pdiv = styled.div`
	padding: 50px 180px 80px 180px;
	.chatbot {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.div1 {
		border: 2px solid black;
	}
`;
