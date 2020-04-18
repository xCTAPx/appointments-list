import { combineReducers } from "redux";
import { filterStatus, filterComplaints, filterAccepters } from "./filters";
import visits from "./visits";
import showValue from "./show";

export default combineReducers({
  showValue,
  filterStatus,
  filterComplaints,
  filterAccepters,
  visits
});
