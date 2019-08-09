import React, { Component } from "react";

class FilterTopicComp extends Component {
  constructor(props) {
    super(props);
    this.array = [];
    this.state = {
      isChecked: false
    };
  }

  combineTopicArray = value => {
    this.array.push(value);
  };

  popTopicArray = value => {
    this.array.pop(value);
  };

  onCheckChange = e => {
    let target = e.target;
    let isChecked = target.type === "checkbox" ? target.checked : target.value;
    console.log("im the whole target in filtertopic", e.target);
    // console.log("im the true/false in filtertopic", isChecked);
    // console.log("im just the topic", target.value);

    if (isChecked === true) {
      this.combineTopicArray(target.value);
      // console.log("array is ", this.array)
    } else {
      this.popTopicArray(target.value);
      // console.log("array is now", this.array)
    }
    this.props.onCheckFilterTopic(this.array);
  };
  render() {
    return (
      <div className="filterbox">
        <div className="filtertitles">
          <b>SEARCH BY TOPIC</b>
        </div>
        <input
          id="idtech"
          type="checkbox"
          onChange={this.onCheckChange}
          // onChecked={this.onCheckFilter}
          value="Technology and Innovation"
        />
        Technology and Innovation
        <br />
        <input
          id="idearth"
          type="checkbox"
          onChange={this.onCheckChange}
          //onChecked={this.onCheckFilter}
          value="Earth and Science"
        />
        Earth and Science
        <br />
        <input
          id="idscience"
          type="checkbox"
          onChange={this.onCheckChange}
          //onChecked={this.onCheckFilter}
          value="Science"
        />
        Science
        <br />
        <input
          id="idphys"
          type="checkbox"
          onChange={this.onCheckChange}
          // onChecked={this.onCheckFilter}
          value="Physical Science"
        />
        Physical Science
        <br />
        <input
          id="idstem"
          type="checkbox"
          onChange={this.onCheckChange}
          // onChecked={this.onCheckFilter}
          value="STEM Careers"
        />
        STEM Careers
      </div>
    );
  }
}
export default FilterTopicComp;
