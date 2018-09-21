import React, { Component } from 'react'; 


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        //console.log(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div>
                <input onChange={this.onInputChange}/>

                <h3>{this.state.term}</h3>    
            </div>
        );
    };
}

export default SearchBar;