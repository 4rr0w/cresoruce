import React, {useState, useEffect} from 'react';
import Airtable from 'airtable';

const apiKey = "keyC4NFywqgWGwC7B";

const plasmaBase = "appksE0LayB0HVuhu";
const bloodBase = "appho26Qjbdqg4DQk";
const medsBase = "appmHasw2A4d2wHua";
const ambulance = "appC8O8NU5CTQ9r0p";
const bed = "appUNjJmLkP1skjA1";
const oxygen = "appUNLEItScN5Be4i";


const base = new Airtable({apiKey: apiKey}).base(bloodBase);

function Results(props) {

    useEffect(() => {
        base("resources")
            .select({ view : "Grid view" })
            .eachPage((records, fetchNextPage) => {
            console.log(records);
            fetchNextPage();
        });
    }, []);
  

  return (
    <div>
    </div>
  );
}

export default Results;
