import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import SearchBar from "./../widgets/searchbar";
import { Select, Button, Radio, DatePicker, Input } from 'antd';
import { RegionDropdown} from 'react-country-region-selector';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import Results from '../widgets/results';


const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function HomePage(props) {

    const [toggle, setToggle] = useState("a");
    const [requirenments, setRequirenments] = useState([]);
    const [resource, setResource] = useState(''); 

    const [reqMeds, setReqMeds] = useState([]);
    const [oxygenType, setOxygenType] = useState("");
    const [reqBloodGroup, setReqBloodGroup] = useState("");
    const [diagonosedRecovered, setDiagnosedRecovered] = useState([]);
    const [region,  setRegion] = useState("");




    useEffect(()=>{

    }, []);



    return(
        <div className= "container" >
            <div className = "d-flex justify-content-center">
                <h2>
                    COVID-19 RESOURCES DATABASE 
                </h2>
                
            </div>

            <div className="d-flex flex-column mt-5"> 
                <Radio.Group defaultValue="a" buttonStyle="solid" size ="medium" className="m-auto">
                    {/* <Radio.Button value="a" 
                    
                    onClick = {() => {
                        setRequirenments([]);
                        setToggle("a");
                        }
                    }
                    >
                        Search Resources
                    </Radio.Button> */}

                    <Radio.Button value="b"
                        onClick = {() => setToggle("b")}          
                    >
                        Search Resources
                    </Radio.Button>

                    <Radio.Button value="c"
                        onClick = {() => {
                            setToggle("c");
                            setRequirenments([]);
                            }
                        } 
                    >
                        Add Resources
                    </Radio.Button>
                </Radio.Group>
            </div>
            
            {
            toggle === "a" &&
            <div className = "d-flex justify-content-center mt-3">
                <SearchBar 
                    size = "large" 
                    placeholder = "Search Resources" 
                /> 
            </div>
            }
            
            <div className="d-flex flex-column mt-5"> 
                {
                toggle === "b" &&
                
                <div className="m-auto">
                    <div className="row d-flex justify-content-center" > 

                        <Select
                                mode="multiple"
                                size="large"
                                placeholder="Select Requirenments"
                                onChange= {(array) => setRequirenments(array)}
                                style={{ width: '30%', minWidth: "250px" , margin: "5px", maxHeight: "80px", overflow: 'auto' }}
                            >
                                <Option value="Oxygen">Oxygen</Option>
                                <Option value="Ambulance">Ambulance</Option>
                                <Option value="Bed">Hospital Beds</Option>
                                <Option value="Medicines">Medicine / Injections</Option>
                                <Option value="Plasma">Plasma Donor</Option>
                                <Option value="Blood">Blood Donor</Option>
                        </Select>

                      


{
                         requirenments.some(r =>  r === "Medicines") &&

                        <Select
                                mode="multiple"
                                size="large"
                                placeholder="Required Medicines"
                                onChange= {(array) => setReqMeds(array)}
                                style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "80px", overflow: 'auto'}}
                            >
                                <Option value="1">Remdesivir (Veklury)</Option>
                                <Option value="2">Dexamethasone</Option>
                                <Option value="3">Hydroxychloroquine</Option>
                                <Option value="4">Azithromycin</Option>
                                <Option value="5">Tocilizumab (Actemra)</Option>
                        </Select>


                        }

{
                            requirenments.some(r =>  r === "Oxygen") &&

                        <Select
                            mode="single"
                            size="large"
                            placeholder="Oxygen resource type"
                            onChange= {(oxy) => setOxygenType(oxy)}
                            style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "40px", overflow: 'auto'}}
                        >
                            <Option value="Refill">Cylinder Refill</Option>
                            <Option value="Cylinder">Cylinder</Option>
                            <Option value="Concentrator">Oxygen Concentrator</Option>
                        </Select>


                        }

