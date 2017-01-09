import React, {Component} from 'react';

class SearchBar extends Component{
  render() {
    //single line arrow function
    return <input onChange={ (event) => console.log(event.target.value)}/>;
  }

}
export default SearchBar;
