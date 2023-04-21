import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyFilter from '../Components/util/filter';
import MyInbox from '../Components/util/inbox';
import { useEffect, useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

function MyNavbar() {
	const navigate = useNavigate();
	const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
	const [ isDropdownOpen2, setIsDropdownOpen2 ] = useState(false);

	const handleButtonClick = () => {
		setIsDropdownOpen(!isDropdownOpen); // close the NavDropdown
		// navigate to the specified route
	};
	const handleButtonClick2 = () => {
		setIsDropdownOpen2(!isDropdownOpen2); // close the NavDropdown
		// navigate to the specified route
	};

	const handleErase = () => {
		const previous_name = localStorage.getItem('name');
		localStorage.removeItem('name');
		// navigate('/other-page', { state: { id: 7, color: 'green' } });

		navigate('/', { state: { pv: previous_name } });
	};
	useEffect(
		() => {
			console.log('useeffect called');
		},
		[ isDropdownOpen ]
	);
	return (
		<Pdiv>
			<Navbar bg="" expand="lg">
				<Container>
					<Nav.Link href="/custom/india">
						<div class="brand">Freely</div>
					</Nav.Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="navbarclass2 me-auto">
							<Nav.Link href="">
								<div class="cnbtn" onClick={handleErase}>
									{' '}
									Change Name
								</div>
							</Nav.Link>
						</Nav>

						<Nav className="navbarclass2">
							<div>
								<p className="lp" onClick={handleButtonClick}>
									choose location
								</p>
								{isDropdownOpen && (
									<div className="mf">
										<div onClick={handleButtonClick} className="cross">
											<CancelIcon style={{ fontSize: 30 }} />{' '}
										</div>

										<MyFilter handleButtonClick={handleButtonClick} />
									</div>
								)}
							</div>
						</Nav>
						<Nav className="navbarclass2">
							<NavDropdown title="Hotspot Location" id="basic-nav-dropdown">
								<NavDropdown.Divider />
								<NavDropdown.Item href="/custom/vit">vit</NavDropdown.Item>
								<NavDropdown.Item href="/custom/india">India</NavDropdown.Item>
								<NavDropdown.Item href="/custom/patna">Patna</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav className="navbarclass2 me-auto">
							<div>
								<p className="lp" onClick={handleButtonClick2}>
									Inbox
								</p>
								{isDropdownOpen2 && (
									<div className="mf">
										<div onClick={handleButtonClick2} className="cross">
											<CancelIcon style={{ fontSize: 40 }} />{' '}
										</div>

										<MyInbox handleButtonClick2={handleButtonClick2} />
									</div>
								)}
							</div>
						</Nav>
						<Nav className="navbarclass2 me-auto">
							<Nav.Link href="/roomscustom">Custom rooms</Nav.Link>
						</Nav>

						{/* <Nav className="navbarclass2 me-auto">
							<Nav.Link href="">
								<button
									class="rbtn"
									onClick={() => {
										window.location.reload();
									}}
								>
									Refresh
								</button>
							</Nav.Link>
						</Nav>
						<Nav className="navbarclass2 me-auto">
							<Nav.Link href="/chatbot">
								<button class="rbtn">chatbot</button>
							</Nav.Link>
						</Nav> */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Pdiv>
	);
}

export default MyNavbar;

const Pdiv = styled.div`
	position: fixed;
	background-color: white;
	top: 0;
	padding: 10px;

	${'' /* background-color: red; */} width: 100%;
	font-size: 15px;
	margin-bottom: 50px;
	.container {
		background-color: white !important;
	}
	.navbarclass2 {
		margin-left: 40px !important;
		@media (max-width: 998px) {
			margin-left: 0 !important;
		}
	}

	.brand {
		font-size: 40px;
	}
	.cnbtn {
		background-color: transparent;
		border: none !important;
		margin: 0 50px;

		@media (max-width: 998px) {
			margin: 0;
		}
	}

	.rbtn {
		background-color: transparent;
		border: none;

		padding: 10px;
		color: blue;

		@media (max-width: 998px) {
			margin: 0;
		}
	}

	.lp {
		cursor: pointer;
		color: grey;
		margin-top: 6px;
	}
	.mf {
		position: absolute;
		top: 40px;
		margin: 0px auto;
		background-color: black;
		color: white;
		border: 2px solid black;
		z-index: 100;
	}

	.cross {
		position: relative;
		top: 0px;
		right: 0px;
		height: 40px;
	}
`;
