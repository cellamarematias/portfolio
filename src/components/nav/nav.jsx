import './nav.css'
import Photo from '../../assets/profile.jpg';

const Nav = () => {
	return (
	<div className="mainNav">
		<div className='profile'>
			<div className="name">matias</div>
		</div>
		<nav>
			<ul className="nav">
				<li><a href="#main">Me</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#stack">Tech Stack</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</div>
)
};

export default Nav;