{
                        requirenments.some(r => r === "Blood" || r === "Plasma") &&
                        <>
                        <Select
                                mode="single"
                                size="large"
                                placeholder="Required Blood Group"
                                onChange= {(a) => setReqBloodGroup(a)}
                                style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "40px"}}
                            >
                                <Option value="A+">A+</Option>
                                <Option value="A-">A-</Option>
                                <Option value="B+">B+</Option>
                                <Option value="B-">B-</Option>
                                <Option value="O+">O+</Option>
                                <Option value="O-">B-</Option>
                                <Option value="AB+">O+</Option>
                                <Option value="AB-">B-</Option>
                        </Select>

                        {/* {
                            requirenments.some(r =>  r === "Plasma") &&
                            <>
                                 <RangePicker 
                                    style={{height: "40px", margin: "5px", minWidth : "250px", width: "30%"}}
                                    placeholder = {["Diagonosed after", "Recovered before"]}
                                    picker = "month"
                                    onChange = {(date, dateString) => setDiagnosedRecovered(dateString)} 
                                />
                            </>
                        } */}
                       
                        </>
                        }

                        <RegionDropdown
                            style ={{padding: "5px", margin : "5px", width: "30%", minWidth : "250px", maxHeight: "40px" }}
                            country="India"
                            value={region}
                            onChange={(val) => setRegion(val)} 
                        />
                        
                    </div>

                    {/* <div className="row m-auto mt-5" >
                        <Button type="primary" style={{width:"100%",marginTop: "20px"}} shape="round" icon={<SearchOutlined />} size="large">
                            Search
                        </Button>
                    </div> */}


                

                </div>
                }

                   
            </div>


            <div className="d-flex flex-column"> 
                {
                toggle === "c" &&
                
                <div className="m-auto">
                    <div className="row d-flex justify-content-center" > 

                        <Select
                                mode="single"
                                size="large"
                                placeholder="Resource Type"
                                onChange= {(value) => setResource(value)}
                                style={{ width: '30%', minWidth: "250px" , margin: "5px", maxHeight: "40px" }}
                            >
                                <Option value="Oxygen">Oxygen</Option>
                                <Option value="Ambulance">Ambulance</Option>
                                <Option value="Bed">Hospital Beds</Option>
                                <Option value="Medicines">Medicine / Injections</Option>
                                <Option value="Plasma">Plasma Donor</Option>
                                <Option value="Blood">Blood Donor</Option>
                        </Select>

                        {
                         (resource === "Plasma" || resource === "Blood") &&
                        
                        <Select
                                mode="single"
                                size="large"
                                placeholder="Donor Blood Group"
                                onChange= {(a) => console.log(a)}
                                style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "40px"}}
                            >
                                <Option value="A+">A+</Option>
                                <Option value="A-">A-</Option>
                                <Option value="B+">B+</Option>
                                <Option value="B-">B-</Option>
                                <Option value="O+">O+</Option>
                                <Option value="O-">B-</Option>
                                <Option value="AB+">AB+</Option>
                                <Option value="AB-">AB-</Option>
                        </Select>
                        }
                        {
                        resource === "Plasma" &&
                        <RangePicker 
                            style={{height: "40px", margin: "5px", minWidth : "250px", width: "30%"}}
                            placeholder = {["Diagonosed on", "Recovered on"]}
                        />
                    
                        
                        }

                        {
                         resource === "Medicines" &&

                        <Select
                                mode="multiple"
                                size="large"
                                placeholder="Availible Medicines"
                                onChange= {(a) => console.log(a)}
                                style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "80px", overflow: 'auto'}}
                            >
                                <Option value="1">Remdesivir (Veklury)</Option>
                                <Option value="2">Dexamethasone</Option>
                                <Option value="3">Hydroxychloroquine</Option>
                                <Option value="4">Azithromycin</Option>
                                <Option value="5">Tocilizumab (Actemra)</Option>
                        </Select>


                        }

                        {
                         resource === "Bed" &&
                        <>
                        <Select
                                mode="single"
                                size="large"
                                placeholder="Bed Type"
                                onChange= {(a) => console.log(a)}
                                style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "80px", overflow: 'auto'}}
                            >
                                <Option value="1">Oxygen Bed</Option>
                                <Option value="2">ICU Bed</Option>
                                <Option value="3">Both</Option>
                            </Select>

                        <Input
                             placeholder="Hospital Name"
                             onChange= {(a) => console.log(a)}
                             style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "80px", overflow: 'auto'}}
                        />

                        <Input
                             placeholder="Hospital Address"
                             onChange= {(a) => console.log(a)}
                             style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "80px", overflow: 'auto'}}
                        />

                        <Input
                             placeholder="Number of beds as of today"
                             onChange= {(a) => console.log(a)}
                             style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "80px", overflow: 'auto'}}
                        />
                        
                        </>

                        }

                        {
                            resource === "Oxygen" &&

                            <Select
                            mode="single"
                            size="large"
                            placeholder="Type"
                            onChange= {(a) => console.log(a)}
                            style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "80px", overflow: 'auto'}}
                        >
                            <Option value="Refill">Cylinder Refill</Option>
                            <Option value="Cylinder">Cylinder</Option>
                            <Option value="Concentrator">Oxygen Concentrator</Option>
                        </Select>


                        }

                        <Input
                             placeholder="Contact Number"
                             onChange= {(a) => console.log(a)}
                             style={{ width: '30%', minWidth: "250px", margin: "5px", maxHeight: "80px", overflow: 'auto'}}
                        />

                        <RegionDropdown
                            style ={{padding: "5px", margin : "5px", width: "30%", minWidth : "250px", maxHeight: "40px" }}
                            country="India"
                            value={region}
                            onChange={(val) => setRegion(val)} 
                        />

                        <Input
                             placeholder="Additional Contact / Info / Remarks"
                             onChange= {(a) => console.log(a)}
                             style={{ width: '30%', minWidth: "250px", margin: "5px", padding: "5px", minHeight : "40px"}}
    
                        />
                        
                    </div>

                    <div className="row" style = {{marginTop: "50px"}}>
                        <Button type="" style={{width:"100%",marginTop: "20px"}} shape="round" icon={<PlusOutlined />} size="large">
                            Add Resource
                        </Button>
                    </div>


                

                </div>
                }

                   
            </div>
            <hr
                style={{
                    borderTop: "2px solid black",
                    width: "100%"
                }}
            />
            {
                toggle === 'b' &&
            
            <Results
                req = {requirenments}
                med = {reqMeds}
                oxy = {oxygenType}
                bloodGroup = {reqBloodGroup}
                timeline = {diagonosedRecovered}
                region = {region}
            />

            }
        </div>
    );
}

export default HomePage;