import { connect } from "react-redux";
import History from "./History";

function mapStoreToProps(store) {
  return {
    history: store.search.history
  };
}
export default connect(mapStoreToProps)(History);
