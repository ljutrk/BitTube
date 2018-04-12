import React, { Component } from 'react';
import debounce from 'lodash/debounce'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        }
    }

    searchHandler = (e) => {        
        this.setState({ searchInput: e.target.value })
        this.props.searchFetchHandler(e.target.value)        
    }
    
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="input-field">
                        <input onChange={this.searchHandler} value={this.state.searchInput} id="search" type="search" required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </div>
            </nav>
        );
    }
}

export { Search }; 