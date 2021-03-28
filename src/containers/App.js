import React, { Component } from "react";
import Card from "../components/Card.js";
import AgeCheck from "../components/AgeCheck.js";
import Categories from "../components/Categories.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
      catList: [],
      catNumber: 0,
      catName: "Make A Choice!",
      ageChecked: false,
      overAge: false,
    };
  }

  getCategories = async () => {
    try {
      //Get Categories
      const catObject = await fetch(
        "https://api.chucknorris.io/jokes/categories"
      );
      const catArray = await catObject.json();
      //Make categories into list
      this.setState({
        catList: catArray,
      });
    } catch (e) {
      console.log("Ooops!", e);
    }
  };

  getJoke = async (input) => {
    try {
      //Get joke from catName
      const objectReturn = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${input}`
      );
      const result = await objectReturn.json();
      this.setState({ jokes: await result.value });
    } catch (e) {
      console.log("getJoke", e);
    }
  };

  onCatClick = (event) => {
    this.setState({ catNumber: event.target.id });
    this.setState({ catName: event.target.innerHTML });
    this.getJoke(event.target.innerHTML);
  };

  ageStatus = (input) => {
    this.setState({ overAge: input });
    this.setState({ ageChecked: true });
    this.getCategories();
  };

  render() {
    const {
      jokes,
      catList,
      catName,
      catNumber,
      ageChecked,
      overAge,
    } = this.state;
    return (
      <div>
        <div>
          <h1>Chuck Norris Jokes... Like the internet needs any more...</h1>
        </div>
        {ageChecked !== true ? (
          <AgeCheck ageStatus={this.ageStatus} />
        ) : (
          <div>
            <div>
              <h2 style={{ textAlign: "center" }}>Choose your category...</h2>
              <Categories
                cat={catList}
                onCatClick={this.onCatClick}
                overAge={overAge}
              />
            </div>
            <Card number={Number(catNumber) + 1} cat={catName} joke={jokes} />
          </div>
        )}
        ;
      </div>
    );
  }
}

export default App;
