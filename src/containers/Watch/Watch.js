import React from 'react';
import './Watch.scss';
import {Video} from '../../components/Video/Video';
import {VideoPreview} from '../../components/VideoPreview/VideoPreview';

export class Watch extends React.Component {
  render() {
    return (
    	<React.Fragment>
    		<VideoPreview horizontal={true}/>
    		<VideoPreview/>
    	</React.Fragment>
    );
  }
}

export default Watch;