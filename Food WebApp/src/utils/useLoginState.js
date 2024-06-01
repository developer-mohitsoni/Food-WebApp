import {useState} from "react";

const useLoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return { isLoggedIn, toggleLogin };
};

export default useLoginState;