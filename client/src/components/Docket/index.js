import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { QUERY_ME_DUTIES } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const locales = {
  "en-US": require("date-fns/locale/en-US")
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});
const myDutyList = [
  { start: new Date(), end: new Date(), title: "special event" }
];


export default function Docket () {
  const { loading, data: userData } = useQuery(QUERY_ME_DUTIES);


  return (
    <div id="calendar-wrapper" className="card p-4">
      <Calendar
        localizer={localizer}
        duties={userData.me.duties}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

