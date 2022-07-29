import styled from 'styled-components';

export const Mynav = styled.div `
	display: flex;
	justify-content: space-between;
	padding: 10px 30px;
	position: relative;

	top: 20px;
	z-index: 99;

	& .navdiv {
		margin-right: 90%;
	}

	@media (max-width: 500px) {
		padding: 5px;
		padding-top: 20px;
	}
`;
export const S2div = styled.div `
	padding: 40px 0px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 751px) {
		flex-direction: column-reverse;
		padding: 30px 20px;
	}

	& .s2textDiv {
		margin-left: 50px;
		margin-right: 50px;
		padding: 40px 0px;

		@media (max-width: 751px) {
			overflow: hidden;
			margin-left: 0px;
			margin-right: 0px;
			text-align: center;
			padding: 20px 20px;
		}
	}
	& .s2textDiv2 {
		margin-left: 50px;
		margin-right: 50px;
		padding: 40px 0px;

		@media (max-width: 751px) {
			margin-left: 0px;
			margin-right: 0px;
			text-align: left;
			padding: 20px 20px;
		}
	}

	& .Cols2textDiv {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const S5div = styled.div `
	& .s5i {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .s5c {
		display: flex;
		padding: 40px;
	}
	& .s5t {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: right;
		margin-bottom: 30px;

		& .s5H1 {
			font-size: 46px;
			margin-bottom: 30px;
		}
		& .s5P1 {
			font-size: 26px;
			margin-bottom: 30px;
		}
	}
	& .underline {
		min-width: 180%;

		background: linear-gradient(to right, #35683e, #e7f5e6);

		height: 2px;
		margin-top: 20px;
		border: none;
	}
	@media (max-width: 751px) {
		& .s5c {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		& .s5t {
			margin-right: 0px;
		}
		margin-left: 0px;
		margin-right: 0px;
		text-align: center;
	}
`;

export const Wrapper7 = styled.div `
	margin: 0px 35px;
	& .div7 {
		color: white !important;

		padding: 40px 0px;
		max-width: 300px;
	}

	@media (max-width: 751px) {
		margin: 0px 0px;
		& .div7 {
			padding: 20px 0px;
		}

		& .row7 {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const Wrapper11 = styled.div `
	padding: 35px 0px;
	max-height: 350px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 751px) {
		flex-direction: column-reverse;
		max-height: 1000px;
		padding-bottom: 0px;
		& .img11 {
			margin-bottom: 0px !important;
		}
	}

	& .s2textDiv {
		margin-left: 50px;
		margin-right: 50px;
		padding: 40px 0px;

		@media (max-width: 751px) {
			margin-left: 0px;
			margin-right: 0px;
			text-align: center;
			padding: 20px 20px;
		}
	}
	& .s2textDiv2 {
		margin-left: 50px;
		margin-right: 50px;
		padding: 40px 0px;

		@media (max-width: 751px) {
			margin-left: 0px;
			margin-right: 0px;
			text-align: left;
			padding: 20px 20px;
		}
	}

	& .Cols2textDiv {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Wrapper8 = styled.div `
	backgroundcolor: blue;

	display: flex;
	align-items: center;
	flex-direction: column;

	justify-content: center;

	& .header8 {
		text-align: center;
	}

	& .col8 {
		max-width: 400px;
		margin-left: 50px;
	}

	& .col82 {
		margin-left: 100px;
	}

	& .col8i {
		min-width: 400px;
	}
	& .row8 {
		display: flex;
		align-items: center;
		padding: 20px;
	}
	& .img2 {
		height: 600px;
		position: relative;
		bottom: 150px;
	}

	@media (max-width: 1040px) {
		& .img2 {
			height: 500px;
			bottom: 50px;
		}
		& .col8 {
			max-width: 500px;
			width: 100% !important;
			margin-left: 0px;
		}

		& .row8 {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 0px;
		}

		& .col82 {
			margin-left: 0px;
		}
	}

	@media (max-width: 500px) {
		& .img2 {
			height: 300px;
		}
		& .row8 {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		& .col8 {
			max-width: 300px;
		}
	}
`;

export const PreBookButton = styled.button `
	background-color: #425c56;
	border-color: #425c56;
	padding: 5px 15px;
	color: white;
	border: none;
	border-radius: 5px;

	&: hover {
		background-color: #35683e !important;
		border-color: #35683e;
	}

	&:focus {
		outline: none;
		box-shadow: none;
		shadow: none;
	}
`;

export const H1 = styled.p `
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 46px;
	/* or 128% */

	/* primary */

	color: #425c56;

	@media (max-width: 500px) {
		font-size: 20px;
		line-height: 26px;
	}
`;

export const P1 = styled.p `
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 26px;
	/* or 162% */

	/* primary */

	color: #425c56;
	@media (max-width: 500px) {
		font-size: 12px;
		line-height: 20px;
	}
`;

export const P2 = styled.p `
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 36px;
	/* or 162% */

	/* primary */

	color: #425c56;
	@media (max-width: 500px) {
		font-size: 12px;
		line-height: 20px;
	}

	margin-bottom: 15px;
`;