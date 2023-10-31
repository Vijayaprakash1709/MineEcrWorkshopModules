import { Container, Nav, Navbar } from "react-bootstrap"

export const FacultyPage=()=>{
    return(
        <>

            <body>

     
<div className="main">

    <div style={{marginTop:'100px'}}>

            <div className="box-container">
           
      <a className="topic-heading" href="/ecr"><div className="box box1"id="ecr">ECR</div></a>

<a className="topic-heading" href="/setaf"> <div className="box box4" id ="set">

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
                        <th>ECR id</th>
                        <th>Event Type</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>HoD</th>
                    </tr>
                </thead>
                <tbody>
               
                </tbody>
            </table>
 
</div>

               
                </div>
 
           
</div>
</body>
           
        </>
    )
}