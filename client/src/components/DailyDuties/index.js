import React from 'react';
import 'cirrus-ui';
import Nav from '../Nav';
import Header from '../Header';

function DailyDuties() {
  return(
    <div>
      <Header />
      <section id="daily-duties-wrapper">
        <div className="card_container">
          <h3>Daily Duties</h3>
        <div className="daily-inner-content">
          <table className="table">
            <thead>
              <th><abbr title ="Duties">Duties</abbr></th>
              <th><abbr title="Duty-Doers">Duty Doers</abbr></th>
              <th><abbr title="Due-Date">Due Date</abbr></th>
              <th><abbr title="Duty-Distinction">Duty Distinction</abbr></th>
              <th><abbr title="Dut-Deposit">Duty Deposit</abbr></th>
              <th><abbr title="Duty-Description">Duty Description</abbr></th>
            </thead>

            <tbody>
              <tr>
                <td>Clean the tub</td>
                <td>Thomas</td>
                <td>May 12, 2022</td>
                <td>In Progress</td>
                <td>$10.00</td>
                <td>Wash, scrub, and disinfect the tub</td>
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