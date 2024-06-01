import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
        // avatar_url: "https://dummy-photo.com",
      },
    };

    console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    //console.log(this.props.name + " Child Component DidMount");
    //* API Call

    /*
    const data = await fetch("https://api.github.com/users/akshaymarch7");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    */

    this.timer = setInterval(() => {
      console.log("React Grand Master");
    }, 1000);

    // console.log(json);
  }

  //* Suppose i want to do something when count is changing and i want to do something when my count2 chnaging. So, in Class Based Component we can do like this:-

  //* This is a hactic way to do this process in ClassBasedComponent.

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      // code for count1
    }

    if (prevState.count2 !== this.state.count2) {
      // code for count1
    }
    console.log("Component DidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + " Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="pt-2.5 border-[1px] border-solid border-black">
        <img src={avatar_url} alt="Akshay Saini Profile" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;

/*
 * ------- MOUNTING CYCLE --------
 *  Constructor (dummy)
 *  Render (dummy)
 *      <HTML Dummy>
 *  Component Did Mount
 *      <API CALL>
 *      <this.setState>  -> state variale is updated
 *
 * ------- UPDATING CYCLE --------
 *      render(API data)
 *      <HTML (new API data)>
 *      componentDidUpdate
 *
 *
 *
 *
 */
