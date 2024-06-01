import React from "react";
// import {Component} from "react"; // You can use this as well
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component DidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <div className="flex text-xl font-bold">
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React WebSeries</h2>
        <User name={"Mohit Soni"} />
        <UserClass
          name={"Mohit Soni (class)"}
          location={"UttarPradesh"}
          contact={"developer_mohitsoni@outlook.com"}
        />
      </div>
    );
  }
}

export default About;

/*
 * - Parent Constructor
 *  - Parent render
 *    - Mohit Functional Component Render
 *
 *    - Mohit Child Constructor
 *    - Mohit render
 *
 *    - Akshay Constructor
 *    - Akshay render
 *
 *    <DOM UPDATED - IN SINGLE BATCH>\
 *    - Mohit ComponentDidMount
 *    - Akshay ComponentDidMount
 *
 *  - Parent ComponentDidMount
 *
 */
