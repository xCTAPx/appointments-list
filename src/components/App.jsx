import React from "react";
import VisibleAcceptsList from "../containers/VisibleAcceptsList";
import AddAccept from "../containers/AddAccept.jsx";
import Filters from "../containers/Filters";

const App = () => (
  <div>
    <div className="top">
      <AddAccept />
      <Filters />
    </div>
    <VisibleAcceptsList />
  </div>
);

export default App;
