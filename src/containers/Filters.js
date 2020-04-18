import Filters from "../components/Filters.jsx";
import { selectFilterStatus, selectFilterComplaints, selectFilterAccepter, reset, onShow, asyncTest } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    statusValue: state.filterStatus,
    complaintsValue: state.filterComplaints,
    accepterValue: state.filterAccepters,
    showValue: state.showValue
})

const mapDispatchToProps = dispatch => ({
    onShow: () => dispatch(onShow()),
    statusOnChange: event => dispatch(selectFilterStatus(event.target.value)),
    complaintsOnChange: event => dispatch(selectFilterComplaints(event.checked)),
    accepterOnChange: event => dispatch(selectFilterAccepter(event.target.value)),
    onRecet: () => dispatch(reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);