import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scorll'
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }
  componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }));
}


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const {robots,searchfield}=this.state
    const filterdrobots = robots.filter((Robot) => {
      return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
return !robots.length?
  <h1>loading</h1>:

     (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <Scroll> 
          <CardList Robots={filterdrobots} />
        </Scroll>
       
      </div>
    );
  }
}

export default App;
