/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/12/17
 * @Email:  sanikommu@gmail.com
 * @Filename: video_list_item.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/12/17
 */


import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media=object"  src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;