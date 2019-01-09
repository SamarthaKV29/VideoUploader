import React, { Component } from 'react';

class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.videosCallback)
            console.log(this.props.videosCallback);

        return (
            <div>
                <h5>Videos</h5>
                <ul>
                </ul>
            </div>
        );

    }

}

export default VideoList;