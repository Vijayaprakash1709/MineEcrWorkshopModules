import { Container, Nav, Navbar } from "react-bootstrap"
import { useEffect, useState } from "react"
import { approveLevel1, loadForLevel1 } from "./connect"
import './sty.css';

export const FacultyPage=()=>{
    // const[ecrs,setEcrs]=useState([])
    // const[info,setInfo]=useState("")

    // const accept=async(dept_id,report_id)=>{
    //     const log=JSON.parse(sessionStorage.getItem("person"))
    //     const data=await approveLevel1(dept_id,log.faculty_id,report_id)
    //     setInfo(data)
    //     window.location.assign("/")
    // }
    // const loadSeminars=async()=>{
    //     const logged=JSON.parse(sessionStorage.getItem("person"))
    //     const temp = await loadForLevel1(logged.dept_id,logged.faculty_id)
    //     setEcrs(temp)
    //     // alert("")
    // }

    // useEffect(()=>{
    //     loadSeminars()
    // },[])

    return(
        <>

            <body>

     
<div className="main">

    <div style={{marginTop:'100px'}}>

            <div className="box-container">
           
      <a className="topic-heading" href="/ecr"><div className="box box1"id="ecr">ECR</div></a>

<a className="topic-heading" href="/setaf"><div className="box box4" id ="set">

<h2 className="topic-heading" id="tt">SeTAF</h2>       

</div></a>
          
            <div className="box box3"id="ecr">
                    
                    <h2 className="topic-heading" >IV</h2>  
            </div>
 
                <div className="box box4" id ="set">

                        <h2 className="topic-heading" id="tt">SeSTA</h2>       

            </div>
</div>
</div>

 
            <div className="report-container1">
                <div className="report-header">
                    <h1 className="recent-Articles">Requests</h1>
                    <h6>Your request will visible here </h6>
                 </div>   
                    <div>

                    <table className='table table-striped '>
                <thead>
                    <tr>
                        <th>Report id</th>
                        <th>Major Type</th>
                        <th>Sub Type</th>
                        <th>Event Title</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {/* {
                                        ecrs.map((val,key)=>(
                                            <tr>
                                                <td>{val.sno}</td>
                                                <td>{val.event_name}</td>
                                                <td>{val.event_title}</td>
                                                <td>{val.event_coordinator}</td>
                                                <td className="row justify-content-evenly">
                                                <button type="button" onClick={async()=>{
                                                        // alert(val.workshop_id+" "+val.dept_id)
                                                        accept(val.dept_id,val.report_id);
                                                    }} className="btn btn-success col-4">Accept</button>
                                                    <button type="button" className="btn btn-dark col-4">Reject</button>
                                                    </td>
                                            </tr>
                                        ))
                                    } */}
                </tbody>
            </table>
 
</div>

               
                </div>
 
           
</div>
</body>
           
        </>
    )
}