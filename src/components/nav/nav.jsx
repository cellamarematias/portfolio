import './nav.css'
import Photo from '../../assets/profile.jpg';

const Nav = () => {
	return (
	<div className="mainNav">
		<nav>
			<ul className="nav">
				<li><a href="#main"> <span>0.0</span>  home</a></li>
				<li><a href="#projects"><span>0.1</span> projects</a></li>
				<li><a href="#stack"><span>0.2</span> stack</a></li>
				<li><a href="#contact"><span>0.3</span> contact</a></li>
				<li><a href="#footer"><span>0.4</span> me</a></li>
			</ul>
		</nav>
	</div>
)
};

export default Nav;