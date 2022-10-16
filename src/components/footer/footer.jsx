import './footer.css';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram  } from "react-icons/ai";

const Footer = () => {
	return (
		<div className='footerContainer' id="footer">
			<a href="https://www.linkedin.com/in/matiascellamare/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
			<a href="https://github.com/cellamarematias" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
			<a href="https://www.instagram.com/matiascellamare/" target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
		</div>
	)
};

export default Footer;