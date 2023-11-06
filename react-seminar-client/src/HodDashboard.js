import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HodMenu } from "./HodMenu"
import { ViewSeminar } from "./ViewSeminar"
import PDFGenerator from "./pdfGenerator"

export const HodDashboard=()=>{
    return(
        <>
            <BrowserRouter>
                <HodMenu/>
                {/* <ViewSeminar/> */}
                <Routes >
                <Route path="" element={<ViewSeminar/>} />
                <Route path="viewPdf" element={<PDFGenerator/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}