
import {Table} from './connect';
import React, { useState, useEffect} from 'react';

import "./sty.css"

export const CreateEvent=()=>{
      // conts[getname(variable),setname(FUNCTION)]=useState(initialized)
      const[allvalues,setAllvalues]=useState([]);

      const doSomething = async() =>{
        const res=await Table()
          setAllvalues(res.data)
        }
        
        useEffect(() =>{
         doSomething();
        },[])

    //   useEffect(async()=>{
    //       const res=await Table()
    //       setAllvalues(res.data)
    //   },[])
     

    return(
        <>
        
        <div class="main">
 
            <div class="searchbar2">
                <input type="text"
                       name=""
                       id=""
                       placeholder="Search"/>
                <div class="searchbtn">
                  <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                        class="icn srchicn"
                        alt="search-button"/>
                  </div>
            </div>
 <div class="sel">
<style>
   
    </style>


        <div class="button-container">
          <button class="menu-button" data-category="Technical Symposium">Technical Symposium</button>
          <button class="menu-button" data-category="Student Techtalk">Student Techtalk</button>
          <button class="menu-button" data-category="Online Seminar">Online Seminar</button>
          <button class="menu-button" data-category="Workshop">Workshop</button>
          <button class="menu-button" data-category="MIST">MIST</button>
          <button class="menu-button" data-category="NETS">NETS</button>
          <button class="menu-button" data-category="GUEST Lectures">GUEST Lectures</button>
          <button class="menu-button" data-category="AIM">AIM</button>
        </div>
      
</div>
            
 
               
 
            <div class="report-container">
                <div class="report-header">
                    <h1 class="recent-Articles">Your Reports</h1>
                    <a className="topic-heading" href="/add"><button class="view" id="addButton">+ Add</button></a>
                    

                </div>

 
   <table className='table table-striped '>
                    <thead>
                        <tr>
                            <th>ECR id</th>
                            <th>Event Type</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>HoD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allvalues.map((data)=>
                            (
                                <tr>
                                    
                                        
                                    
                                    
                                    <td>{data.sno}</td>
                                    <td>{data.event_title}</td>
                                    <td>{data.event_organizer}</td>
                                    <td>{data.event_date}</td>
                                    <td>
                                        
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