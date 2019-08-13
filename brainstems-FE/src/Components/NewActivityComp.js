import React, { Component } from "react";
import CardList from "./CardList";
import FilterGradeComp from "./FilterGradeComp";
import FilterTopicComp from "./FilterTopicComp";
import FilterTypeComp from "./FilterTypeComp";
import Scroll from "./Scroll";
import FilterApp from "./FilterApp";
import { Activities } from "./Activities";
import SearchBox from "./SearchBox";
import "./ActivityComp.css";

class ActivityComp extends Component {
  constructor() {
    super();
    this.filterByTypeArray = Activities; 
    this.filterByGradeArray = Activities; 
    this.filterByTopicArray = Activities;
    this.filterBySearchArray = Activities;
    
    this.state = {
      activities: Activities,
      totalFilteredActivities: Activities,
      // searchfield: "",
      // filteredTopicTypeGrade: [], //maybenot
      // typeSearchfield: ""
    };
  }

  // ********  not sure we need this method as these are set in constructor - GREG ******
  // componentDidMount() {  
  //   this.setState({ 
  //     activities: Activities,
  //     totalFilteredActivities: Activities
  //   });
  // }
  // *********

  onSearchChange = e => {
    let { activities } = this.state;
    this.filterBySearchArray = activities.filter(activity => {
      return activity.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.combineAllFilters();
    console.log("search filter is ", this.filterBySearchArray);
    // this.setState({ searchfield: e.target.value });
    // console.log("****************this is the onsearchchange function", e.target.value);
  };

  onCheckFilterType = array => {
    const { activities } = this.state;

    let filteredActivities;
    if (array.length > 0) {
      filteredActivities = activities.filter(activity => {
        if (array.includes(activity.type)) {
          return activity;
        } else {
          return "";
        }
      });
    } else {
        filteredActivities = activities;
    }

    console.log("filter type array is ", filteredActivities)
    this.filterByTypeArray = filteredActivities;
    this.combineAllFilters();

  };

  onCheckFilterGrade = array => {
    const { activities } = this.state;

    let filteredActivities;
    console.log("array lebgth ", array.length);
    if (array.length > 0) {
      
      filteredActivities = activities.filter(activity => {
        console.log("array is ", array, "and activity grade is ", activity.grade);
        if (array.includes(activity.grade)) {
          return activity;
        } else {
          return "";
        }
      });
    } else {
        filteredActivities = activities;
    }

    console.log("filter grade array is ", filteredActivities)
    this.filterByGradeArray = filteredActivities;
    this.combineAllFilters();

  };

  onCheckFilterTopic = filterArray => {
    const { activities } = this.state;
    console.log("filterArray is ", filterArray.length);
    let filteredActivities;

    if (filterArray.length > 0) {
      filteredActivities = activities.filter(activity => {
        console.log("filterArray is ", filterArray, "and activity topic is ", activity.topic);
        let i = 0;
        do {
          console.log("activity topic iter is ", activity.topic[i])
          if (filterArray.includes(activity.topic[i])) {  
            console.log("topic matches");
            break;
          } else {
            console.log("no matches");
            return "";
          }
          i += 1;
        } while (activity.topic[i]);
        return activity;
      });
    } else {
        filteredActivities = activities;
    }

    console.log("final filter topic filterArray is ", filteredActivities)
    this.filterByTopicArray = filteredActivities;
    this.combineAllFilters();

  };

  combineAllFilters = () => {
    // find all common activities and push resultant to state
    let arrays = [this.filterByTypeArray, this.filterByGradeArray, 
      this.filterByTopicArray, this.filterBySearchArray];
    console.log(`combined array length is ${arrays.length}`);
    console.log("combined arrays are ", arrays, "and first array is ", arrays[0]);

    let result = arrays.shift().filter(function(v) {
      return arrays.every(function(a) {
          return a.indexOf(v) !== -1;
      });
    });

    console.log("final array is ", result);
    this.setState({totalFilteredActivities: result});
  }
    

   // this.setState({ activities: filteredActivities });
    // console.log("***************onCheckFilter", array);
    //if type checkbox is true then filter on those
  

  render() {    

    return !this.state.totalFilteredActivities.length ? (
      <h1>No Activities Found ...</h1>
    ) : (
      <div className="tc">
        <div className="filterComps">

          {/* <FilterApp className="filterbox" /> */}

          {/* this is the search input by keyword */}
          <SearchBox className="filterbox" searchChange={this.onSearchChange} />
          {/* this is the search input end */}

          <FilterTopicComp
            className="filterbox"
            onCheckFilterTopic={this.onCheckFilterTopic}
          />
          <FilterTypeComp
            className="filterbox"
            onCheckFilterType={this.onCheckFilterType}
          />
          <FilterGradeComp
            className="filterbox"
            onCheckFilterGrade={this.onCheckFilterGrade}
          />
        </div>
        <br />
        <div className="activityCardComp">
          <Scroll>
            <CardList activities={this.state.totalFilteredActivities} />
          </Scroll>
        </div>
      </div>
    );
  }
}

export default ActivityComp;
