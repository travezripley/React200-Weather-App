import React from "react";
import { connect } from "react-redux";

function SearchHistory(props) {
  let searchHist = props.history.map(data => {
    return (
      <li className="list-group-item" key={date.time}>
        {data.searchedCity}, {data.date}, {date.time}
      </li>
    );
  });

  return (
    <div className="card">
      <h5 className="card-header text-white bg-primary mb-3">Search History</h5>
      <div className="card-body">
        <ul className="list-group">{searchHist}</ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    history: state.data.history
  };
};

export default connect(mapStateToProps)(SearchHistory);
