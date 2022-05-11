import React from "react";

function Navigation(props) {
  const tabs = ['Daily Duties', 'Duty Docket', 'Duty Delegation'];
  return (
    <div className="tabs">
      <ul className="nav nav-tabs menu-u-pull-left">
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item menu-item selected" : "nav-item menu-item"
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