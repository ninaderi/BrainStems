import React, { Component } from "react";
import { Activities } from "./Activities";

class FilterTypeComp extends Component {
  constructor(props) {
    super(props);
    this.array = [];
    this.state = {
      isChecked: false
      
    };
  }

  combineTypeArray = value => {
    this.array.push(value);
  };

  popTypeArray = value => {
    this.array.pop(value);

  }

  onCheckChange = e => {
    let target = e.target;
    let isChecked = target.type === "checkbox" ? target.checked : target.value;
    let other = target.other;
    //console.log("im the whole target in filtertype", e.target);
    console.log("im the true/false in filtertype", isChecked);
    console.log("im just the type", target.value);



    if (isChecked === true) {
      this.combineTypeArray(target.value);
      // console.log("array is ", this.array)
    } else {
      this.popTypeArray(target.value)
      // console.log("array is now", this.array)
    }
       this.props.onCheckFilterType(this.array);
    
    //isChecked === false
  };
  render() {
    return (
      <div className="filterbox">
        <div className="filtertitles">
          <b>SEARCH BY TYPE</b>
        </div>
        <input
          id="idexperiment"
          type="checkbox"
          onChange={this.onCheckChange}
          // onChecked={this.onCheckFilterType}
          value="Experiment"
        />
        Experiment
        <br />
        <input
          id="idgame"
          type="checkbox"
          onChange={this.onCheckChange}
          // onChecked={this.onCheckFilterType}
          value="Game"
        />
        Game
        <br />
        <input
          id="idlesson"
          type="checkbox"
          onChange={this.onCheckChange}
          // onChecked={this.onCheckFilterType}
          value="Lesson"
        />
        Lesson
        <br />
        <input
          id="idquiz"
          type="checkbox"
          onChange={this.onCheckChange}
          // onChecked={this.onCheckFilterType}
          value="Quiz"
        />
        Quiz
        <br />
        <input
          id="idstory"
          type="checkbox"
          onChange={this.onCheckChange}
          // onChecked={this.onCheckFilterType}
          value="Story"
        />
        Story
        <br />
        <input
          id="idvideo"
          type="checkbox"
          onChange={this.onCheckChange}
          // onChecked={this.onCheckFilterType}
          value="Video"
        />
        Video
      </div>
    );
  }
}
export default FilterTypeComp;
