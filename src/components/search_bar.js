 import React, { Component } from 'react';

// functional component some value goes in or it is called and returns something no record keeping typical function
// const SearchBar = () => {
//   return <input />;
// };

// class based component to keep internal record keeping like user typed in and what user typed in input box
class SearchBar extends Component { // class SearchBar extends React.Component if import was like this import React from 'react';
constructor(props) {
  super(props);
  this.state = { 'term': '' };
}

// every class based component must have defined render method and return some JSX otherwise error
  render() {
    return (
      <div className="search-bar">
        <input
          value = { this.state.term }
          onChange={event => this.onInputChange(event.target.value)} />

      </div>
    );

    //ORRRRRRRRRRRRRRRRRRRR

    // return (
    //   <div>
    //   <input onChange={this.onInputChange.bind(this)} />
    //   value of the input: {this.state.term}
    //   </div>
    // );
   }

  //  onInputChange(event) {
  //    // console.log(event.target.value);
  //    this.setState({term: event.target.value});
   //
  //   }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);

  }

}


export default SearchBar;


// Another way to simplify code using ES6 syntax delete event handler and write
// <input onChange={(event) => console.log(event.target.value)} />; notice no {} after =>
// OR
// <input onChange={event => console.log(event.target.value)} />; one argument so notice no () around event.
