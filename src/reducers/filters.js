const filterStatus = (state = "all", action) => {
    switch (action.type) {
        case "SELECT_FILTER_STATUS":
            return action.filter;
        case "RESET":
            return "all";
        default:
            return state;
    }
};

const filterComplaints = (state = false, action) => {
    switch (action.type) {
        case "SELECT_FILTER_COMPLAINTS":
            return !state;
        case "RESET":
            return false;
        default:
            return state;
    }
};

const filterAccepters = (state = "", action) => {
    switch (action.type) {
        case "SELECT_FILTER_ACCEPTER":
            return action.filter;
        case "RESET":
            return "";
        default:
            return state;
    }
}

export { filterStatus, filterComplaints, filterAccepters };