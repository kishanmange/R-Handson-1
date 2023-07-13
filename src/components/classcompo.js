import React from "react";

class classcompo extends React.Component {
  render() {
    return (
      <div className="compo1">
         <h1>This is created using class component</h1>
    <br />
    <h2 className="text">this is done using external css</h2>
    <h2 style={{color : "orange"}}>this is done using inernal css</h2>
      </div>
    );
  }
}

export default classcompo;
