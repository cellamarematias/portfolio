import './stack.css';
import { FaReact, FaNode, FaPhp } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql, SiMongodb, SiGithub, SiCss3, SiHtml5 } from "react-icons/si";

const Stack = () => {

	function reveal() {
		var reveals = document.querySelectorAll(".reveal");
		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;
			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add("active");
			} else {
				reveals[i].classList.remove("active");
			}
		}
	}

	window.addEventListener("scroll", reveal);

	// To check the scroll position on page load
	reveal();
	return (
		<section className='stack' id="stack">
			<h4 className='projectsTitle'>My Tech Stack</h4>
			<div className='flexContainer'>
				<div className='stackContainer reveal fade-left'>
					<FaReact />
					<FaNode />
				</div>
				<div className='stackContainer reveal fade-bottom'>
					<FaPhp />
					<SiMysql />
				</div><div className='stackContainer reveal fade-bottom'>
					<SiFirebase />
					<SiMongodb />
				</div><div className='stackContainer reveal fade-bottom'>
					<FaNode />
					<SiGithub />
				</div><div className='stackContainer reveal fade-right'>
					<SiHtml5 />
					<SiCss3 />
				</div>
			</div>
		</section>
	)
}

export default Stack;