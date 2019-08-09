import React, { Component } from "react";
import CardList from "./CardList";
import FilterGrade from "./FilterGrade";
import FilterTopic from "./FilterTopic";
import FilterTypeComp from "./FilterTypeComp";
import Scroll from "./Scroll";
import { Activities } from "./Activities";
import SearchBox from "./SearchBox";
//import Popper.js???sc

import "./ActivityComp.css";

class ActivityComp extends Component {
  constructor() {
    super();
    this.filterByTypeArray = Activities;

    this.state = {
      activities: [],
      totalFilteredActivities: [],
      // filteredTopicTypeGrade: [], //maybenot
      searchfield: "",
      typeSearchfield: ""
      // pointer: "",
      //-------------not sure if these will be required
      //----------------just saying this area might have to go
      // topic: [
      //   "Technology and Innovation",
      //   "Earth and Science",
      //   "Science",
      //   "Physical Science",
      //   "STEM Careers"
      // ],
      // topicfilter: "",
      // timefilter: "",
      // grade: ["K", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      // gradefilter: "",
      // type: ["Experiment", "Game", "Lesson", "Quiz", "Story", "Video"],
      // typefilter: ""
      //-------------not sure if these will be required
      //----------------just saying this area might have to go
    };
  }

  componentDidMount() {
    this.setState({ activities: Activities });
    
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
    // console.log("****************this is the onsearchchange function", e.target.value);
  };

  //does the parent need to know about onCheckChange

  onCheckFilterType = array => {
    const { activities } = this.state;
    console.log("array is  ", array)

    let filteredActivities;
    if (array.length > 0) {
      filteredActivities = activities.filter(activity => {
        if (array.includes(activity.type)) {
          return activity;
        }
      });
    } else {
        filteredActivities = activities;
    }
    console.log("filter activities now ", filteredActivities)
    this.filterByTypeArray = filteredActivities;
    this.combineAllFilters(this.filterByTypeArray, Activities, Activities, Activities);

  };

  combineAllFilters = (typeArray, gradeArray, searchArray, topicArray) => {
    // find all common activities and push resultant to state
    let arrays = [typeArray, gradeArray, searchArray, topicArray];

    let result = arrays.shift().reduce((res, v) => {
      
      if (res.indexOf(v) === -1 && arrays.every((a) => { 
        return a.indexOf(v) !== -1;
      }));
      console.log("push res and v are", res, v);
      res.push(v);
      return res;
    }, []);
    console.log("resultant array is ", result);
    this.setState({totalFilteredActivities: result});
  }
    

   // this.setState({ activities: filteredActivities });
    // console.log("***************onCheckFilter", array);
    //if type checkbox is true then filter on those
  

  render() {
    
    
    let { activities, searchfield, typeSearchfield } = this.state;
    let filteredActivities = activities.filter(activity => {
      return activity.name.toLowerCase().includes(searchfield.toLowerCase());
      
    });
    // console.log("current act", filteredActivities)
    

    return !activities.length ? (
      <h1>No Activities Found ...</h1>
    ) : (
      <div className="tc">
        <div className="filterComps">
          {/* this is the search input by keyword */}
          <SearchBox className="filterbox" searchChange={this.onSearchChange} />
          {/* this is the search input end */}

          <FilterTopic
            className="filterbox"
            onCheckFilter={this.onCheckFilter}
          />
          <FilterTypeComp
            className="filterbox"
            onCheckFilterType={this.onCheckFilterType}
          />
          <FilterGrade
            className="filterbox"
            onCheckFilter={this.onCheckFilter}
          />
        </div>
        <br />
        <div className="activityCardComp">
          <Scroll>
            <CardList activities={filteredActivities} />
          </Scroll>
        </div>
      </div>
    );
  }
}

export default ActivityComp;
