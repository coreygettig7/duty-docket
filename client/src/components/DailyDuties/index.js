import React from 'react';
import 'cirrus-ui';
import { useQuery } from '@apollo/client';
import { QUERY_ME_DUTIES } from '../../utils/queries';
import Auth from '../../utils/auth';
import DutiesList from '../DutiesList';

function DailyDuties() {
  const { loading, data: userData } = useQuery(QUERY_ME_DUTIES);
  const loggedIn = Auth.loggedIn();

  return(
  <section id="daily-duties-wrapper" className={`${loggedIn && userData}`}>
    <div className="card bg-white p-3">
      <h3 className="dark-text">Daily Duties</h3>
      <div className="daily-inner-content">
        <table className="table">
          <thead>
            <th><abbr title ="Duties">Duties</abbr></th>
            <th><abbr title ="Created-Date">Date Created</abbr></th>
            <th><abbr title="Due-Date">Due Date</abbr></th>
            <th><abbr title="Duty-Distinction">Duty Distinction</abbr></th>
            <th><abbr title="Duty-Deposit">Duty Deposit</abbr></th>
          </thead>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <DutiesList duties={userData.me.duties} />
          )}
        </table>
      </div>
    </div>
  </section>
  )
}

export default DailyDuties;