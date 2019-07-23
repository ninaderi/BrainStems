import React, { Component } from "react";
import { Activities } from "./Activities";

class FilterGrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }
  //--------------------this identifies whether item is checked as true/false
  onCheckChange = e => {
    let target = e.target;
    let isChecked = target.type === "checkbox" ? target.checked : target.value;
    let other = target.other;
    console.log("im the whole target in filtergrade", e.target);
    console.log("im the true/false in filtergrade", isChecked);
    console.log("im just the grade", target.value);
    if (isChecked === true) {
      this.props.onCheckFilter(target.value);
    }
  };

  //when the box is unchecked then the whole list has to return

  render() {
    return (
      <div className="filterbox">
        <div className="filtertitles">
          <b>SEARCH BY GRADE</b>
        </div>
        <input
          id="idk"
          type="checkbox"
          onChange={this.onCheckChange} //identifies true/false
          onChecked={this.onCheckFilter} //filters on this item
          value={0}
        />
        Kindergarten
        <br />
        <input
          id="id1"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={1}
        />
        Grade 1
        <br />
        <input
          id="id2"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={2}
        />
        Grade 2
        <br />
        <input
          id="id3"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={3}
        />
        Grade 3
        <br />
        <input
          id="id4"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={4}
        />
        Grade 4
        <br />
        <input
          id="id5"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={5}
        />
        Grade 5
        <br />
        <input
          id="id6"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={6}
        />
        Grade 6
        <br />
        <input
          id="id7"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={7}
        />
        Grade 7
        <br />
        <input
          id="id8"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={8}
        />
        Grade 8
        <br />
        <input
          id="id9"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={9}
        />
        Grade 9
        <br />
        <input
          id="id10"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={10}
        />
        Grade 10
        <br />
        <input
          id="id11"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={11}
        />
        Grade 11
        <br />
        <input
          id="id12"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value={12}
        />
        Grade 12
      </div>
    );
  }
}
export default FilterGrade;
