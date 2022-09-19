import './stack.css';
import { FaReact, FaNode, FaPhp } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMysql, SiMongodb, SiGithub, SiCss3, SiHtml5 } from "react-icons/si";

const Stack = () => {
	return (
		<div className='stack' id="stack">
			<h4 className='projectsTitle'>My Tech Stack</h4>
			<div className='flexContainer'>
				<div className='stackContainer'>
					<FaReact />
					<FaNode />
				</div>
				<div className='stackContainer'>
					<FaPhp />
					<SiMysql />
				</div><div className='stackContainer'>
					<SiFirebase />
					<SiMongodb />
				</div><div className='stackContainer'>
					<FaNode />
					<SiGithub />
				</div><div className='stackContainer'>
					<SiHtml5 />
					<SiCss3 />
				</div>
			</div>
		</div>
	)
}

export default Stack;