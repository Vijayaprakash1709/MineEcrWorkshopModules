import { useEffect, useState } from "react"
import { approveLevel1, loadForLevel1 ,loadComForLevel1,approveComLevel1} from "./connect"
import './sty.css';

export const ViewSeminar=()=>{

    const[ecrs,setEcrs]=useState([])
    const[info,setInfo]=useState("")

    const accept=async(dept_id,report_id,com)=>{
        // alert(com);
        if(com===1){
            const log=JSON.parse(sessionStorage.getItem("person"))
        const data=await approveComLevel1(dept_id,log.faculty_id,report_id)
        setInfo(data)
        window.location.assign("/")
        }
        const log=JSON.parse(sessionStorage.getItem("person"))
        const data=await approveLevel1(dept_id,log.faculty_id,report_id)
        setInfo(data)
        window.location.assign("/")
    }
    const loadSeminars=async()=>{
        const logged=JSON.parse(sessionStorage.getItem("person"))
        const temp = await loadForLevel1(logged.dept_id,logged.faculty_id)
        setEcrs(temp)
    }
    const load=async()=>{
        const logged=JSON.parse(sessionStorage.getItem("person"))
        const temp = await loadComForLevel1(logged.dept_id,logged.faculty_id)
        setEcrs(temp)
    }

    useEffect(()=>{
        loadSeminars()
        load()
    },[])


    // const acceptAll=async()=>{
    //     const logged=JSON.parse(sessionStorage.getItem("person"))
    //     const temp = await approveLevel1(logged.dept_id,logged.faculty_id)
    //     setInfo(temp)
    // }


    return(
        <>
<body>
</body>
<div className="main">
     
     



      <div className="report-container1">
        <div className="report-header">
          <h1 className="recent-Articles">Requests</h1>
        </div>
        <table className="table table-stripped text-nowrap">
                                <thead>
                                    <tr>
                                        <th>Report ID</th><tH>Title</tH><th>Major Type</th><th>Sub Type</th><th>Co-ordinator</th>
                                        <th>Action</th><th>Event</th>
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
                                                
                                                <td>{val.event_coordinator}</td>
                                                <td className="row justify-content-evenly">
                                                <button type="button" onClick={async()=>{
                                                        // alert(val.workshop_id+" "+val.dept_id)
                                                        accept(val.dept_id,val.report_id,val.completion);
                                                    }} className="btn btn-success col-4">Accept</button>
                                                    <button type="button" className="btn btn-dark col-4">Reject</button>
                                                    </td>
                                                    <td><a className="topic-heading" href="/viewPdf"><h3 style={{color:'blue'}}>View proposal</h3></a></td>
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