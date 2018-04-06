import React, {Component} from 'react'
import _ from 'lodash';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="searchBar">
                <input
                    className="form-control"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
                {/*<p>Value of the input: {this.state.term}</p>*/}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({
            term
        });
        this.props.onSearchTermChanged(term);
    }
}

export default SearchBar;