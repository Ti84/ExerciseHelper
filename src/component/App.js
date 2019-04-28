import React, { Component } from "react";
// import { Router } from "@reach/router";
import "./App.scss";
import TimerPage from "./TimerPage";

// ToDo:
// 1. Add Row Feature
// 2. Edit Rows Feature
// 3. Drop down for Months
// 4. Style Habits Page
// 5. Redux Implemented
// 6. Server Side (Login / Calendar)
// 7. Login Page
// 8. CLIENT SIDE - Activity Breakdowns (Stats on selected activity)
// 9. SERVER SIDE - Activity Breakdowns (Stats on selected activity)
// 10. Accessibility

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Fix github config to get Router working with github pages */}
        {/* <Router> */}
        <TimerPage />
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
