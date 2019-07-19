import React, { Component } from "react";
import CardList from "./CardList";
import FilterGrade from "./FilterGrade";
import FilterTopic from "./FilterTopic";
import FilterType from "./FilterType";
import Scroll from "./Scroll";
import { Activities } from "./Activities";
import SearchBox from "./SearchBox";
//import Popper.js???sc

import "./ActivityComp.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      searchfield: "",
      filterChange: "",
      //-------------not sure if these will be required
      topic: [
        "Technology and Innovation",
        "Earth and Science",
        "Science",
        "Physical Science",
        "STEM Careers"
      ],
      topicfilter: "",
      timefilter: "",
      grade: ["K", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      gradefilter: "",
      type: ["Experiment", "Game", "Lesson", "Quiz", "Story", "Video"],
      typefilter: ""
    };
  }

  componentDidMount() {
    this.setState({ activities: Activities });
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
    console.log(e.target.value);
  };

  onFilterChange = e => {
    this.setState({ filterChange: e.target.value });
    console.log("im a filter target", e.target.value);
    //when topic is pushed a list shows up and you are able to click on item
    //should these filters work independently???? or just within their category
    //for all types called checkbox the filter should be called
    //perhaps make a temporary array so push the types/grades/topics
  };

  render() {
    const { activities, searchfield, filterChange } = this.state; //added new filter
    const filteredActivities = activities.filter(activity => {
      return (
        activity.name.toLowerCase().includes(searchfield.toLowerCase()) ||
        activity.name.toLowerCase().includes(filterChange.toLowerCase())
        //we have something here for filterChange but yet it should include filtered change
      );
    });

    return !activities.length ? (
      <h1>Loading ...</h1>
    ) : (
      <div className="tc">
        <div className="filterComps"> 
          <SearchBox className= "filterbox" searchChange={this.onSearchChange} />
          <FilterTopic className="filterbox" filterChange={this.onFilterChange} />
          <FilterType className="filterbox" filterChange={this.onFilterChange} />
          <FilterGrade className="filterbox" filterChange={this.onFilterChange} />
        </div>
       <br/>
       <div className="activityCardComp">
         <Scroll>
            <CardList activities={filteredActivities} />;
          </Scroll>
      </div>
          
      </div>
    );
  }
}

export default App;
