import React, { Component } from "react";

class FilterTopic extends Component {
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
    console.log(target);
    console.log(mark);
    console.log(other);
    this.setState({
      [other]: mark
    });
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
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Technology and Innovation"
        />
        Technology and Innovation
        <br />
        <input
          id="idearth"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Earth and Science"
        />
        Earth and Science
        <br />
        <input
          id="idscience"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Science"
        />
        Science
        <br />
        <input
          id="idphys"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="Physical Science"
        />
        Physical Science
        <br />
        <input
          id="idstem"
          type="checkbox"
          onChange={this.handleInputChange}
          onChecked={this.props.filterChange}
          value="STEM Careers"
        />
        STEM Careers
      </div>
    );
  }
}
export default FilterTopic;
