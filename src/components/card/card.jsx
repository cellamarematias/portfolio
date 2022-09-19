import './card.css';
import { SiMongodb, SiNodedotjs, SiJavascript, SiMysql } from "react-icons/si";

const Card = (props) => {
	return (
		<a href={props.url} target="_blank" rel="noopener noreferrer">
			<div className='card'>
				<div className='cardText'>
					<h2 className="projectName">{props.name}</h2>
					<p>{props.title}</p>
					<span className='date'>{props.year}</span>
				</div>
				<div className='cardStats'>
					<div className='stat'>
						<div className='value'>{props.icon1}</div>
					</div>
					<div className='stat'>
						<div className='value'>{props.icon2}</div>
					</div>
					<div className='stat'>
						<div className='value'>{props.icon3}</div>
					</div>
				</div>
			</div>
		</a>
	)
};

export default Card;