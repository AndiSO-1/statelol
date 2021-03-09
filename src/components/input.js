import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
      this.containerCss = "form-group";
      if (this.props.color == "white")
        this.containerCss = "form-group text-white";
    }

  render() {
    return (
      <div className={this.containerCss}>
        <label>{this.props.name}</label>
        <input type={this.props.type} className="form-control" placeholder={this.props.placeholder} />
      </div>
    );
  }
}
