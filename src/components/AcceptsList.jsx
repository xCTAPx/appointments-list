import React from "react";
import Accept from "./Accept.jsx";
import PropTypes from "prop-types";

const AcceptsList = ({ visits, changeStatus, addComplaint, sortById, sortByComplaints, sortByAccepter, sortByStatus }) => {
  if (visits.length) {
    return (
      <table>
        <tbody>
          <tr>
            <td className="tdId hover" onClick={sortById}>ID</td>
            <td className="tdAccepter hover" onClick={sortByAccepter}>Performer</td>
            <td className="tdStatus hover" onClick={sortByStatus}>Status</td>
            <td className="tdComplaints hover" onClick={sortByComplaints}>Complaints</td>
          </tr>
          {visits.map(visit => (
            <Accept
              key={visit.id}
              id={visit.id}
              accepter={visit.accepter}
              status={visit.status}
              complaints={visit.complaints}
              changeStatus={() => changeStatus(visit.id)}
              addComplaint={() => addComplaint(visit.id)}
            />
          ))}
        </tbody>
      </table>
    );
  } else {
    return <div className="no-results">...No results...</div>;
  }
};

AcceptsList.propTypes = {
  visits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      accepter: PropTypes.string.isRequired,
      complaints: PropTypes.number.isRequired
    })
  ),
  changeStatus: PropTypes.func.isRequired,
  addComplaint: PropTypes.func.isRequired,
  sortById: PropTypes.func.isRequired,
  sortByComplaints: PropTypes.func.isRequired,
  sortByAccepter: PropTypes.func.isRequired,
  sortByStatus: PropTypes.func.isRequired
};

export default AcceptsList;
