import AcceptsList from "../components/AcceptsList.jsx";
import { connect } from "react-redux";
import { changeStatus, addComplaint, sortById, sortByComplaints, sortByAccepter, sortByStatus } from "../actions/index";

const getVisibleComplaints = (visit, filter) => {
  switch (filter) {
    case false:
      return true;
    case true:
      return visit.complaints > 0 ? true : false;
    default:
      throw new Error("Unknown filter: " + filter);
  }
}

const getVisibleAccepters = (visit, filter) => {
  if (!filter) {
    return true
  } else {
    return visit.accepter.match(filter) ? true : false;
  }
}

const getVisibleAcceptList = (visits, filter, filterComplaints, filterAccepters) => {
  switch (filter) {
    case "all":
      return visits.filter(visit => getVisibleAccepters(visit, filterAccepters) && getVisibleComplaints(visit, filterComplaints));
    case "waiting":
      return visits.filter(visit => visit.status === "waiting" && getVisibleComplaints(visit, filterComplaints) && getVisibleAccepters(visit, filterAccepters))
    case "performing":
      return visits.filter(visit => visit.status === "performing" && getVisibleComplaints(visit, filterComplaints) && getVisibleAccepters(visit, filterAccepters))
    case "finished":
      return visits.filter(visit => visit.status === "finished" && getVisibleComplaints(visit, filterComplaints) && getVisibleAccepters(visit, filterAccepters))
    default:
      throw new Error("Unknown filter: " + filter);
  }
}

const mapStateToProps = state => ({
  visits: getVisibleAcceptList(state.visits, state.filterStatus, state.filterComplaints, state.filterAccepters)
});

const mapDispatchToProps = dispatch => ({
  changeStatus: id => dispatch(changeStatus(id)),
  addComplaint: id => dispatch(addComplaint(id)),
  sortById: () => dispatch(sortById()),
  sortByComplaints: () => dispatch(sortByComplaints()),
  sortByAccepter: () => dispatch(sortByAccepter()),
  sortByStatus: () => dispatch(sortByStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(AcceptsList);
