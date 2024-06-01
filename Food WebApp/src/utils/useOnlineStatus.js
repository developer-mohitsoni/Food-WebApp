import {useState, useEffect} from "react";

const useOnlineStatus = () => {
  //* check if online and offline status are supported by the browser is a eventListener called as:- "online"

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //* boolean value
  return onlineStatus;
};

export default useOnlineStatus;
