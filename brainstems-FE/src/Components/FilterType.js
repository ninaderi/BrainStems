import React, { Component } from "react";

class FilterType extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false
    };
  }


  handleInputChange = e => {
    const target = e.target;
    const mark = target.type === "checkbox" ? target.checked : target.value;
    const other = target.other;
    console.log("how can i possibly be a target in filtertype", target);
    console.log("what is a mark in filtertype", mark);

    this.setState({
      [other]: mark
    });
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
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Experiment"
        />
        Experiment
        <br />
        <input
          id="idgame"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Game"
        />
        Game
        <br />
        <input
          id="idlesson"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Lesson"
        />
        Lesson
        <br />
        <input
          id="idquiz"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Quiz"
        />
        Quiz
        <br />
        <input
          id="idstory"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Story"
        />
        Story
        <br />
        <input
          id="idvideo"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Video"
        />
        Video
      </div>
    );
  }
}
export default FilterType;
