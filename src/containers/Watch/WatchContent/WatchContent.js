import React from 'react';
import {Video} from '../../../components/Video/Video';
import {RelatedVideos} from '../../../components/RelatedVideos/RelatedVideos';
import {VideoMetadata} from '../../../components/VideoMetadata/VideoMetadata';
import {VideoInfoBox} from '../../../components/VideoInfoBox/VideoInfoBox';
import {Comments} from '../../Comments/Comments';
import './WatchContent.scss';

import {connect} from 'react-redux';
import {getVideoById} from '../../../store/reducers/videos';

function mapStateToProps(state, props) {
    return {
        video: getVideoById(state, props.videoId)
    }
}

export class WatchContent extends React.Component {
  render() {
    return (
    	<div className='watch-grid'>
    		<Video className='video' id={this.props.videoId}/>
    		<VideoMetadata video={this.props.video}/>
    		<VideoInfoBox className='video-info-box' video={this.props.video}/>
            <Comments className='comments' amountComments={5}/>
            <RelatedVideos className='relatedVideos'/>
    	</div>
    );
  }
}

export default connect(mapStateToProps, null)(WatchContent);