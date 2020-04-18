import React from "react";
import PropTypes from "prop-types";

const Filters = ({ statusValue, statusOnChange, complaintsValue, complaintsOnChange, accepterValue, accepterOnChange, onRecet, showValue, onShow }) => {
    if (showValue) {
        return (
            <div className="filters">
                <button onClick={onShow}>HIDE</button>
                <select name="Choose status" value={statusValue} onChange={statusOnChange} className="selectCountry">
                    <option value="all">All</option>
                    <option value="waiting">Waiting</option>
                    <option value="performing">Performing</option>
                    <option value="finished">Finished</option>
                </select>

                <label htmlFor="complaints" className="marg">With complaints</label><input name="complaints" checked={complaintsValue} type="checkbox" onChange={complaintsOnChange} className="checkBox" />
                <label htmlFor="accepter" className="marg">Accepter</label><input name="accepter" type="text" value={accepterValue} onChange={accepterOnChange} />
                <button onClick={onRecet} className="resetBtn">Reset</button>
            </div>
        )
    } else {
        return <button onClick={onShow} className="show-btn">SHOW</button>
    }
}

Filters.propTypes = {
    statusValue: PropTypes.string.isRequired,
    statusOnChange: PropTypes.func.isRequired,
    complaintsValue: PropTypes.bool.isRequired,
    complaintsOnChange: PropTypes.func.isRequired,
    accepterValue: PropTypes.string,
    accepterOnChange: PropTypes.func.isRequired,
    onRecet: PropTypes.func.isRequired,
    showValue: PropTypes.bool.isRequired,
    onShow: PropTypes.func.isRequired
}

export default Filters;