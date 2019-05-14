import React from "react";

//import action creators below
import {
  updateSearchText,
  searchClickFulfilled,
  updateHistory
} from "./searchActions";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handlePreLoadedCityClick = this.handlePreLoadedCityClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.createDate = this.createDate.bind(this);
    this.createTime = this.createTime.bind(this);
  }

  createDate() {
    const date = new Date();
    const months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }
    return month + "/" + day + "/" + year;
  }

  createTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (hour < 10) {
      hour = "0" + hour;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }

    if (second < 10) {
      second = "0" + second;
    }
    return hour + ":" + minute + ":" + second;
  }

  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchText(value));
  }

  handlePreLoadedCityClick(event) {
    const { dispatch } = this.props;
    const dateFormatted = this.createDate();
    const timeFormatted = this.createTime();

    dispatch(searchClickFulfilled(event.target.value));
    dispatch(updateSearchText(event.target.value));
    dispatch(timeFormatted(event.target.value, dateFormatted, timeFormatted));
  }

  handleSearchClick() {
    const { searchText, dispatch } = this.props;

    if (searchText == "") {
      return alert("Put some descriptive terms in that lil search box.");
    } else {
      const dateFormatted = this.createDate();
      const timeFormatted = this.createTime();

      dispatch(searchClickFulfilled(searchText));
      dispatch(updateHistory(searchText, dateFormatted, timeFormatted));
    }
  }

  render() {
    const searchText = this.props.searchText;
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className=" nav-item">
            <button
              className="nav-link active border-top border-right border-left border-dark"
              type="button"
            >
              Search
            </button>
          </li>

          <li className=" nav-item">
            <button
              className="nav-link active border-top border-right border-left border-dark"
              type="button"
              value="Chicago"
              onClick={this.handlePreLoadedCityClick}
            >
              Chicago
            </button>
          </li>

          <li className=" nav-item">
            <button
              className="nav-link active border-top border-right border-left border-dark"
              type="button"
              value="New York"
              onClick={this.handlePreLoadedCityClick}
            >
              New York
            </button>
          </li>

          <li className=" nav-item">
            <button
              className="nav-link active border-top border-right border-left border-dark"
              type="button"
              value="London"
              onClick={this.handlePreLoadedCityClick}
            >
              London
            </button>
          </li>

          <li className=" nav-item">
            <button
              className="nav-link active border-top border-right border-left border-dark"
              type="button"
              value="Chiang Mai"
              onClick={this.handlePreLoadedCityClick}
            >
              Chiang Mai
            </button>
          </li>

          <li className=" nav-item">
            <button
              className="nav-link active border-top border-right border-left border-dark"
              type="button"
              value="Taipei"
              onClick={this.handlePreLoadedCityClick}
            >
              Taipei
            </button>
          </li>
        </ul>
        {/* search bar start below */}
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            maxLength="24"
            placeholder="Enter a City"
            aria-label="Enter a City"
            aria-describedby="basic-addon2"
            onChange={this.handleSearchInput}
          />
          <div className="input-group-append">
            <button
              className="btn text-white search-button"
              type="button"
              value={searchText}
              onClick={this.handleSearchClick}
            >
              Ride!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
