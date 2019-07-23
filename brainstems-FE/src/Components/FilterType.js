import React, { Component } from "react";
import { Activities } from "./Activities";

class FilterType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  onCheckChange = e => {
    let target = e.target;
    let isChecked = target.type === "checkbox" ? target.checked : target.value;
    let other = target.other;
    console.log("im the whole target in filtertype", e.target);
    console.log("im the true/false in filtertype", isChecked);
    console.log("im just the type", target.value);
    if (isChecked === true) {
      this.props.onCheckFilter(target.value);
    }
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
          onChecked={this.onCheckFilter}
          value="Experiment"
        />
        Experiment
        <br />
        <input
          id="idgame"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value="Game"
        />
        Game
        <br />
        <input
          id="idlesson"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value="Lesson"
        />
        Lesson
        <br />
        <input
          id="idquiz"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value="Quiz"
        />
        Quiz
        <br />
        <input
          id="idstory"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value="Story"
        />
        Story
        <br />
        <input
          id="idvideo"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value="Video"
        />
        Video
      </div>
    );
  }
}
export default FilterType;
