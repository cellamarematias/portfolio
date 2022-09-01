import './projects.css';
import { GrReactjs } from "react-icons/gr";
import { SiMongodb, SiNodedotjs, SiJavascript, SiMysql } from "react-icons/si";

const Projects = () => {
	return (
			<div id='projects' className="projectsContainer">
				<div className='cardContainer'>
					<a href="https://github.com/cellamarematias/react-app" target="_blank" rel="noopener noreferrer">
						<div className='card'>
							<div className='cardImage'></div>
							<div className='cardText'>
								<span className='date'>2022</span>
								<h2>Expenses App</h2>
								<p>React</p>
							</div>
							<div className='cardStats'>
								<div className='stat'>
								<div className='value'><SiJavascript/></div>
								</div>
								<div className='stat'>
									<div className='value'><GrReactjs/></div>
								</div>
								<div className='stat'>
								<div className='value'><SiMongodb/></div>
								</div>
							</div>
						</div>
					</a>
					<a href="https://github.com/cellamarematias/react-app-server" target="_blank" rel="noopener noreferrer">
						<div className='card'>
							<div className='cardImageTwo'></div>
							<div className='cardText'>
								<span className='date'>2022</span>
								<h2>API Rest</h2>
								<p>Express</p>
							</div>
							<div className='cardStats'>
								<div className='stat'>
								<div className='value'><SiNodedotjs/></div>
								</div>
								<div className='stat'>
									<div className='value'><SiJavascript/></div>
								</div>
								<div className='stat'>
								<div className='value'><SiMongodb/></div>
								</div>
							</div>
						</div>
					</a>
					<a href="https://github.com/cellamarematias/app-crud-node-mysql" target="_blank" rel="noopener noreferrer">
						<div className='card'>
							<div className='cardImageThree'></div>
							<div className='cardText'>
								<span className='date'>2021</span>
								<h2>Node-MySQL</h2>
								<p>Node</p>
							</div>
							<div className='cardStats'>
								<div className='stat'>
								<div className='value'><SiNodedotjs/></div>
								</div>
								<div className='stat'>
									<div className='value'><GrReactjs/></div>
								</div>
								<div className='stat'>
								<div className='value'><SiMysql/></div>
								</div>
							</div>
						</div>
					</a>
					<a href="https://github.com/cellamarematias/jade-app" target="_blank" rel="noopener noreferrer">
						<div className='card'>
							<div className='cardImageFour'></div>
							<div className='cardText'>
								<span className='date'>2022</span>
								<h2>Mobile App</h2>
								<p>React Native</p>
							</div>
							<div className='cardStats'>
								<div className='stat'>
								<div className='value'><SiNodedotjs/></div>
								</div>
								<div className='stat'>
									<div className='value'><GrReactjs/></div>
								</div>
								<div className='stat'>
								<div className='value'><SiMongodb/></div>
								</div>
							</div>
						</div>
					</a>
				</div>
									{/* <div className="arrowContainerProjects">
										<div class="roundProjects">
											<a href="#body">
												<div id="cta">
														<span class="arrow primera next"></span>
														<span class="arrow segunda next"></span>
												</div>
											</a>
										</div>
									</div> */}
			</div>
	)
}

export default Projects;