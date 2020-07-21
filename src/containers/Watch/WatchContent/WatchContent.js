import React from 'react';
import {Video} from '../../../components/Video/Video';
import {RelatedVideos} from '../../../components/RelatedVideos/RelatedVideos';
import {VideoMetadata} from '../../../components/VideoMetadata/VideoMetadata';
import {VideoInfoBox} from '../../../components/VideoInfoBox/VideoInfoBox';
import {Comments} from '../../Comments/Comments';
import './WatchContent.scss';

import {connect} from 'react-redux';
import {getRelatedVideos, getVideoById} from '../../../store/reducers/videos';

export class WatchContent extends React.Component {
  render() {
    if(!this.props.videoId) {
        return <div/>
    }
    return (
    	<div className='watch-grid'>
    		<Video className='video' id={this.props.videoId}/>
    		<VideoMetadata video={this.props.video}/>
    		<VideoInfoBox className='video-info-box' video={this.props.video}/>
            <RelatedVideos className='related-videos' videos={this.props.relatedVideos}/>
            <Comments className='comments' amountComments={5}/>
    	</div>
    );
  }
}


function mapStateToProps(state, props) {
    return {
        relatedVideos: getRelatedVideos(state, props.videoId),
        video: getVideoById(state, props.videoId)
    }
}

export default connect(mapStateToProps, null)(WatchContent);