import React, { Component } from "react";
import CardList from "../Components/CardList";
import FilterGradeComp from "../Components/FilterGradeComp";
import FilterTopicComp from "../Components/FilterTopicComp";
import FilterTypeComp from "../Components/FilterTypeComp";
import Scroll from "../Components/Scroll";
// import FilterApp from "../Components/FilterApp";
// import { Activities } from "../Components/Activities";
import SearchBox from "../Components/SearchBox";
import AddActivityComp from "../Containers/AddActivityComp"
import "../styles/NewActivityComp.css";
import {
  filterBySearch,
  filterByGrade,
  filterByTopic,
  filterByType
} from "../util";

class NewActivityComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allActivities: {},
      totalFilteredActivities: {},
      filterByGradeActive: false,
      filterBySearchActive: false,
      filterByTopicActive: false,
      filterByTypeActive: false,
      showActivityComp: false
    };
    this.initialCounter = 0;
  }

  componentDidMount = async () => {
    let response = await fetch("http://localhost:4000/newActivity");
    response = await response.json();
    this.setState({ activities: response, totalFilteredActivities: response });
  };

  onSearchChange = e => {
    this.filterBySearchArray = filterBySearch(
      e.target.value,
      this.props.allActivities.Activities
    );
   

    this.manageFilter();
    
    this.setState({
      filterBySearchActive:
        document.getElementById("searchBox").value !== "" ? true : false
    });
  };

  manageFilter = () => {
  
    let arrays = [
      this.filterByTypeArray,
      this.filterByGradeArray,
      this.filterByTopicArray,
      this.filterBySearchArray
    ];
    let result = arrays.shift().filter(function(v) {
      return arrays.every(function(a) {
        return a.indexOf(v) !== -1;
      });
    });

    this.setState({ totalFilteredActivities: result });
  };

  onCheckFilterType = array => {
    this.filterByTypeArray = filterByType(
      array,
      this.props.allActivities.Activities
    );
   

    this.manageFilter();
    this.setState({ filterByTypeActive: array.length > 0 ? true : false });
  };

  onCheckFilterGrade = array => {
    this.filterByGradeArray = filterByGrade(
      array,
      this.props.allActivities.Activities
    );
   

    this.manageFilter();
    this.setState({ filterByGradeActive: array.length > 0 ? true : false });
  };

  onCheckFilterTopic = array => {
   
    this.filterByTopicArray = filterByTopic(
      array,
      this.props.allActivities.Activities
    );
  
    this.manageFilter();
    this.setState({ filterByTopicActive: array.length > 0 ? true : false });
  };

  handleClick = (activityId) => {
  
    this.setState({newActivity: this.state.activities.Activities[activityId],
                  showActivityComp: true
    })
  }
  render() {

   
    this.filterByGradeArray = this.state.filterByGradeActive
      ? this.filterByGradeArray
      : this.props.allActivities.Activities;
    this.filterByTopicArray = this.state.filterByTypeActive
      ? this.filterByTopicArray
      : this.props.allActivities.Activities;
    this.filterBySearchArray = this.state.filterBySearchActive
      ? this.filterBySearchArray
      : this.props.allActivities.Activities;
      this.filterByTypeArray = this.state.filterByTypeActive
      ? this.filterByTypeArray
      : this.props.allActivities.Activities;  

      let filterActive = (this.state.filterBySearchActive || this.state.filterByGradeActive || this.state.filterByTypeActive || this.state.filterByTopicActive)
     
    return !this.props.allActivities ? (
      <h1>No Activities Found ...</h1>
    ) : (
      <div className="tc">
      {this.state.showActivityComp ? <AddActivityComp activity = {this.state.newActivity} />: null}
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
            {this.state.totalFilteredActivities[0] ? (
              <CardList activities={this.state.totalFilteredActivities} handleClick = {this.handleClick} />
            ) : (
              !filterActive ? <CardList activities={this.props.allActivities.Activities} handleClick = {this.handleClick} />: null
            )}
          </Scroll>
        </div>
      </div>
    );
  }
}

export default NewActivityComp;
