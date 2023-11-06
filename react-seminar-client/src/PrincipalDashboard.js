import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrincipalMenu } from "./PrincipalMenu"
import { ViewReqPrincipal } from "./ViewReqPriincipal"
import PDFGenerator from "./pdfGenerator"

export const PrincipalDashboard=()=>{
    return(
        <>
            <BrowserRouter>
                <PrincipalMenu/>
                <Routes>
                <Route path="" element={<ViewReqPrincipal/>} />
                <Route path="viewPdf" element={<PDFGenerator/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}