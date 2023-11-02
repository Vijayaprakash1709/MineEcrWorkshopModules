import { useEffect, useState } from "react"
import { callAcceptLevel2,callLoadForLevel2} from "./connect";
import './sty.css';
import { PrincipalMenu } from "./PrincipalMenu";

export const ViewReqPrincipal=()=>{

    const[ecrs,setEcrs]=useState([])
    const[info,setInfo]=useState("")

    // const accept=async(dept_id,sno)=>{
    //     const log=JSON.parse(sessionStorage.getItem("person"))
    //     const data=await callAcceptLevel2(dept_id,sno)
    //     setInfo(data)
    //     window.location.assign("/")
      
    // }
    const loadSeminars=async()=>{
        try{
        const logged=JSON.parse(sessionStorage.getItem("person"))
        const temp = await callLoadForLevel2(logged.faculty_id)
        setEcrs(temp.rows)
        }
        catch(error){
            alert("No request")
        }
        // if(temp.error=="No matches"){
        //     alert("No request")
        // }
    }

    useEffect(()=>{
        loadSeminars();
    },[])


    // const acceptAll=async()=>{
    //     const logged=JSON.parse(sessionStorage.getItem("person"))
    //     const temp = await approveLevel1(logged.dept_id,logged.faculty_id)
    //     setInfo(temp)
    // }


    return(
        <>
        <head>
            <PrincipalMenu/>
        </head>
<body>
</body>
<div className="main">
    

      <div className="report-container1">
        <div className="report-header">
          <h1 className="recent-Articles">Requests</h1>
        </div>
        <div>
        <h1 className="text-center text-success">{info}</h1>
        </div>
        <table className="table table-stripped text-nowrap">
                                <thead>
                                    <tr>
                                        <th>Report ID</th><th>Title</th><th>Major Type</th><th>Sub Type</th>
                                        <th>Event Date</th><th>Co ordinator</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                   
                                        ecrs.map((val,key)=>(
                                            <tr>
                                                <td>{val.report_id}</td>
                                                <td>{val.event_title}</td>
                                                <td>ECR</td>
                                                <td>{val.event_name}</td>
                                                <td>{val.event_date.split('-').reverse().join('-')}</td>
                                                <td>{val.event_coordinator}</td>
                                                <td className="row justify-content-evenly">
                                                    {/* {
                                                        alert(info)
                                                    } */}
                                                <button type="button" onClick={async()=>{
                                                    
                                                        // alert(val.workshop_id+" "+val.dept_id)
                                                        try{
                                                        const logged=JSON.parse(sessionStorage.getItem("person"))
                                                        const temp=await callAcceptLevel2(val.dept_id,logged.faculty_id,val.report_id)
                                                        setInfo(temp)
                                                        }
                                                       
                                                        catch(error){
                                                            alert("No data Found");
                                                        }
                                                       
                                                        if(info==='error'){
                                                            <h1>No request found</h1>
                                                        }
                                                        try{
                                                        window.location.assign("/")
                                                        }
                                                        catch(error){
                                                            console.log(error);
                                                        }
                                                        
                                                    }} className="btn btn-success col-4">Accept</button>
                                                    <button type="button" className="btn btn-dark col-4">Reject</button>
                                                    </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            
                         

      </div>
    </div>
            
           
        </>
    )
}