import './projects.css';
import Card from '../card/card';
import { SiMongodb, SiNodedotjs, SiJavascript, SiMysql } from "react-icons/si";
import { AiFillApi, AiFillGithub } from "react-icons/ai";
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";


const Projects = () => {
	return (
		<div className='projects' id="projects">
			<h4 className='projectsTitle'>Projects</h4>
			<div className='projectsGroup'>
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

				<div className='projectsContainer'>
					<Card
						url={"https://cellamarematias.github.io/demo-html-css-ll/"}
						name={'HTML + CSS'}
						title={'Portfolio'}
						year={'2020'}
						icon1={<FaHtml5/>}
						icon2={<FaCss3Alt/>}
					/>

					<Card
						url={"https://cellamarematias.github.io/demo-html-css/"}
						name={'CSS + SASS'}
						title={'Blog Café'}
						year={'2020'}
						icon1={<FaHtml5/>}
						icon2={<FaCss3Alt/>}
						icon3={<FaSass/>}
					/>
				</div>

				<div className='projectsContainer'>
					<Card
						url={"https://github.com/cellamarematias/crud-nodejs-mongodb"}
						name={'NODE'}
						title={'CRUD'}
						year={'2021'}
						icon1={<SiMongodb/>}
						icon2={<SiNodedotjs/>}
						icon3={<SiJavascript/>}
					/>

					<Card
						url={"https://github.com/cellamarematias/portfoliocellamare"}
						name={'Portfolio'}
						title={'JS + Handlebars'}
						year={'2022'}
						icon1={<SiJavascript/>}
						icon2={<FaHtml5/>}
						icon3={<FaCss3Alt/>}
					/>
				</div>
			</div>
			<div className='projectsGit'>
			<p className='projectsParagraph'>more projects here<a href="https://github.com/cellamarematias" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a></p>
			</div>
		</div>
	)
};

export default Projects;