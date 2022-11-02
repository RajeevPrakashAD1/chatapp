import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyFilter from '../Components/util/filter';

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
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="">Chat App</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="navbarclass2 me-auto">
							<Nav.Link href="">
								<button class="cnbtn" onClick={handleErase}>
									{' '}
									Change Name
								</button>
							</Nav.Link>

							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Choose Location</NavDropdown.Item>
								<MyFilter />

								<NavDropdown.Divider />
								<NavDropdown.Item href="/custom/vit">vit</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Pdiv>
	);
}

export default MyNavbar;

const Pdiv = styled.div`
	background-color: red;
	.navbarclass2 {
		//background-color: red;
	}

	.cnbtn {
		background-color: transparent;
		border: none !important;
		margin: 0 300px;
		@media (max-width: 998px) {
			margin: 0;
		}
	}
`;
