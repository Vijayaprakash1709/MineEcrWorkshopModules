import { Container, Nav, Navbar } from "react-bootstrap"

export const FacultyMenu=()=>{
    return(
        <>
               <head>
 
 <div class="logosec">
  
         <div class="logo">Welcome </div> 

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
                    <Navbar.Toggle aria-controls="faculty" />
                    <Navbar.Collapse id="faculty">
                        <Nav className="ms-auto">

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