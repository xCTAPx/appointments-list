// FILTERS FIELD

export const selectFilterStatus = filter => ({
  type: "SELECT_FILTER_STATUS",
  filter
});

export const selectFilterComplaints = () => ({
  type: "SELECT_FILTER_COMPLAINTS",
})

export const selectFilterAccepter = filter => ({
  type: "SELECT_FILTER_ACCEPTER",
  filter
})

export const reset = () => ({
  type: "RESET"
})

export const onShow = () => ({
  type: "SHOW"
})

// WORK WITH TABLE

let id = 1;

export const addVisit = accepter => ({
  type: "ADD_VISIT",
  id: id++,
  status: "waiting",
  accepter,
  complaints: 0
});

export const changeStatus = id => ({
  type: "CHANGE_STATUS",
  id
});

export const addComplaint = id => ({
  type: "ADD_COMPLAINT",
  id
})

// SORT

export const sortById = () => ({
  type: "SORT_ID"
})

export const sortByAccepter = () => ({
  type: "SORT_ACCEPTER"
})

export const sortByStatus = () => ({
  type: "SORT_STATUS"
})

export const sortByComplaints = () => ({
  type: "SORT_COMPLAINTS"
})