import React, { Component } from 'react';
import Card from '../components/Card.js';
import Categories from '../components/Categories.js';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      jokes: [],
      catList: [],
      catNumber: 0,
      catName: "dev"
    };
    this.onCatClick = this.onCatClick.bind(this);
  };
  
  async componentDidMount() {
    try {
      //Get Categories
      const catObject = await fetch('https://api.chucknorris.io/jokes/categories');
      const catArray = await catObject.json();
      //Make categories into list
      this.setState({catList: catArray.map((items, i) => <li onClick={this.onCatClick} style={{cursor: "crosshair", padding: "10px"}} key={i} id={i}>{items}</li>)});
      //Get joke from catName
      const objectReturn = await fetch(`https://api.chucknorris.io/jokes/random?category=${this.state.catName}`);
      const result = await objectReturn.json();
      this.setState({jokes: await result.value});
    } catch(e) {console.log('Ooops!', e)}
  };
  
  onCatClick = async (event) => {
    this.setState({catNumber: event.target.id});
    this.setState({catName: event.target.innerHTML});
    this.componentDidMount();
  };

  
  render() {
    const {
      jokes,
      catList,
      catName,
      catNumber
    } = this.state;
    return (
      <div>
        <div>
          <h1>Chuck Norris Jokes... Like the internet needs any more...</h1>
      <h2 style={{textAlign: "center"}}>Choose your category...</h2>
    <Categories cat={catList} />
    </div>
    <Card number={(Number(catNumber) +1)} cat={catName} joke={jokes} />
    </div>
    )
  };
}

export default App;
