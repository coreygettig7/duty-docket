import React from 'react';
import 'cirrus-ui';
import Header from '../Header';

import { useQuery } from '@apollo/client';
import { QUERY_DUTIES } from '../../utils/queries';

function DailyDuties() {
  const { loading, data } = useQuery(QUERY_DUTIES);
  const duties = data?.duties || [];
  console.log(duties);

  return(
    <div>
      <Header />
      <section id="daily-duties-wrapper">
        <div className="card_container">
          <h3>Daily Duties</h3>
        <div className="daily-inner-content">
          <table className="table">
            <thead>
              <th><abbr title="Duty-Doers">Duty Doers</abbr></th>
              <th><abbr title ="Duties">Duties</abbr></th>
              <th><abbr title ="Created-Date">Date Created</abbr></th>
              <th><abbr title="Due-Date">Due Date</abbr></th>
              <th><abbr title="Duty-Distinction">Duty Distinction</abbr></th>
              <th><abbr title="Dut-Deposit">Duty Deposit</abbr></th>
            </thead>

            <tbody>
              <tr>
               
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </section>
    </div>

  )
}

export default DailyDuties;