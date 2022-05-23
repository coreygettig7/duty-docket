import React from "react";

function Navigation(props) {
  const tabs = ['Daily Duties', 'Duty Docket', 'Duty Delegation'];
  return (
    <div className="tabs">
<<<<<<< HEAD
      <ul className="nav  u-pull-left mr-4">
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item border_" : "nav-item"
=======
      <ul className="nav nav-tabs menu-u-pull-left">
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item menu-item selected" : "nav-item menu-item"
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
<<<<<<< HEAD
                props.currentPage === tab ? "navie-link" : "navie-link"
=======
                props.currentPage === tab ? "nav-link" : "nav-link"
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;