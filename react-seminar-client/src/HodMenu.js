import { Container, Nav, Navbar } from "react-bootstrap"
import './sty.css'

export const HodMenu=()=>{
    const logged=JSON.parse(sessionStorage.getItem("person"))
    return(
        <>
        <head>
 
 <div class="logosec">
         
         <div class="logo">Welcome ,  {
         logged.faculty_name
         } </div> 

         
     </div>
     <img src=
"https://mec.edu.in/wp-content/uploads/2021/02/main-logo.png"
             class="icn menuicn"
             id="menuicn"
             alt="menu-icon"/>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                       
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="hod" />
                    <Navbar.Collapse id="hod">
                        <Nav className="ms-auto">
                            <a className="me-2 btn btn-outline-success" href="/ecr">View ECR</a>
                            <a className="me-2 btn btn-outline-success" href="/setaf">View SetAf</a>
                            <a className="me-2 btn btn-outline-success" href="/faculties">Filter Faculties</a>
                            <a className="me-2 btn btn-outline-success" href="/shortecr">Filter ECR</a>
                            <a className="me-2 btn btn-outline-success" href="/shortsetaf">Filter SetAf</a>
                            <button className="me-2 btn btn-outline-danger" onClick={()=>{
                                sessionStorage.removeItem("person")
                                window.location.assign("/")
                            }}>
                                Logout
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </head>
        </>
    )
}