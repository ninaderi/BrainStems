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

class ActivityComp extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      // filteredTopicTypeGrade: [], //maybenot
      searchfield: ""
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
    console.log("this is the onsearchchange function", e.target.value);
  };

  //does the parent need to know about onCheckChange

  onCheckFilter = arg => {
    const { activities } = this.state;
    let filteredActivities = activities.filter(activity => {
      return activity.grade === Number(arg);
    });

    console.log("compare*********", activities, filteredActivities);
    // if (checked is true) limit ativities with just that

    this.setState({ activities: filteredActivities });
    console.log("onCheckFilter", arg);
    //if type checkbox is true then filter on those
  };

  render() {
    let { activities, searchfield } = this.state;
    let filteredActivities = activities.filter(activity => {
      return activity.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !activities.length ? (
      <h1>Loading ...</h1>
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
          <FilterType
            className="filterbox"
            onCheckFilter={this.onCheckFilter}
          />
          <FilterGrade
            className="filterbox"
            onCheckFilter={this.onCheckFilter}
          />
        </div>
        <br />
        <div className="activityCardComp">
          <Scroll>
            <CardList activities={filteredActivities} />;
          </Scroll>
        </div>
      </div>
    );
  }
}

export default ActivityComp;
