import './nav.css'
import Photo from '../../assets/profile.jpg';

const Nav = () => {
	return (
	<div className="mainNav">
		<div className='profile'>
			<a href="#main" className="name animate-charcter">matias</a>
		</div>
		<nav>
			<ul className="nav">
				<li><a href="#projects">Projects</a></li>
				<li><a href="#stack">Tech Stack</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</div>
)
};

export default Nav;