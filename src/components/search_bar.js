import React, { Component } from 'react'; 


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term:'' };
        //console.log(this.state.term);
    }

    

    render() {
        return (
            <input onChange={(event) => console.log(event.target.value)}/>
        );
       //console.log(this.state.term);
    }
}

export default SearchBar;