import React from "react";

function Navigation(props) {
  const tabs = ['Daily Duties', 'Duty Docket', 'Duty Delegation'];
  return (
    <div className="tabs">
      <ul className="nav  u-pull-left mr-4">
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item border_" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link" : "nav-link"
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