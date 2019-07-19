import React, { Component } from "react";

class FilterGrade extends Component {
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
    console.log("im the target in filtergrade", target);
    console.log("im the mark in filtergrade", mark);

    this.setState({
      [other]: mark
    });
  };

  // letsStartFiltering = e => {
  //   //after an item is checked use a function to go to the Activities json and select
  //   //the ids for the grade which would be activities.grade
  //   //we would have to say that if the "mark" in activities is true then
  //   //invoke the filter that has been set up by searchbox
  //   const Filter = ({ searchFilter }) => {
  //     return <div className="filter" type="search" onChange={searchFilter} />;
  //   };
  // };

  render() {
    return (
      <div className="filterbox">
        <div className="filtertitles">
          <b>SEARCH BY GRADE</b>
        </div>
        <input
          id="idk"
          type="checkbox"
          // isChecked={this.state.isChecked}
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Kindergarten"
        />
        Kindergarten
        <br />
        <input id="id1" type="checkbox" onChange={this.handleInputChange} />
        Grade 1
        <br />
        <input
          id="id2"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 2"
        />
        Grade 2
        <br />
        <input
          id="id3"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 3"
        />
        Grade 3
        <br />
        <input
          id="id4"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 4"
        />
        Grade 4
        <br />
        <input
          id="id5"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 5"
        />
        Grade 5
        <br />
        <input
          id="id6"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 6"
        />
        Grade 6
        <br />
        <input
          id="id7"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 7"
        />
        Grade 7
        <br />
        <input
          id="id8"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 8"
        />
        Grade 8
        <br />
        <input
          id="id9"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 9"
        />
        Grade 9
        <br />
        <input
          id="id10"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 10"
        />
        Grade 10
        <br />
        <input
          id="id11"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 11"
        />
        Grade 11
        <br />
        <input
          id="id12"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Grade 12"
        />
        Grade 12
      </div>
    );
  }
}
export default FilterGrade;
