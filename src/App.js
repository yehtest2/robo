import React, { useState, useEffect } from "react";
import Cardlist from "./components/Cardlist";
import SearchBox from "./components/Searchbox";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";

function App() {
  const [robots, setRobots] = useState([]);
  const [count, setCount] = useState(0);
  const [searchfield, setSearchfields] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((u) => {
        setRobots(u);
      });
  }, []);
  const onSearchChange = (e) => {
    setSearchfields(e.target.value);
  };

  const field = robots.filter((robot) => {
    // console.log(robot);
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  const a = () => {
    if (count === 10) {
      setSearchfields("Bauch");
    } else {
      setCount(count + 1);
    }
    console.log(count);
  };
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h2>{count}</h2>
      <h1>RoboFriend</h1>
      <SearchBox searchChange={onSearchChange} />
      <button onClick={a}>Chick me</button>
      <Scroll>
        <ErrorBoundry>
          <Cardlist robots={field} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
