import React from 'react';

const VideoListItem = ({ video }) => {

    return (
        <li>
            <img src={video.snippet.thumbnails.high.url} alt="could not find video" />
        </li>
    );
}

export default VideoListItem;