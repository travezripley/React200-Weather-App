const defaultState = {
  searchText: "",
  lon: "",
  lat: "",
  icon: "",
  temp: "",
  pressure: "",
  humidity: "",
  temp_min: "",
  temp_max: "",
  windSpeed: "",
  name: "",
  id: "",
  noResult: true,
  pending: false,
  history: []
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_SEARCH_TEXT": {
      return {
        ...state,
        searchText: payload.searchText
      };
    }

    case "UPDATE_HISTORY": {
      return {
        ...state,
        history: [
          ...state.history,
          {
            city: payload.searchText,
            date: payload.dateFormatted,
            time: payload.timeFormatted
          }
        ]
      };
    }

    case "SEARCH_CLICK_PENDING": {
      return {
        ...state,
        pending: true
      };
    }

    case "SEARCH_CLICK_FULFILLED": {
      return {
        ...state,
        lon: payload.coord.lon,
        lat: payload.coord.lat,
        icon: payload.weather[0].icon,
        temp: payload.main.temp,
        pressure: payload.main.pressure,
        humidity: payload.main.humidity,
        temp_min: payload.main.temp_min,
        temp_max: payload.main.temp_max,
        windSpeed: payload.wind.speed,
        id: payload.id,
        name: payload.name,
        noResult: true,
        pending: false
      };
    }

    case "SEARCH_CLICK_REJECTED": {
      return {
        ...state,
        pending: false
      };
    }
    default: {
      return state;
    }
  }
}
