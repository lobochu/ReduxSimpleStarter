import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

//key for youtube api test
const API_KEY = 'AIzaSyD0TmW0qdSCP8OOKnxh7md-5kfYd7uFD3Q';

//Create a new component . This component should produce
// come HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );

}
//Take this comonent;s generted HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
