import React from "react";
import "../style.css";
import PropTypes from "prop-types";

const Accept = ({ id, status, accepter, complaints, changeStatus, addComplaint }) => (
  <tr>
    <td className="tdId">{id}</td>
    <td className="tdAccepter">{accepter}</td>
    <td className="tdStatus" onClick={changeStatus}>
      {status}
    </td>
    <td className="tdComplaints" onClick={addComplaint}>{complaints}</td>
  </tr>
);

Accept.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  accepter: PropTypes.string.isRequired,
  complaints: PropTypes.number.isRequired,
  changeStatus: PropTypes.func.isRequired,
  addComplaint: PropTypes.func.isRequired
};

export default Accept;
