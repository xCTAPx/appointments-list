const visits = (state = [], action) => {
  switch (action.type) {
    case "ADD_VISIT":
      return [
        ...state,
        {
          id: action.id,
          accepter: action.accepter,
          status: action.status,
          complaints: action.complaints
        }
      ];
    case "CHANGE_STATUS":
      return state.map(visit => {
        function switchStatus(visit) {
          if (visit.status === "waiting") {
            return { ...visit, status: "performing" }
          } else if (visit.status === "performing") {
            return { ...visit, status: "finished" }
          } else {
            return { ...visit, status: "waiting" }
          }
        }
        return visit.id === action.id ? switchStatus(visit) : visit;
      }
      );
    case "ADD_COMPLAINT":
      return state.map(visit =>
        visit.id === action.id ? { ...visit, complaints: visit.complaints + 1 } : visit
      );
    case "SORT_ID":
      if (state[0].id > state[1].id) return state.sort((a, b) => a.id - b.id).map(visit => visit);
      return state.sort((a, b) => b.id - a.id).map(visit => visit);
    case "SORT_COMPLAINTS":
      if (state[0].complaints > state[1].complaints) return state.sort((a, b) => a.complaints - b.complaints).map(visit => visit);
      return state.sort((a, b) => b.complaints - a.complaints).map(visit => visit); // if the first less then the second
    case "SORT_ACCEPTER":
      if (state[0].accepter > state[1].accepter) return state.sort((a, b) => a.accepter > b.accepter ? 1 : -1).map(visit => visit)
      return state.sort((a, b) => a.accepter > b.accepter ? -1 : 1).map(visit => visit);
    case "SORT_STATUS":
      if (state[0].status > state[1].status) return state.sort((a, b) => a.status > b.status ? 1 : -1).map(visit => visit)
      return state.sort((a, b) => a.status > b.status ? -1 : 1).map(visit => visit);
    default:
      return state;
  }
};

export default visits;
