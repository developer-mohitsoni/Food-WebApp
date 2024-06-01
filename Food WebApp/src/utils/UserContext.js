import { createContext } from "react";

// Now this Context can be access anywhere in my App So, it's can be able to solve the problem of Props Drilling
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
