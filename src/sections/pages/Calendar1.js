import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

//put your google calendar api key here
const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY;

//replace calendar id with one you want to test

let calendars = [
  {
    calendarId : process.env.REACT_APP_GOOGLE_CALENDAR_ID, // First calendar ID
    color: "#F352D2"
  },
  {
    calendarId: process.env.REACT_APP_GOOGLE_CALENDAR_ID1, // Second calendar ID
    color: "#B241D1" // color of calendar
  }
];

let styles = {
  //you can use object styles
  calendar: {
    borderWidth: "3px" //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
};

function Calendar1() {
  return (
      <div className="App">
            <body>
              <div
                style={{
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                  width: "90%",
                  margin: "auto",
                  maxWidth: "1200px"
                }}
              >
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
              </div>
            </body>
            </div>
              
  );
}

export default Calendar1;