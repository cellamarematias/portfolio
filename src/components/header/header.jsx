import './header.css';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = () => {
	return (
		<div className="headerContainer">
			<div className="container">
				<div className="photoContainer"></div>
				<div className="displayName">Matías</div>
			</div>
			<div className="container">
				<div className="icons">
					<a href="https://github.com/cellamarematias" target="_blank" rel="noreferrer"><FaGithub/></a>
					<a href="https://www.linkedin.com/in/matiascellamare/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
					<a href="https://www.instagram.com/matiascellamare/" target="_blank" rel="noreferrer"><FaInstagram/></a>
				</div>
			</div>
		</div>
	)
}

export default Header;