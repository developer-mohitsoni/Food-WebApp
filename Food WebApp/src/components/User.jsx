import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    if (count > 0) setCount(count - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("React Grand Master");
    }, 1000);

    console.log("useEffect"); //* Second called useEffect this

    // This function is called when you Unmounting it (This is just like as Unmounting Phase)
    return () => {
      clearInterval(timer);
      console.log("useEffect return"); //* Third called useEffect return after i leaving the page
    };
  }, []);

  console.log("render"); //* First render this

  return (
    <div className="pt-2.5 border-[1px] border-solid border-black">
      <h1>Count = {count}</h1>
      <button onClick={handleClick}>Count Increase</button>&nbsp;&nbsp;
      <button onClick={handleClick2}>Count Decrease</button>
      <h2>Name: {name}</h2>
      <h3>Location: UttarPradesh</h3>
      <h4>Contact: developer_mohitsoni@outlook.com</h4>
    </div>
  );
};
export default User;
