import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyFilter from '../Components/util/filter';
import MyInbox from '../Components/util/inbox';

function MyNavbar() {
	const navigate = useNavigate();

	const handleErase = () => {
		const previous_name = localStorage.getItem('name');
		localStorage.removeItem('name');
		// navigate('/other-page', { state: { id: 7, color: 'green' } });

		navigate('/', { state: { pv: previous_name } });
	};

	return (
		<Pdiv>
			<Navbar bg="" expand="lg">
				<Container>
					<Nav.Link href="/custom/india">
						<div class="brand">Chat App</div>
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
							<NavDropdown title="Choose Location" id="basic-nav-dropdown">
								<MyFilter />
							</NavDropdown>
						</Nav>
						<Nav className="navbarclass2">
							<NavDropdown title="Hotspot Location" id="basic-nav-dropdown">
								<NavDropdown.Divider />
								<NavDropdown.Item href="/custom/vit">vit</NavDropdown.Item>
								<NavDropdown.Item href="/custom/india">India</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav className="navbarclass2 me-auto">
							<NavDropdown title="Inbox" id="basic-nav-dropdown">
								<MyInbox />
							</NavDropdown>
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
`;
