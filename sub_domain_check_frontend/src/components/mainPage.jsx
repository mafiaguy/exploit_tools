import React, { Component } from "react";
import DataForm from "./dataForm";
import SubdomainList from "./subdomainList";
import http from "../services/httpServices";
import config from "./config.json";

class MainPage extends Component {
  state = { subdomains: [] };

  doSubmit = async (data) => {
    //   const subdomains = data;
    console.log(data);
    const obj = {
      domain: data.domain,
      subdomains_list: data.subdomainList,
    };
    console.log(JSON.stringify(obj));
    const api_data = await http.post(config.apiEndpoint, JSON.stringify(obj));
    console.log(api_data.data);
    const { subdomains } = api_data.data;
    console.log("garvit", subdomains);
    this.setState({ subdomains });
  };
  render() {
    return (
      <div>
        <DataForm doSubmit={this.doSubmit} />
        <SubdomainList subdomains={this.state.subdomains} />
      </div>
    );
  }
}

export default MainPage;
