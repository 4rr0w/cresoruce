import React, {useState, useEffect} from 'react';
import Airtable from 'airtable';
import { PropertySafetyFilled } from '@ant-design/icons';
import Slider from "react-slick";
import BloodCard from "./bloodCard";
import PlasmaCard from "./plasmaCard";
import OxyCard from "./oxyCard";
import AmbulanceCard from "./ambulanceCard";
import BedCard from "./bedCard";
import MedsCard from "./medsCard";



const apiKey = "keyC4NFywqgWGwC7B";

const plasmaBase = "appksE0LayB0HVuhu";
const bloodBase = "appho26Qjbdqg4DQk";
const medsBase = "appmHasw2A4d2wHua";
const ambulanceBase = "appC8O8NU5CTQ9r0p";
const bedBase = "appUNjJmLkP1skjA1";
const oxygenBase = "appUNLEItScN5Be4i";


function Results(props) {

    console.log(props.med);

    const oxybase = new Airtable({apiKey: apiKey}).base(oxygenBase);
    const bbase = new Airtable({apiKey: apiKey}).base(bloodBase);
    const pbase = new Airtable({apiKey: apiKey}).base(plasmaBase);
    const medbase = new Airtable({apiKey: apiKey}).base(medsBase);
    const bedbase = new Airtable({apiKey: apiKey}).base(bedBase);
    const abase = new Airtable({apiKey: apiKey}).base(ambulanceBase);

    const [plasmaelements, setPlasmaelements] = useState([]);   

    const [bloodelements, setBloodelements] = useState([]);  
    
    const [oxyelements, setOxyelements] = useState([]);
   
    const [medelements, seteMedelements] = useState([]);   

    const [bedelements, setBedelements] = useState([]);  
    
    const [ambulanceelements, setAmbulanceelements] = useState([]);

    useEffect(() => {

        oxybase("resources")
            .select({ view : "Grid view" })
            .eachPage((records, fetchNextPage) => {
            setOxyelements(records);
            fetchNextPage();
        });

        bbase("resources")
            .select({ view : "Grid view" })
            .eachPage((records, fetchNextPage) => {
            setBloodelements(records);
            fetchNextPage();
        });

        pbase("resources")
            .select({ view : "Grid view" })
            .eachPage((records, fetchNextPage) => {
            setPlasmaelements(records);
            fetchNextPage();
        });

        medbase("resources")
            .select({ view : "Grid view" })
            .eachPage((records, fetchNextPage) => {
            seteMedelements(records);
            fetchNextPage();
        });

        bedbase("resources")
            .select({ view : "Grid view" })
            .eachPage((records, fetchNextPage) => {
            setBedelements(records);
            fetchNextPage();
        });

        abase("resources")
            .select({ view : "Grid view" })
            .eachPage((records, fetchNextPage) => {
            setAmbulanceelements(records);
            fetchNextPage();
        });
    }, [props.req]);


    var settings = {
        dots: false,
        infinite: false,
        speed: 50,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        responsive: [

            {
                breakpoint: 1440, // width to change options
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  initialSlide: 1
                }
              },

            {
              breakpoint:1000, // width to change options
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            // {
            //     breakpoint: 400,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1,
            //       initialSlide: 1
            //     }
            //   }
          ]

      };
     
   
    const bloodResourcesSlide =  bloodelements.filter(element => 

        element.fields["blood-group"] === props.bloodGroup && element.fields["region"] === props.region

    ).map( (data) => <div> <BloodCard data = {data} /> </div>);


    const plasmaResourcesSlide = plasmaelements.filter(element => 

        element.fields["region"] === props.region

    ).map( (data) => <div> <PlasmaCard data = {data}/> </div>);


    const oxyResourcesSlide = oxyelements.filter(element => 

        element.fields["region"] === props.region && element.fields["type"] === props.oxy

    ).map( (data) => <div> <OxyCard data = {data} /> </div>);


    const medResourcesSlide =  medelements.filter(element => 

        element.fields["region"] === props.region && props.med.map( m => element.fields["meds-name"].includes(m)).includes(true)

    ).map( (data) => <div> <MedsCard data ={data} /> </div>);


    const bedResourcesSlide = bedelements.filter(element => 

        element.fields["region"] === props.region

    ).map( (data) => <div> <BedCard data = {data} /> </div>);


    const ambulanceResourcesSlide = ambulanceelements.filter(element => 

        element.fields["region"] === props.region

    ).map( (data) => <div> <AmbulanceCard data= {data} /> </div>);



  return (

       
        <div className="container mb-5">
            {
                props.req.length !== 0 &&
                <>
                    {
                        props.req.some(r =>  r === "Blood") &&
                        <>
                            <Slider {...settings} className="m-auto">             
                        
                                    { 
                                        bloodResourcesSlide
                                    }
                                
                            </Slider>

                                <hr
                                    style={{
                                        borderTop: "1px solid grey",
                                        width: "80%",
                                    }}
                                />

                        </>
                    }

                    {
                        props.req.some(r =>  r === "Plasma") &&
                        <>
                    

                            <Slider {...settings}>  
                        

                                    {
                                        plasmaResourcesSlide
                                    }

                            </Slider>

                                <hr
                                    style={{
                                        borderTop: "1px solid grey",
                                        width: "80%"
                                    }}
                                />
                        </>
                    }

                    {
                        props.req.some(r =>  r === "Oxygen") &&
                        <>
                            <Slider {...settings}>  
                        

                                    {
                                        oxyResourcesSlide
                                    }

                            </Slider>

                            <hr
                                    style={{
                                        borderTop: "1px solid grey",
                                        width: "80%",
                                    }}
                                />
                        </>
                    }

                    {
                         props.req.some(r =>  r === "Bed") &&
                         <>

                            <Slider {...settings}>  
                                            

                                    {
                                        bedResourcesSlide
                                    }

                            </Slider>

                            <hr
                                    style={{
                                        borderTop: "1px solid grey",
                                        width: "80%",
                                    }}
                                />

                         </>
                        
                    }

                    {
                        
                        props.req.some(r =>  r === "Ambulance") &&
                        <>


                        <Slider {...settings}>  
                    

                                {
                                    ambulanceResourcesSlide
                                }

                        </Slider>

                        <hr
                                style={{
                                    borderTop: "1px solid grey",
                                    width: "80%"
                                }}
                            />
                        </>
                    }
                   
                   {
                    props.req.some(r =>  r === "Medicines") &&
                    <>

                   


                    <Slider {...settings}>  
                   

                            {
                                medResourcesSlide
                            }

                    </Slider>

                    </>
                    }
                </>
            }
        </div>
  );
}

export default Results;
