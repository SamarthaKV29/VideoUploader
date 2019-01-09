import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// new component which is going to produce HTML 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], term: "" };
    }
    mySearchCallback = (searchTerm, videosData) => {
        this.state.term = searchTerm;
        this.state.videos = videosData;
    }
    render() {
        return <div>
            <SearchBar searchTermCallback={this.mySearchCallback} />
            <VideoList videosCallback={this.state.videos} />
        </div>

    }
}
// lets render this component on DOM 

ReactDom.render(<App />, document.querySelector('.container'));