import Cardlist from "./components/Cardlist";
import SearchBox from "./components/Searchbox";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => {
        console.log(r);
        return r.json();
      })
      .then((user) => {
        console.log(user);
        this.setState({ robots: user });
      });
  }
  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const field = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriend</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={field} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default App;
