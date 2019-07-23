import React, { Component } from "react";
import { Activities } from "./Activities";

class FilterTopic extends Component {
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
    console.log("im the whole target in filtertopic", e.target);
    console.log("im the true/false in filtertopic", isChecked);
    console.log("im just the topic", target.value);
    if (isChecked === true) {
      this.props.onCheckFilter(target.value);
    }
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
          onChecked={this.onCheckFilter}
          value="Technology and Innovation"
        />
        Technology and Innovation
        <br />
        <input
          id="idearth"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value="Earth and Science"
        />
        Earth and Science
        <br />
        <input
          id="idscience"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value="Science"
        />
        Science
        <br />
        <input
          id="idphys"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value="Physical Science"
        />
        Physical Science
        <br />
        <input
          id="idstem"
          type="checkbox"
          onChange={this.onCheckChange}
          onChecked={this.onCheckFilter}
          value="STEM Careers"
        />
        STEM Careers
      </div>
    );
  }
}
export default FilterTopic;
