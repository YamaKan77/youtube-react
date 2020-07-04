import React from 'react';
import {VideoPreview} from '../../containers/VideoPreview/VideoPreview';
import './Home.scss';

export class Home extends React.Component {
	render() {
		return (
			<div className='home'>
				<VideoPreview/>
			</div>
		)
	}
}

export default Home;