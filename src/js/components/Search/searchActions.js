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
      .get(`
      https://api.openweathermap.org/data/2.5/weather?q=${searchText}&APPID=e4cf742212dcbe7cd70bee9737ad49a8&units=imperial`
      
      )
      .then(response => response.data)
      .catch(err => console.log(err))
  };
}
