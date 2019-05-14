import axios from "axios";

export function updateSearchText(searchText) {
  return {
    type: "UPDATE_SEARCH_TEXT",
    payload: { searchText }
  };
}

export function updateHistory(searchText, dateFormatted, timeFormatted) {
  return {
    type: "UPDATE_HISTORY",
    payload: { searchText, dateFormatted, timeFormatted }
  };
}

export function searchClickFulfilled(searchText) {
  const apiKey = "e4cf742212dcbe7cd70bee9737ad49a8";
  return {
    type: "SEARCH_CLICK",
    payload: axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          searchText +
          "&units=imperial&APPID" +
          apiKey
      )
      .then(response => response.data)
      .catch(err => console.log(err))
  };
}
