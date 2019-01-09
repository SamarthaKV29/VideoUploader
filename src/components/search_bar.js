import React, { Component } from 'react';

import YTsearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAhcgg9rNx00JtK8J4nqaPHq-T5p8KtQEI';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '', videos: [] };
    }

    render() {
        return (
            <div>
                <span>Search </span>
                <input
                    //value={this.state.term}
                    onChange={event => {
                        console.log(event.target.value);

                        if (event.target.value != " ") {
                            this.setState({ term: event.target.value });
                            YTsearch({ key: API_KEY, term: this.state.term }, (data) => {
                                this.setState({ videos: data });
                            });
                            this.props.searchTermCallback(this.state.term, this.state.videos);
                        }
                    }} />
            </div>
        );

    }

}

export default SearchBar;
