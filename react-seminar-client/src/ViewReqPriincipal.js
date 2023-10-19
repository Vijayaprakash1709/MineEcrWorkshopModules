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
        const logged=JSON.parse(sessionStorage.getItem("person"))
        const temp = await callLoadForLevel2()
        // alert(temp.row)
        setEcrs(temp.row)
    }

    useEffect(()=>{
        loadSeminars();
    },[])


    // const acceptAll=async()=>{
    //     const logged=JSON.parse(sessionStorage.getItem("person"))
    //     const temp = await approveLevel1(logged.faculty_dept,logged.faculty_id)
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
    

      <div className="report-container">
        <div className="report-header">
          <h1 className="recent-Articles">Requests</h1>
        </div>
        <div>
        <h1 className="text-center text-success">{info}</h1>
        </div>
        <table className="table table-stripped text-nowrap">
                                <thead>
                                    <tr>
                                        <th>ECR No</th><th>ECR Type</th><th>Title</th><th>Co-ordinator</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                   
                                        ecrs.map((val,key)=>(
                                            <tr>
                                                <td>{val.sno}</td>
                                                <td>{val.event_name}</td>
                                                <td>{val.event_title}</td>
                                                <td>{val.event_coordinator}</td>
                                                <td className="row justify-content-evenly">
                                                <button type="button" onClick={async()=>{
                                                        // alert(val.workshop_id+" "+val.dept_id)
                                                        const temp=await callAcceptLevel2(val.dept_id,val.sno)
                                                        setInfo(temp)
                                                        if(info===400){
                                                            <h1>No request found</h1>
                                                        }
                                                        window.location.assign("/")
                                                        
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