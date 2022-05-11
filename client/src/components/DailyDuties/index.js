import React from 'react';
import 'cirrus-ui';
import { useQuery } from '@apollo/client';
import { QUERY_DUTIES, QUERY_DUTY } from '../../utils/queries';
import DutiesList from '../DutiesList';

function DailyDuties() {
  const {loading, data } = useQuery(QUERY_DUTIES);
  const duties = data?.duties || [];
  //console.log(duties);
 // console.log(dutyDoer)


  return(
  <section id="daily-duties-wrapper">
    <div className="card bg-white p-1">
      <h3>Daily Duties</h3>
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
            <DutiesList duties={duties} />
          )}
        </table>
      </div>
    </div>
  </section>
  )
}

export default DailyDuties;