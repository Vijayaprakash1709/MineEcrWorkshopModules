// import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react"
import "./sty.css";
import { onProposalsLoad, onPropose,Venue,Major,SubReport,Academic} from "./connect"
import Form from 'react-bootstrap/Form';
import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select';
import axios from "axios";

// import Button from 'react-bootstrap/Button';



export const Add=()=>{



    const options = [
        {
          value: 0,
          label: 'Angular',
        },
        {
          value: 1,
          label: 'Bootstrap',
          isDisabled: true,
        },
        {
          value: 2,
          label: 'React.js',
        },
        {
          value: 3,
          label: 'Vue.js',
        },
        {
          label: 'backend',
          options: [
            {
              value: 4,
              label: 'Django',
            },
            {
              value: 5,
              label: 'Laravel',
            },
            {
              value: 6,
              label: 'Node.js',
            },
          ],
        },
      ];

      const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
    // 
    // const [selectedOptions, setSelectedOptions] = useState([]);
    // const [options, setOptions] = useState([]);
  
    // useEffect(() => {
     
    //   axios.get('localhost:1234/seminar/find')
    //     .then((response) => {
          
    //       setOptions(response);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching options:', error);
    //     });
    // }, []);
  
    // const handleChange = (selected) => {
    //   setSelectedOptions(selected);
    // };


        // const [eventType, setEventType] = useState('seminar');
        // const [selectedOptions, setSelectedOptions] = useState([]);

        // const handleChange = (selected) => {
        //   setSelectedOptions(selected);
        // };
  
        const logged=JSON.parse(sessionStorage.getItem("person"))
      
    const[information,setInformation]=useState("")

    const[seminar,setSeminar]=useState({
        "major_id":0,
        "report_id":"",
        "event_name":"",
        "event_title":"",
        "event_organizer":"",
        "event_sponsor":"",
        "event_date":"",
        "event_venue":"",
        "guest_name":"",
        "guest_designation":"",
        "guest_address":"",
        "guest_phone_number":0,
        "guest_email":"",
        "student_count":0,
        "faculty_count":0,
        "others_count":0,
        "event_budget":0,
        "event_coordinator":"",
        "coordinator_emp_id":0,
        "coordinator_phone_number":0,
        "coordinator_designation":0,
        "event_date_from":"0000-00-00",
        "event_date_to":"0000-00-00",
        "acdyr_id":1,
        "dept_id":1,
        "sem_id":0
        
    })
    // console.log(seminar);

    const[proposable,setProposable]=useState([])
    const[venue,setVenue]=useState([])

    const fillPorposals=async()=>{
        const temp = await onProposalsLoad()
        setProposable(temp)
    }

    
    useEffect(()=>{
        Ven();
        Maj();
        fillPorposals()
        Acad();
    })
    const[major,setMajor]=useState([])
        
        const Ven=async()=>{
            const t = await Venue()
            setVenue(t)
            // alert(t)
        }
    const[year,setYear]=useState([])
        const Acad=async()=>{
            const t = await Academic()
            setYear(t)
            // alert(t)
        }
        const Maj=async()=>{
            const t = await Major()
            setMajor(t)
            // alert(t)
        }
        const[sub,setSub]=useState([])
        const Sub=async(mid)=>{
            const t = await SubReport(mid)
            setSub(t)
            // alert(t)
        }
        // let i=0;
        // i=i+1
        // if(i==1){
        //     Maj();
        //     i=i+1
        // }
    // Maj();
    
    
  
    

    const infoCollect=(eve)=>{
        const{name,value}=eve.target
        setSeminar((old)=>{
            if(name==="event_name"||name==="event_title"||name==="event_venue"||name==="event_organizer"||name==="event_sponsor"||name==="guest_name"||name==="guest_designation"||name==="guest_address"||name==="guest_email"||name==="proposal_date"||name==="event_coordinator"||name==="acdyr_id"){
                
                return{
                    ...old,
                    [name]:value
                }
            }
            else if(name==="major_id"){
                Sub(value)
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
            else if(name==="event_date"){
                // Maj()
               
            // Ven()
                return{
                    ...old,
                    [name]:value
                }
            }
          
            else{
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
        })
    }

    const callPropose=async()=>{
        const temp = await onPropose(seminar)
        if(temp.message===404||temp.message===500){
            alert("Error in entering data")
        }
        setInformation(temp.message)
    }

    return(
        <>
         <body>
        <div class="main" >

            
         


 <div className="report-container" style={{justifyContent:'center'}}>
     <div class="report-header">
         <h1 class="recent-Articles">EVENT PROPOSAL</h1>
        
     </div>
     <div className="row justify-content-center"style={{justifyContent:'center'}}>

     {/* <label htmlFor="event-type">Select Event Type:</label>
      <select id="event-type" onChange={handleChange} value={eventType}>
        <option value="seminar">Seminar</option>
        <option value="workshop">Workshop</option>
      </select> */}
       <Form>
   
     

     <div className="form group">


     <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        isSearchable
        placeholder="Select options..."
        closeMenuOnSelect={false} 
      />

     {/* <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        isSearchable
        placeholder="Select options..."
        closeMenuOnSelect={false}
      /> */}
     {/* <select name="cars" id="cars" multiple multiselect-hide-x="true">
  <option value="1">Audi</option>
  <option selected value="2">BMW</option>
  <option selected value="3">Mercedes</option>
  <option value="4">Volvo</option>
  <option value="5">Lexus</option>
  <option value="6">Tesla</option>
</select> */}

     <label for="major_id">Major Type :</label>
     <select name="major_id" value={seminar.major_id} onChange={infoCollect}>
  <option value="">Select Major Type .......</option>
  {
                                major.map((val,key)=>{
                                    return (<option key={val.major_report_id} value={val.major_report_id}>{val.major_report}</option>)
                                })
                            }
</select>
<label for="event_name">Sub Type :</label>
<select name="event_name" value={seminar.event_name} onChange={infoCollect}>
  <option value="">Select Event Nature .......</option>
  {
                                sub.map((val,key)=>{
                                    return (<option key={val.sub_report_id} value={`data_management_${val.sub_report}`}>{val.sub_report}</option>)
                                })
                            }
</select>


     {/* <label >Nature of the event :</label>

                        <select name="event_name" className="form-select" value={seminar.event_name} onChange={infoCollect}  style={{width:'80%'}}>
                        <option value="">Select Event Nature .......</option>
                        <option value="data_ecr_workshop">Workshop</option>
                        <option value="Seminar">Seminar</option>
                        <option value="Conference">Conference</option>
                        <option value="Technical Symposium">Technical Symposium</option>
                        <option value="Guest Lecture">Guest Lecture</option>
                        <option value="FDP">FDP</option>
                        </select> */}
                    </div>
                
            <div className="form group">
                        <label for="event_title">Title of the Event :</label>
                        <input onChange={infoCollect} value={seminar.event_title} type="text" name="event_title" placeholder="Event Title" className="form-control"/>
                    </div>
                    
                    <div className="form group">
                    <label for="event_organizer">Organised By:</label>
                    <input onChange={infoCollect} value={seminar.event_organizer} type="text" name="event_organizer" placeholder="Event Organizer" className="form-control" />
                    </div>

                    <div className="form group">
      <label htmlFor="event_sponsor">Colloborating/Sponsored Agency 1:</label>
      <input type="text" name="event_sponsor" value={seminar.major_id} required onChange={infoCollect}placeholder="Event Sponsor" className="form-control" /><br />
      </div>
      <div className="form group">
      <label htmlFor="event_sponsor">Colloborating/Sponsored Agency 2:</label>
      <input type="text" name="event_sponsor1"  placeholder="Event Sponsor" className="form-control" /><br />
      </div>
      <div className="form group">
      <label htmlFor="event_date">Date of The Event Planned:</label>
      <input type="date" name="event_date" value={seminar.event_date} required onChange={infoCollect} /><br />

      <label htmlFor="event_venue">Venue:</label>
      <select name="event_venue" value={seminar.event_venue} onChange={infoCollect}>
        
      <option value="">Select Venue ......</option>
      {
                                venue.map((val,key)=>{
                                    return (<option value={val.venue_name}>{val.venue_name}</option>)
                                })
                            }
      </select><br />

      <h1>Details of The Guest</h1>
      <label htmlFor="guest_name">Name:</label>
      <input type="text" name="guest_name" value={seminar.guest_name} required onChange={infoCollect} /><br />

      <label htmlFor="guest_designation">Designation:</label>
      <input type="text" name="guest_designation" value={seminar.guest_designation} required onChange={infoCollect} /><br />

      <label htmlFor="guest_address">Address:</label>
      <input type="text" name="guest_address" value={seminar.guest_address} required onChange={infoCollect} /><br />

      <label htmlFor="guest_phone_number">Mobile Number:</label>
      <input type="number" name="guest_phone_number" value={seminar.guest_phone_number} required onChange={infoCollect} /><br />

      <label htmlFor="guest_email">Mail ids</label>
      <input type="text" name="guest_email" value={seminar.guest_email} required onChange={infoCollect} /><br />

      <h1>No of Participants (Expected)</h1>
      <label htmlFor="student_count">MEC Students:</label>
      <input type="number" name="student_count" value={seminar.student_count} required onChange={infoCollect} /><br />

      <label htmlFor="faculty_count">MEC Faculty:</label>
      <input type="number" name="faculty_count" value={seminar.faculty_count} required onChange={infoCollect} /><br />

      <label htmlFor="others_count">Others:</label>
      <input type="number" name="others_count" value={seminar.others_count} required onChange={infoCollect} /><br />

      <label htmlFor="event_budget">Proposed Budget:</label>
      <input type="number" name="event_budget" value={seminar.event_budget} required onChange={infoCollect} /><br />

      <h1>Co-ordinator of the Event</h1>

      {/* <label htmlFor="dept_id">Department:</label>
      <select name="dept_id" value={seminar.dept_id} onChange={infoCollect}>
      <option value="">Select Department ......</option>
        <option value="1">CSE</option>
        <option value="2">ECE</option>
        <option value="3">EEE</option>
        <option value="4">IT</option>
        <option value="5">CY</option>
        <option value="6">AIDS</option>
      </select><br /> */}

      <label>Event Coordinator</label>
                        <select name="event_coordinator" className="form group" onChange={infoCollect} value={seminar.event_coordinator}>
                        <option value="">Select Faculty</option>
                            {
                                proposable.map((val,key)=>{
                                    return (<option value={val.faculty_id}>{val.faculty_id}{'-'}{val.faculty_name}{'-'}{val.dept}</option>)
                                })
                            }
                        </select>
      <label htmlFor="acdyr_id">Academic Year:</label>
      <select name="acdyr_id" className="form group" onChange={infoCollect} value={seminar.acad_yr_id}>
                        <option value="">Select Academic Year</option>
                            {
                                year.map((val,key)=>{
                                   
                                    return (<option value={val.acd_yr_id}>{val.acd_yr}</option>)
                                })
                            }
                        </select>

      <label htmlFor="sem">Semester :</label>
      <select name="sem" value={seminar.sem} onChange={infoCollect}>
        <option value="0">Odd Sem</option>
        <option value="1">Even Sem</option>
      </select><br />
      
   
     

      
    </div>
    </Form>

    <h1 style={{color:'red',}}>{information}</h1>
         
    <div className='row mt-5 justify-content-around'>
        <input type='button' onClick={callPropose} value="Call Proposal" className='col-3 btn btn-primary' />
                        <input type='button' onClick={()=>{
                            setSeminar(()=>{
                                return{
        
      
        "event_name":"",
        "event_title":"",
        "event_organizer":"",
        "event_sponsor":"",
        "event_date":"",
        "event_venue":"",
        "guest_name":"",
        "guest_designation":"",
        "guest_address":"",
        "guest_phone_number":0,
        "guest_email":"",
        "student_count":0,
        "faculty_count":0,
        "others_count":0,
        "proposal_date":"",
        "proposal_hod":"",
        "proposal_principal":"",
        "event_budget":0,
        "event_coordinator":"",
        
        "":0,
        "coordinator_designation":406,
        "acdyr_id":"",
        "dept_id":0,
        "sem_id":0
        
                                }
                            })
                        }} value="Clear" className='col-3 btn btn-danger' />
                    </div>   
        
         
         {/* <label for="coll">Colloborating`/Sponsored Agency:</label>
         <input type="text" name="coll" required/><br/>
         <label for="date">Date of The Event Planned:</label>
         <input type="date" name="date" required/><br/>
         <label for="venue">Venue : </label>
<select name="venue">
<option value="Seminar Hall I">Seminar Hall I</option>
<option value="Seminar Hall II">Seminar Hall II</option>
<option value="Cloud Computing Lab">Cloud Computing Lab</option>
<option value="Data Analytics Lab">Data Analytics Lab</option>

</select><br/>
         <h1>Details of The Guest</h1>
         <label for="Name">Name:</label>
         <input type="text" name="Name" required/><br/>
         <label for="designation">Designation:</label>
         <input type="text" name="designation" required/><br/>
         <label for="address">Address:</label>
         <input type="text" name="address" required/><br/>
         <label for="number">Mobile Number:</label>
         <input type="number" name="number" required/><br/>
         <label for="mail">Mail ids</label>
         <input type="text" name="mail" required/><br/>
         <h1>No of Participants (Expected)</h1>
         <label for="mecs">MEC Students:</label>
         <input type="number" name="mecs" required/><br/>
         <label for="mecf">MEC Faculty:</label>
         <input type="text" name="mecf" required/><br/>
         <label for="others">Others:</label>
         <input type="text" name="others" required/><br/>
         <label for="others">Proposed Budget:</label>
         <input type="text" name="budget" required/><br/>
         <h1>Co-ordinator of the Event</h1>
         <label for="Name">Name:</label>
         <input type="text" name="CName" required><br>
         <label for="designation">Academic Year:</label>
         <input type="text" name="year" required><br>
         <label for="sem">Semester :</label>
<select name="sem">
<option value="ODD ">Odd Sem</option>
<option value="EVEN">even Sem</option>
</select><br>
         <label for="department">Department:</label>
<select name="dept">
<option value="CSE">CSE</option>
<option value="ECE">ECE</option>
<option value="EEE">EEE</option>
<option value="IT">IT</option>
<option value="CY">CY</option>
<option value="AIDS">AIDS</option>
</select><br/>

        

         <input type="submit" value="Submit"/> */}
         
    
      
 </div>
 </div>
 
 </div>
        
 </body>
        </>
    )
}