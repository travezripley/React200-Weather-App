import React from "react";
import Search from "./components/Search/";
import CityInformation from "./components/CityInformation/";
import SearchHistory from "./components/SearchHistory/";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Travy's Weather App</h1>
          <p className="lead">It's too hot for pants!</p>
        </div>
        {/* Search component below */}
        <Search />
        {/* City Info box start below */}
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            {/* Component break start below */}
            <CityInformation />
            {/* closing CITY INFO div below */}
          </div>
          {/* Search History box start below */}
          <div className="col-12 col-md-6 mb-4">
            <SearchHistory />
          </div>
          {/* Search History box end above */}
          {/* closing row div for CITY INFO and SEARCH HISTORY below */}
        </div>
        {/* closing container div below */}
      </div>
    );
  }
}
