import { useState } from "react"
import { onLogin } from "./connect"

import "./sty.css"


export const Login=()=>{

    const[logger,setLogger]=useState({
        "mail":"",
        "pass":""
    })

    const gather=(eve)=>{
        const{name,value}=eve.target
        setLogger((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onLoginClicked=async()=>{
        // console.log(JSON.stringify(logger))
        const temp=await onLogin(logger)
        if(temp.faculty_id){
            sessionStorage.setItem("person",JSON.stringify(temp))
            window.location.assign("/")
        }
    }

    return(
        <>
        <head style={{alignItems:'center'}} className="login-container">
           
          
        <img src="https://mec.edu.in/wp-content/uploads/2021/02/main-logo.png"  class="icn menuicn"/>
       
        </head>
        <body style={{backgroundImage: 'url(https://mec.edu.in/wp-content/uploads/2021/10/8.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
            <div className="container">
                <div className="d-flex flex-row justify-content-center align-items-center" style={{height:'100vh',alignItems:'left'}}>
                    <div className="col-12 col-sm-12 col-md-8 col-mg-7">
                        {/* <h1 className="text-center text-info">Muthayammal Engineering College, Rasipuram</h1> */}
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-5 shadow p-5 rounded-2" style={{backgroundColor:'#f7f1d7',height:'38%'}}>
                        <div >
                            <label>Faculty ID</label>
                            <input type="email" name="mail" value={logger.mail} onChange={gather} placeholder="Faculty Id to login" className="form-control" />
                        </div>
                        <div className="form group">
                            <label>Password</label>
                            <input type="password" name="pass" value={logger.pass} onChange={gather} placeholder="Password to login" className="form-control" />
                        </div>
                        <div className="mt-3 row justify-content-evenly">
                            <button type="button" className="btn btn-outline-info col-3" onClick={onLoginClicked}>Login</button>
                            <button type="button" className="btn btn-outline-danger col-3">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}