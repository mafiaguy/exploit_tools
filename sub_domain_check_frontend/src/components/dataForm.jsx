import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class DataForm extends Form {
  state = {
    data: { domain: "", subdomainList: "" },
    errors: { domain: "", subdomainList: "" },
  };
  schema = {
    domain: Joi.string().required().label("Domain"),
    subdomainList:Joi.string()
  };
  doSubmit = () => {
    // console.log(this);
    this.props.doSubmit(this.state.data);
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          {this.renderInput("domain", "Domain")}
          {this.renderInput("subdomainList", "Subdomain List")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default DataForm;
