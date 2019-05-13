import { connect } from "react-redux";
import CityInformation from "./CityInformation";

function mapStoreToProps(store) {
  return {
    searchText: store.search.searchText,
    lon: store.search.lon,
    lat: store.search.lat,
    icon: store.search.icon,
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    temp_min: store.search.temp_min,
    temp_max: store.search.temp_max,
    windSpeed: store.search.windSpeed,
    id: store.search.id,
    name: store.search.name,
    noResult: store.search.noResult,
    pending: store.search.pending,
    selectedCity: store.search.selectedCity
  };
}

export default connect(mapStoreToProps)(CityInformation);
