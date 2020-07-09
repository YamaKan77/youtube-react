import React from 'react';
import './HomeContent.scss';
import {VideoGrid} from '../../../components/VideoGrid/VideoGrid';

export class HomeContent extends React.Component {
	render() {
		return (
			<div className='home-content'>
				<div className="responsive-video-grid-container">
					<VideoGrid title='Trending'/>
					<VideoGrid title='Autos & Vehicles' hideDivider={true}/>
				</div>
			</div>
		);
	}
}

export default HomeContent;