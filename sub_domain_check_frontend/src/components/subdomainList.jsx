import React from "react";

const SubdomainList = (props) => {
  return (
    <ul>
      {props.subdomains.map((subdomain) => {
        return <li key={subdomain}>{subdomain}</li>;
      })}
    </ul>
  );
};

export default SubdomainList;
