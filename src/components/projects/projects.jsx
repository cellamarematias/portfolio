import './projects.css';
import Card from '../card/card';
import { SiMongodb, SiNodedotjs, SiJavascript, SiMysql } from "react-icons/si";
import { AiFillApi, AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";


const Projects = () => {
	return (
		<div className='projects' id="projects">
			<h4 className='projectsTitle'>Projects</h4>
			<div className='projectsContainer'>
				<Card
					url={"https://github.com/cellamarematias/react-app"}
					name={'React'}
					title={'Expenses App'}
					year={'2022'}
					icon1={<FaReact/>}
					icon2={<SiMongodb/>}
					icon3={<SiNodedotjs/>}
				/>

				<Card
					url={"https://github.com/cellamarematias/react-app-server"}
					name={'Express'}
					title={'API REST'}
					year={'2022'}
					icon1={<SiMongodb/>}
					icon2={<SiNodedotjs/>}
					icon3={<SiJavascript/>}
				/>
			</div>

			<div className='projectsContainer'>
				<Card
					url={"https://github.com/cellamarematias/app-crud-node-mysql"}
					name={'Sql'}
					title={'Node Web App'}
					year={'2021'}
					icon1={<SiJavascript/>}
					icon2={<SiMongodb/>}
					icon3={<SiMysql/>}
				/>

				<Card
					url={"https://github.com/cellamarematias/jade-app"}
					name={'React Native'}
					title={'Crypto App'}
					year={'2022'}
					icon1={<FaReact/>}
					icon2={<SiMongodb/>}
					icon3={<AiFillApi/>}
				/>
			</div>
			<div className='projectsGit'>
			<p className='projectsParagraph'>more projects here<a href="https://github.com/cellamarematias" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a></p>
			</div>
		</div>
	)
};

export default Projects;