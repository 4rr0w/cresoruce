import React, {useState, useEffect} from 'react';
import Airtable from 'airtable';
import { PropertySafetyFilled } from '@ant-design/icons';
import Slider from "react-slick";
import BloodCard from "./bloodCard";


const apiKey = "keyC4NFywqgWGwC7B";

const plasmaBase = "appksE0LayB0HVuhu";
const bloodBase = "appho26Qjbdqg4DQk";
const medsBase = "appmHasw2A4d2wHua";
const ambulanceBase = "appC8O8NU5CTQ9r0p";
const bedBase = "appUNjJmLkP1skjA1";
const oxygenBase = "appUNLEItScN5Be4i";


function Results(props) {

    const oxybase = new Airtable({apiKey: apiKey}).base(oxygenBase);
    const bbase = new Airtable({apiKey: apiKey}).base(bloodBase);
    const pbase = new Airtable({apiKey: apiKey}).base(plasmaBase);
    const medbase = new Airtable({apiKey: apiKey}).base(medsBase);
    const bedbase = new Airtable({apiKey: apiKey}).base(bedBase);
    const abase = new Airtable({apiKey: apiKey}).base(ambulanceBase);

    const [bloodelements, setBloodelements] = useState([]);   
    

    useEffect(() => {

        // oxybase("resources")
        //     .select({ view : "Grid view" })
        //     .eachPage((records, fetchNextPage) => {
           
        //     fetchNextPage();
        // });

        bbase("resources")
            .select({ view : "Grid view" })
            .eachPage((records, fetchNextPage) => {
                
            setBloodelements(records);
            console.log(records);
            console.log(bloodelements)
            fetchNextPage();
        });

        // pbase("resources")
        //     .select({ view : "Grid view" })
        //     .eachPage((records, fetchNextPage) => {
            
        //     fetchNextPage();
        // });

        // medbase("resources")
        //     .select({ view : "Grid view" })
        //     .eachPage((records, fetchNextPage) => {
           
        //     fetchNextPage();
        // });

        // bedbase("resources")
        //     .select({ view : "Grid view" })
        //     .eachPage((records, fetchNextPage) => {
           
        //     fetchNextPage();
        // });

        // abase("resources")
        //     .select({ view : "Grid view" })
        //     .eachPage((records, fetchNextPage) => {
          
        //     fetchNextPage();
        // });
    }, [props.req]);


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
     

  return (

       
        <div>
            {
                props.req.length !== 0 &&
                <>
                    <Slider {...settings}>             
                        
                            { 
                             bloodelements.map( (resource, index) => {
                                <BloodCard />
                             })
                            }

                            {console.log(bloodelements)}
                        
                            
                    </Slider>
                </>
            }
        </div>
  );
}

export default Results;
