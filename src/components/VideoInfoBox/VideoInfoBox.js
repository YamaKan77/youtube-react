import React from 'react';
import './VideoInfoBox.scss';
import {Image, Button} from 'semantic-ui-react';

export class VideoInfoBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
		};
	}

	render() {
		let descriptionTextClass = 'collapsed';
		let buttonTitle = 'Show More';
		if(!this.state.collapsed) {
			descriptionTextClass = 'expanded';
			buttonTitle = 'Show Less';
		}

		const descriptionParagraphs = ['Paragraph 1', 'Paragraph 2'];

		return (
			<div className='video-info-box'>
				<Image className='channel-image' src='http://via.placeholder.com/48x48' circular/>
				<div className="video-info">
					<div className='channel-name'>Channel Name</div>
					<div className='video-publication-date'>4 20, 2020</div>
				</div>
				<Button color='youtube'>91.5k Subscribe</Button>
				<div className="video-description">
					<div className={descriptionTextClass}>
						{descriptionParagraphs}
					</div>
				  <Button compact onClick={this.onToggleCollapseButtonClick}>{buttonTitle}</Button>
				</div>
			</div>
		);
	}

	onToggleCollapseButtonClick = () => {
		this.setState((prevState) => {
			return {
				collapsed: !prevState.collapsed
			};
		});
	}

}