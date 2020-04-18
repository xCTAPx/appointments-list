import React from "react";
import { connect } from "react-redux";
import { addVisit } from "../actions/index";

const AddAccept = ({ dispatch }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) return;
        dispatch(addVisit(input.value));
        input.value = "";
      }}
    >
      <span>Name of receptionist: </span>
      <input ref={node => (input = node)} />
      <button>Add reception</button>
    </form>
  );
};

export default connect()(AddAccept);
