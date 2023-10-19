import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrincipalMenu } from "./PrincipalMenu"
import { ViewReqPrincipal } from "./ViewReqPriincipal"

export const PrincipalDashboard=()=>{
    return(
        <>
            <BrowserRouter>
                <PrincipalMenu/>
                <ViewReqPrincipal/>
                <>
                <head>
                    
                </head>
                </>
                <Routes>
                    {/* <Route path="ecr" element={<ViewSeminar/>} /> */}
                    {/* <Route path="setaf" element={<ViewSetAfs/>} />
                    <Route path="faculties" element={<FilterFaculties/>} />
                    <Route path="shortecr" element={<FilterEcrs/>} />
                    <Route path="shortsetaf" element={<FilterSetAfs/>} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}