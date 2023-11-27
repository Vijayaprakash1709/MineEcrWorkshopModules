import { useEffect, useState } from "react"
import { approveLevel1, loadForLevel1 ,loadComForLevel1,approveComLevel1} from "./connect"
import './sty.css';
import { onTable } from "./connect";
import axios from 'axios'
import jsPDF from 'jspdf';
import Image from './logo.png';
import Image2 from './logo2.png';
import Image3 from './logo3.jpg';
import Image4 from './logo4.jpg';

export const ViewSeminar=()=>{

    useEffect(() =>{
      
        sessionStorage.removeItem("report_id")
       },[])
    
    const [id, setId] = useState('');

   const viewPdf=async(report_id)=>{
    const report=JSON.parse(sessionStorage.getItem("report_id"))
    setId(report.report_id)
    // alert("view Working")
    handleDownload();
    
}
   

  const handleDownload = async () => {
    try {
      
      
      const res = await axios.get(`http://localhost:1234/seminar/data/${id}`);
      // console.log("hai");
      const data = res.data;

      const doc = new jsPDF();
      

      doc.addImage(Image, 'PNG', 10, 3, 20, 20);
  doc.addImage(Image2, 'PNG', 12,23, 15, 15);
  doc.addImage(Image3, 'JPG', 175, 3, 20, 15);
doc.addImage(Image4, 'JPG', 175, 20, 20, 15);

doc.setFontSize(18);
doc.setFont("times", "bold");
doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',35, 15);
doc.setFontSize(10);
doc.setFont("times", "");
doc.text('(An Autonomous Institution)', 80, 20);
doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)', 35, 25);
doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu', 65, 30);


doc.setFontSize(12);
doc.setFont("times", "bold");
doc.rect(10, 40, 20, 7);
doc.text(`${data.event_organizer}`, 15, 45);///Department

doc.rect(80, 40, 50, 7);
doc.text('EVENT PROPOSAL', 85, 45);

doc.rect(170, 40, 25, 7);
doc.text(`2023-24`, 173, 45);//academic year

doc.setFont("times","")
doc.rect(10, 55, 10, 20).stroke();
doc.text('1.', 12, 65);
doc.rect(20, 55, 90, 20).stroke();
doc.text('Nature of the Event:\nConference/Technical Symposium/Workshop/\nSeminar/Guest/Lecture/FDP/Any other',22, 61);
doc.rect(110, 55, 90, 20).stroke();
doc.text(`${data.sub_report}`, 113, 65);//Nature of the Event


doc.rect(10, 75, 10, 10).stroke();
doc.text('2.', 12, 81);
doc.rect(20, 75, 90, 10).stroke();
doc.text('Title of the event',22, 81);
doc.rect(110, 75, 90, 10).stroke();
doc.text(`${data.event_title}`, 113, 81);//Event Title


doc.rect(10, 85, 10, 10).stroke();
doc.text('3.', 12, 91);
doc.rect(20, 85, 90, 10).stroke();
doc.text('Organized by',22, 91);
doc.rect(110, 85, 90, 10).stroke();
doc.text(`${data.event_organizer}`, 113, 91);//Event Organizer



doc.rect(10, 95, 10, 10).stroke();
doc.text('4.', 12, 101);
doc.rect(20, 95, 90, 10).stroke();
doc.text('Collaboration/Sponsoring Agency',22, 101);
doc.rect(110, 95, 90, 10).stroke();
doc.text(`${data.event_sponsor}`, 113, 101);//Sponsor Name


doc.rect(10, 105, 10, 10).stroke();
doc.text('5.', 12, 111);
doc.rect(20, 105, 90, 10).stroke();
doc.text('Date of the Event Planned',22, 111);
doc.rect(110, 105, 90, 10).stroke();
doc.text(`${data.event_date}`, 113, 111);//Event Date

doc.rect(10, 115, 10, 10).stroke();
doc.text('6.', 12, 121);
doc.rect(20, 115, 90, 10).stroke();
doc.text('Venue',22, 121);
doc.rect(110, 115, 90, 10).stroke();
doc.text(`${data.event_venue}`, 113, 121);


doc.rect(10, 125, 10, 50).stroke();
doc.text('7.', 12, 141);
doc.rect(20, 125, 90, 50).stroke();
doc.text('Details of the Guest',22, 141);

doc.rect(110, 125, 23, 10).stroke();
doc.text('Name', 111, 131);
doc.rect(133, 125,67, 10).stroke();
doc.text(`${data.guest_name}`, 135, 131);///Name of the Guest 
doc.rect(110, 135, 23, 10).stroke();
doc.text('Designation', 111, 141);
doc.rect(133, 135,67, 10).stroke();
doc.text(`${data.guest_designation }`, 135, 141);///Guest Designation
doc.rect(110, 145, 23, 10).stroke();
doc.text('Address', 111, 151);
doc.rect(133, 145,67, 10).stroke();
doc.text(`${data.guest_address}`, 135, 151);//Guest Address
doc.rect(110, 155, 23, 10).stroke();
doc.text('Contact No', 111, 161);
doc.rect(133, 155,67, 10).stroke();
doc.text(`${data.guest_mobile_number}`, 135, 161);//Contact no
doc.rect(110, 165, 23, 10).stroke();
doc.text('Mail-id', 111, 171);
doc.rect(133, 165,67, 10).stroke();
doc.text(`${data.guest_email}`, 135, 171);/////Guest Mail id

doc.rect(10, 175, 10, 30).stroke();
doc.text('8.', 12, 190);
doc.rect(20, 175, 90, 30).stroke();
doc.text('Total Participants expected',22, 190);

doc.rect(110, 175, 23, 10).stroke();
doc.text('MEC\nStudents', 110.5, 179);
doc.rect(133, 175,67, 10).stroke();
doc.text(`${data.student_count}`, 135, 181);//Count of the Student

doc.rect(110, 185, 23, 10).stroke();
doc.text('MEC\nFaculty', 110.5, 189);
doc.rect(133, 185,67, 10).stroke();
doc.text(`${data.faculty_count}`, 135, 191);//COunt of the Faculty

doc.rect(110, 195, 23, 10).stroke();
doc.text('Others', 110.5, 201);
doc.rect(133, 195,67, 10).stroke();
doc.text(`${data.others_count}`, 135, 201);//Count of Others

doc.rect(10, 205, 10, 10).stroke();
doc.text('9.', 12, 211);
doc.rect(20, 205, 90, 10).stroke();
doc.text('Proposed Budget',22, 211);
doc.rect(110, 205, 90, 10).stroke();
doc.text(`${data.event_budget}`, 113, 211);//Event Budget


doc.rect(10, 215, 10, 40).stroke();
doc.text('10.', 12, 230);
doc.rect(20, 215, 90, 40).stroke();
doc.text('Co-ordinator of the Event',22, 230);

doc.rect(110, 215, 23, 10).stroke();
doc.text('Name', 111, 221);
doc.rect(133, 215,67, 10).stroke();
doc.text(`${data.event_coordinator}`, 135, 221);//Coordinator Name
doc.rect(110, 225, 23, 10).stroke();
doc.text('Designation', 111, 231);
doc.rect(133, 225,67, 10).stroke();
doc.text(`${data.coordinator_designation}`, 135, 231);///Cordinator Designation
doc.rect(110, 135, 23, 10).stroke();
doc.text('Contact No', 111, 241);
doc.rect(133, 235,67, 10).stroke();
doc.text(`${data.coordinator_mobile_number}`, 135, 241);///Cordinator Mobile Number
doc.rect(110, 245, 23, 10).stroke();
doc.text('Co-ordinator\nSign', 111, 249);
doc.rect(133, 245,67, 10).stroke();
doc.text('', 135, 251);

doc.setFont("times","bold");

doc.text('* Attach Invitation Brochure', 15, 265);
doc.text('HoD', 155, 275);
doc.text('Approved Not Approved', 16, 280);
doc.text('Principal', 155, 290);













    // Generate a data URI for the PDF
    const pdfDataUri = doc.output('datauristring');

    // Open the PDF in a new tab or window
    const newWindow = window.open();
    newWindow.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);
  
  }
      
     catch (err) {
      console.error(err);
    }
  }

    const[ecrs,setEcrs]=useState([])
    const[ecrs1,setEcrs1]=useState([])
    const[info,setInfo]=useState("")


    const accept=async(dept_id,report_id,com)=>{
        // alert(com);
        if(com===1){
            const log=JSON.parse(sessionStorage.getItem("person"))
        const data=await approveComLevel1(dept_id,log.faculty_id,report_id)
        setInfo(data)
        window.location.assign("/")
        }
        else{
        const log=JSON.parse(sessionStorage.getItem("person"))
        const data=await approveLevel1(dept_id,log.faculty_id,report_id)
        setInfo(data)
        window.location.assign("/")
        }
    }
    const load=async()=>{
        const logged=JSON.parse(sessionStorage.getItem("person"))
        const temp = await loadComForLevel1(logged.dept_id,logged.faculty_id)
        setEcrs1(temp)
    }
    const loadSeminars=async()=>{
        const logged=JSON.parse(sessionStorage.getItem("person"))
        const temp = await loadForLevel1(logged.dept_id,logged.faculty_id)
        setEcrs(temp)
       
    }
 

    useEffect(()=>{
        loadSeminars()
         load()
    },[])

    const [id1, setId1] = useState('');
    const viewPdf1=async(report_id)=>{
      const report=JSON.parse(sessionStorage.getItem("report_id"))
      setId1(report.report_id)
      // alert("view Working")
      handleDownload1();
      
    }
    const ecr=async(report_id)=>{
        const temp=await onTable(report_id)
    if(temp.report_id){
        sessionStorage.setItem("report_id",JSON.stringify(temp))
        
    }
    viewPdf1(temp.report_id);

    } 


    const handleDownload1= async () => {
        try {
          
          
          const res = await axios.get(`http://localhost:1234/seminar/data/${id1}`);
          // console.log("hai");
          const data = res.data;
    
          const doc = new jsPDF();
    
    //////////////////////////////////////////////// First Page ///////////////////////////
    doc.addImage(Image, 'PNG', 10, 3, 20, 20);
    doc.addImage(Image2, 'PNG', 12,23, 15, 15);
    doc.addImage(Image3, 'JPG', 175, 3, 20, 15);
    doc.addImage(Image4, 'JPG', 175, 20, 20, 15);
    
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',35, 15);
    doc.setFontSize(10);
    doc.setFont("times", "");
    doc.text('(An Autonomous Institution)', 80, 20);
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)', 35, 25);
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu', 65, 30);
    
    
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.rect(10, 40, 20, 7);
    doc.text(`${data.event_organizer}`, 15, 45);//Department
    
    doc.rect(70, 40, 65, 7);
    doc.text('EVENT COMPLETION REPORT', 71  , 45);
    
    doc.rect(170, 40, 30, 7);
    doc.text(`${data.acdyr_id}`, 173, 45);//Academic year
    
    doc.setFont("times","")
    doc.setFontSize(10);
    doc.rect(10, 55, 10, 15).stroke();
    doc.text('1.', 12, 65);
    doc.rect(20, 55, 90, 15).stroke();
    doc.text('Nature of the Event:\nConference/Technical Symposium/Workshop/\nSeminar/Guest/Lecture/FDP/Any other',22, 61);
    doc.rect(110, 55, 90, 15).stroke();
    doc.text(`${data.sub_report}`, 113, 65);///Nature of the Event 
    doc.setFontSize(11);
    
    
    doc.rect(10, 70, 10, 10).stroke();
    doc.text('2.', 12, 78);
    doc.rect(20, 70, 90, 10).stroke();
    doc.text('Title of the event',22, 78);
    doc.rect(110, 70, 90, 10).stroke();
    doc.text(`${data.event_title}`, 113, 78);///Title of the Event
    
    
    doc.rect(10, 80, 10, 10).stroke();
    doc.text('3.', 12, 88);
    doc.rect(20, 80, 90, 10).stroke();
    doc.text('Organized by',22, 88);
    doc.rect(110, 80, 90, 10).stroke();
    doc.text(`${data.event_organizer}`, 113, 88);//Event Organizer
    
    
    
    doc.rect(10, 90, 10, 10).stroke();
    doc.text('4.', 12, 98);
    doc.rect(20, 90, 90, 10).stroke();
    doc.text('Collaboration/Sponsoring Agency',22, 98);
    doc.rect(110, 90, 90, 10).stroke();
    doc.text(`${data.event_sponsor}`, 113, 98);///Event Sponsor
    
    
    doc.rect(10, 100, 10, 10).stroke();
    doc.text('5.', 12, 108);
    doc.rect(20, 100, 90, 10).stroke();
    doc.text('Date of the Event Planned',22, 108);
    doc.rect(110, 100, 90, 10).stroke();
    doc.text(`${data.event_date}`, 113, 108);////Date of the Event 
    
    doc.rect(10, 110, 10, 10).stroke();
    doc.text('6.', 12, 118);
    doc.rect(20, 110, 90, 10).stroke();
    doc.text('Venue',22, 118);
    doc.rect(110, 110, 90, 10).stroke();
    doc.text(`${data.event_venue}`, 113, 118);//////Event Venue
    
    
    doc.rect(10, 120, 10, 50).stroke();
    doc.text('7.', 12, 128);
    doc.rect(20, 120, 90, 50).stroke();
    doc.text('Details of the Guest',22, 128);
    
    doc.rect(110, 120, 23, 10).stroke();
    doc.text('Name', 111, 128);
    doc.rect(133, 120,67, 10).stroke();
    doc.text(`${data.guest_name}`, 135, 128);//Name of the Guest
    doc.rect(110, 130, 23, 10).stroke();
    doc.text('Designation', 111, 138);
    doc.rect(133, 130,67, 10).stroke();
    doc.text(`${data.guest_designation}`, 135, 138);//////Desisgnation
    doc.rect(110, 140, 23, 10).stroke();
    doc.text('Address', 111, 148);
    doc.rect(133, 140,67, 10).stroke();
    doc.text(`${data.guest_address}`, 135, 148);/////Address
    doc.rect(110, 150, 23, 10).stroke();
    doc.text('Contact No', 111, 158);
    doc.rect(133, 150,67, 10).stroke();
    doc.text(`${data.guest_mobile_number}`, 135, 158);
    doc.rect(110, 160, 23, 10).stroke();
    doc.text('Mail-id', 111, 168);
    doc.rect(133, 160,67, 10).stroke();
    doc.text(`${data.guest_email}`, 135, 168);
    
    doc.rect(10, 170, 10, 21).stroke();
    doc.text('8.', 12, 180);
    doc.rect(20, 170, 90, 21).stroke();
    doc.text('Total Participants expected',22, 183);
    
    doc.setFontSize(10);
    doc.rect(110, 170, 23, 7).stroke();
    doc.text('MEC Students', 110.5, 175);
    doc.rect(133, 170,67, 7).stroke();
    doc.text(`${data.student_count}`, 135, 175);
    
    doc.rect(110, 177, 23, 7).stroke();
    doc.text('MEC Faculty', 110.5, 182);
    doc.rect(133, 177,67, 7).stroke();
    doc.text(`${data.faculty_count}`, 135, 182);
    
    doc.rect(110, 184, 23, 7).stroke();
    doc.text('Others', 110.5, 189);
    doc.rect(133, 184,67, 7).stroke();
    doc.text(`${data.others_count}`, 135, 189);
    
    doc.setFontSize(11);
    doc.rect(10, 191, 10, 10).stroke();
    doc.text('9.', 12, 200);
    doc.rect(20, 191, 90, 10).stroke();
    doc.text('Proposed Budget\n (Attach Details in Annexure)',22, 195 );
    doc.rect(110, 191, 90, 10).stroke();
    doc.text(`${data.event_budget}`, 113, 199);////Event Budget
    
    doc.rect(10, 201, 100, 50).stroke();
    doc.rect(110, 201, 90, 50).stroke();
    
    doc.rect(10, 251, 190, 7).stroke();
    doc.text('POs and PSOs Mapping',90,255)
    
    
    doc.rect(10, 258, 12, 9).stroke();
    doc.text('PO1',13,264);
    doc.rect(22, 258, 12, 9).stroke();
    doc.text('PO2',25,264);
    doc.rect(34, 258, 12, 9).stroke();
    doc.text('PO3',37,264);
    doc.rect(46, 258, 12, 9).stroke();
    doc.text('PO4',49,264);
    doc.rect(58, 258, 12, 9).stroke();
    doc.text('PO5',61,264);
    doc.rect(70, 258, 12, 9).stroke();
    doc.text('PO6',73,264);
    doc.rect(82, 258, 12, 9).stroke();
    doc.text('PO7',85,264);
    doc.rect(94, 258, 12, 9).stroke();
    doc.text('PO8',97,264);
    doc.rect(106, 258, 12, 9).stroke()
    doc.text('PO9',109,264);
    doc.rect(118, 258, 12, 9).stroke()
    doc.text('PO10',120,264);
    doc.rect(130, 258, 12, 9).stroke()
    doc.text('PO11',132,264);
    doc.rect(142, 258, 12, 9).stroke()
    doc.text('PO12',144,264);
    doc.rect(154, 258, 15, 9).stroke()
    doc.text('PSO1',156,264);
    doc.rect(169, 258, 15, 9).stroke()
    doc.text('PSO2',171,264);
    doc.rect(184, 258, 16, 9).stroke()
    doc.text('PSO3',186,264);
    
    doc.rect(10,267,12,9).stroke();
    doc.text('',13,273);
    doc.rect(22, 267, 12, 9).stroke();
    doc.text('',25,273);
    doc.rect(34, 267, 12, 9).stroke();
    doc.text('',37,273);
    doc.rect(46, 267, 12, 9).stroke();
    doc.text('',49,273);
    doc.rect(58, 267, 12, 9).stroke();
    doc.text('',61,273);
    doc.rect(70, 267, 12, 9).stroke();
    doc.text('',73,273);
    doc.rect(82, 267, 12, 9).stroke();
    doc.text('',85,273);
    doc.rect(94, 267, 12, 9).stroke();
    doc.text('',97,273);
    doc.rect(106, 267, 12, 9).stroke();
    doc.text('',109,273);
    doc.rect(118, 267, 12, 9).stroke();
    doc.text('',120,273);
    doc.rect(130, 267, 12, 9).stroke();
    doc.text('',132,273);
    doc.rect(142, 267, 12, 9).stroke();
    doc.text('',144,273);
    doc.rect(154, 267, 15, 9).stroke();
    doc.text('',156,273);
    doc.rect(169, 267, 15, 9).stroke();
    doc.text('',171,273);
    doc.rect(184, 267, 16, 9).stroke();
    doc.text('',186,273);
    
    
    doc.setFont("times");
    doc.setFontSize(8);
    
    doc.text('* Attach enclosures', 15, 280);
    doc.setFont("times","bold");
    doc.setFontSize(11);
    doc.text('HoD', 100, 295);
    doc.text('Event Coordinator(s)', 10, 295);
    doc.text('Principal', 170, 295);
    
    
    ////////////////////////////////////// ECR ENCLOSURE /////////////////////////////////////
    
    
    doc.addPage();
    doc.addImage(Image, 'PNG', 10, 7, 25, 25);
    doc.addImage(Image2, 'PNG', 173, 7, 25, 25);
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',35, 15);
    doc.setFontSize(10);
    doc.setFont("times", "");
    doc.text('(An Autonomous Institution)', 80, 20);
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)', 35, 25);
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu', 65, 30);
    
     
    doc.setFontSize(13);
    doc.setFont('times', 'bold');
    doc.text("ECR-Enclosures", 90, 40);
    doc.text("Name of the Event:", 10, 50);
    doc.setFont('times', '');
    doc.text(`${data.sub_report}`, 50, 50); //name of the event
    doc.setFont('times', 'bold');
    doc.text("Date of the Event Conducted:", 10, 57);
    doc.setFont('times', '');
    doc.text(`${data.event_date}`, 70, 57); //Date
    
    doc.rect(10, 65, 10, 10).stroke();
    doc.text('S.no', 11, 71);
    doc.rect(20, 65, 90, 10).stroke();
    doc.text('Description', 50, 71);
    doc.rect(110, 65, 90, 10).stroke();
    doc.text('Please tick Enclosure', 140, 71);
    
    doc.setFont('times', '');
    doc.rect(10, 75, 10, 10).stroke();
    doc.text('1.', 13, 81);
    doc.rect(20, 75, 90, 10).stroke();
    doc.text('Event Proposal (EP)', 22, 81);
    doc.rect(110, 75, 90, 10).stroke();
    doc.text('', 155, 81);
    
    doc.rect(10, 85, 10, 10).stroke();
    doc.text('2.', 13, 91);
    doc.rect(20, 85, 90, 10).stroke();
    doc.text('Budget Proposed', 22, 91);
    doc.rect(110, 85, 90, 10).stroke();
    doc.text('', 155, 91);
    
    doc.rect(10, 95, 10, 10).stroke();
    doc.text('3.', 13, 101);
    doc.rect(20, 95, 90, 10).stroke();
    doc.text('Event Planner', 22, 101);
    doc.rect(110, 95, 90, 10).stroke();
    doc.text('', 155, 101);
    
    doc.rect(10, 105, 10, 10).stroke();
    doc.text('4.', 13, 111);
    doc.rect(20, 105, 90, 10).stroke();
    doc.text('Resource Person Invitation & Thanks letter', 22, 111);
    doc.rect(110, 105, 90, 10).stroke();
    doc.text('', 155, 111);
    
    doc.rect(10, 115, 10, 10).stroke();
    doc.text('5.', 13, 121);
    doc.rect(20, 115, 90, 10).stroke();
    doc.text('Acceptance Letter from Resource Person', 22, 121);
    doc.rect(110, 115, 90, 10).stroke();
    doc.text('', 155, 121);
    
    doc.rect(10, 125, 10, 10).stroke();
    doc.text('6.', 13, 131);
    doc.rect(20, 125, 90, 10).stroke();
    doc.text('Resource Person\'s Profile', 22, 131);
    doc.rect(110, 125, 90, 10).stroke();
    doc.text('', 155, 131);
    
    doc.rect(10, 135, 10, 10).stroke();
    doc.text('7.', 13, 141);
    doc.rect(20, 135, 90, 10).stroke();
    doc.text('Invitation', 22, 141);
    doc.rect(110, 135, 90, 10).stroke();
    doc.text('', 155, 141);
    
    doc.rect(10, 145, 10, 10).stroke();
    doc.text('8.', 13, 151);
    doc.rect(20, 145, 90, 10).stroke();
    doc.text('Agenda', 22, 151);
    doc.rect(110, 145, 90, 10).stroke();
    doc.text('', 155, 151);
    
    doc.rect(10, 155, 10, 10).stroke();
    doc.text('9.', 13, 161);
    doc.rect(20, 155, 90, 10).stroke();
    doc.text('Handouts of the Talk', 22, 161);
    doc.rect(110, 155, 90, 10).stroke();
    doc.text('', 155, 161);
    
    
    doc.rect(10, 165, 10, 10).stroke();
    doc.text('10.', 13, 171);
    doc.rect(20, 165, 90, 10).stroke();
    doc.text('Participants Attendance', 22, 171);
    doc.rect(110, 165, 90, 10).stroke();
    doc.text('', 155, 171);
    
    doc.rect(10, 175, 10, 10).stroke();
    doc.text('11.', 13, 181);
    doc.rect(20, 175, 90, 10).stroke();
    doc.text('Resource Person\'s Feedback', 22, 181);
    doc.rect(110, 175, 90, 10).stroke();
    doc.text('', 155, 181);
    
    doc.rect(10, 185, 10, 10).stroke();
    doc.text('12.', 13, 191);
    doc.rect(20, 185, 90, 10).stroke();
    doc.text('Participants Feedback', 22, 191);
    doc.rect(110, 185, 90, 10).stroke();
    doc.text('', 155, 191);
    
    doc.rect(10, 195, 10, 10).stroke();
    doc.text('13.', 13, 201);
    doc.rect(20, 195, 90, 10).stroke();
    doc.text('Event Photos', 22, 201);
    doc.rect(110, 195, 90, 10).stroke();
    doc.text('', 155, 201);
    
    doc.rect(10, 205, 10, 10).stroke();
    doc.text('14.', 13, 211);
    doc.rect(20, 205, 90, 10).stroke();
    doc.text('Budget Utilization', 22, 211);
    doc.rect(110, 205, 90, 10).stroke();
    doc.text('', 155, 211);
    
    doc.rect(10, 215, 10, 10).stroke();
    doc.text('15.', 13, 221);
    doc.rect(20, 215, 90, 10).stroke();
    doc.text('News published in Papers', 22,221);
    doc.rect(110, 215, 90, 10).stroke();
    doc.text('', 155, 221);
    
    doc.rect(10, 225, 10, 10).stroke();
    doc.text('16.', 13, 231);
    doc.rect(20, 225, 90, 10).stroke();
    doc.text('News published in College Website)', 22, 231);
    doc.rect(110, 225, 90, 10).stroke();
    doc.text('', 155, 231);
    
    doc.rect(10, 235, 10, 10).stroke();
    doc.text('17.', 13, 241);
    doc.rect(20, 235, 90, 10).stroke();
    doc.text('One PPT slide about the program', 22, 241);
    doc.rect(110, 235, 90, 10).stroke();
    doc.text('', 155, 241);
    
    doc.setFont('times', 'bold');
    doc.text('Event Coordinator', 20, 267);
    doc.text('HoD', 160, 267);
    
    
    ///////////////////////////////////////////Event Proposal //////////////////////////////
    doc.addPage();
          doc.addImage(Image, 'PNG', 10, 3, 20, 20);
      doc.addImage(Image2, 'PNG', 12,23, 15, 15);
      doc.addImage(Image3, 'JPG', 175, 3, 20, 15);
    doc.addImage(Image4, 'JPG', 175, 20, 20, 15);
    
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',35, 15);
    doc.setFontSize(10);
    doc.setFont("times", "");
    doc.text('(An Autonomous Institution)', 80, 20);
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)', 35, 25);
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu', 65, 30);
    
    
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.rect(10, 40, 20, 7);
    doc.text(`${data.event_organizer}`, 15, 45);///Department
    
    doc.rect(80, 40, 50, 7);
    doc.text('EVENT PROPOSAL', 85, 45);
    
    doc.rect(170, 40, 30, 7);
    doc.text(`${data.acdyr_id}`, 173, 45);//academic year
    
    doc.setFont("times","")
    doc.rect(10, 55, 10, 20).stroke();
    doc.text('1.', 12, 65);
    doc.rect(20, 55, 90, 20).stroke();
    doc.text('Nature of the Event:\nConference/Technical Symposium/Workshop/\nSeminar/Guest/Lecture/FDP/Any other',22, 61);
    doc.rect(110, 55, 90, 20).stroke();
    doc.text(`${data.sub_report}`, 113, 65);//Nature of the Event
    
    
    doc.rect(10, 75, 10, 10).stroke();
    doc.text('2.', 12, 81);
    doc.rect(20, 75, 90, 10).stroke();
    doc.text('Title of the event',22, 81);
    doc.rect(110, 75, 90, 10).stroke();
    doc.text(`${data.event_title}`, 113, 81);//Event Title
    
    
    doc.rect(10, 85, 10, 10).stroke();
    doc.text('3.', 12, 91);
    doc.rect(20, 85, 90, 10).stroke();
    doc.text('Organized by',22, 91);
    doc.rect(110, 85, 90, 10).stroke();
    doc.text(`${data.event_organizer}`, 113, 91);//Event Organizer
    
    
    
    doc.rect(10, 95, 10, 10).stroke();
    doc.text('4.', 12, 101);
    doc.rect(20, 95, 90, 10).stroke();
    doc.text('Collaboration/Sponsoring Agency',22, 101);
    doc.rect(110, 95, 90, 10).stroke();
    doc.text(`${data.event_sponsor}`, 113, 101);//Sponsor Name
    
    
    doc.rect(10, 105, 10, 10).stroke();
    doc.text('5.', 12, 111);
    doc.rect(20, 105, 90, 10).stroke();
    doc.text('Date of the Event Planned',22, 111);
    doc.rect(110, 105, 90, 10).stroke();
    doc.text(`${data.event_date}`, 113, 111);//Event Date
    
    doc.rect(10, 115, 10, 10).stroke();
    doc.text('6.', 12, 121);
    doc.rect(20, 115, 90, 10).stroke();
    doc.text('Venue',22, 121);
    doc.rect(110, 115, 90, 10).stroke();
    doc.text(`${data.event_venue}`, 113, 121);
    
    
    doc.rect(10, 125, 10, 50).stroke();
    doc.text('7.', 12, 141);
    doc.rect(20, 125, 90, 50).stroke();
    doc.text('Details of the Guest',22, 141);
    
    doc.rect(110, 125, 23, 10).stroke();
    doc.text('Name', 111, 131);
    doc.rect(133, 125,67, 10).stroke();
    doc.text(`${data.guest_name}`, 135, 131);///Name of the Guest 
    doc.rect(110, 135, 23, 10).stroke();
    doc.text('Designation', 111, 141);
    doc.rect(133, 135,67, 10).stroke();
    doc.text(`${data.guest_designation }`, 135, 141);///Guest Designation
    doc.rect(110, 145, 23, 10).stroke();
    doc.text('Address', 111, 151);
    doc.rect(133, 145,67, 10).stroke();
    doc.text(`${data.guest_address}`, 135, 151);//Guest Address
    doc.rect(110, 155, 23, 10).stroke();
    doc.text('Contact No', 111, 161);
    doc.rect(133, 155,67, 10).stroke();
    doc.text(`${data.guest_mobile_number}`, 135, 161);//Contact no
    doc.rect(110, 165, 23, 10).stroke();
    doc.text('Mail-id', 111, 171);
    doc.rect(133, 165,67, 10).stroke();
    doc.text(`${data.guest_email}`, 135, 171);/////Guest Mail id
    
    doc.rect(10, 175, 10, 30).stroke();
    doc.text('8.', 12, 190);
    doc.rect(20, 175, 90, 30).stroke();
    doc.text('Total Participants expected',22, 190);
    
    doc.rect(110, 175, 23, 10).stroke();
    doc.text('MEC\nStudents', 110.5, 179);
    doc.rect(133, 175,67, 10).stroke();
    doc.text(`${data.student_count}`, 135, 181);//Count of the Student
    
    doc.rect(110, 185, 23, 10).stroke();
    doc.text('MEC\nFaculty', 110.5, 189);
    doc.rect(133, 185,67, 10).stroke();
    doc.text(`${data.faculty_count}`, 135, 191);//COunt of the Faculty
    
    doc.rect(110, 195, 23, 10).stroke();
    doc.text('Others', 110.5, 201);
    doc.rect(133, 195,67, 10).stroke();
    doc.text(`${data.others_count}`, 135, 201);//Count of Others
    
    doc.rect(10, 205, 10, 10).stroke();
    doc.text('9.', 12, 211);
    doc.rect(20, 205, 90, 10).stroke();
    doc.text('Proposed Budget',22, 211);
    doc.rect(110, 205, 90, 10).stroke();
    doc.text(`${data.event_budget}`, 113, 211);//Event Budget
    
    
    doc.rect(10, 215, 10, 40).stroke();
    doc.text('10.', 12, 230);
    doc.rect(20, 215, 90, 40).stroke();
    doc.text('Co-ordinator of the Event',22, 230);
    
    doc.rect(110, 215, 23, 10).stroke();
    doc.text('Name', 111, 221);
    doc.rect(133, 215,67, 10).stroke();
    doc.text(`${data.event_coordinator}`, 135, 221);//Coordinator Name
    doc.rect(110, 225, 23, 10).stroke();
    doc.text('Designation', 111, 231);
    doc.rect(133, 225,67, 10).stroke();
    doc.text(`${data.coordinator_designation}`, 135, 231);///Cordinator Designation
    doc.rect(110, 135, 23, 10).stroke();
    doc.text('Contact No', 111, 241);
    doc.rect(133, 235,67, 10).stroke();
    doc.text(`${data.coordinator_mobile_number}`, 135, 241);///Cordinator Mobile Number
    doc.rect(110, 245, 23, 10).stroke();
    doc.text('Co-ordinator\nSign', 111, 249);
    doc.rect(133, 245,67, 10).stroke();
    doc.text('', 135, 251);
    
    doc.setFont("times","bold");
    
    doc.text('* Attach Invitation Brochure', 15, 265);
    doc.text('HoD', 155, 275);
    doc.text('Approved Not Approved', 16, 280);
    doc.text('Principal', 155, 290);
    
    
    
    /////////////////////////////////////////////// BUDGET PROPOSAL //////////////////////////
    doc.addPage();
    doc.addImage(Image, 'PNG', 10, 7, 25, 25);
    doc.addImage(Image2, 'PNG', 173, 7, 25, 25);
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',35, 15);
    doc.setFontSize(10);
    doc.setFont("times", "");
    doc.text('(An Autonomous Institution)', 80, 20);
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)', 35, 25);
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu', 65, 30);
    doc.setFont("times", "bold");
    doc.setFontSize(19);
    doc.text('Budget Proposal', 80, 45);
    doc.setFontSize(18);
    doc.text('Date of the Event:', 15, 60);
    doc.setFont("times", ""); 
    doc.setFontSize(15);
    doc.text('To the Management through Principle', 15, 70);
    doc.setFont("times", "bold");
    doc.text('Total Paticipants:', 15, 90);
    doc.rect(15, 100, 15, 12).stroke();
    doc.text('S.no', 17, 106);
    doc.rect(30, 100, 125, 12).stroke();
    doc.text('Details', 60, 106);
    doc.rect(155, 100, 45, 12).stroke();
    doc.text('Cost (in Rs)', 157, 106);
    doc.setFont("times", "");
    doc.rect(15, 112, 15, 12).stroke();
    doc.text('1', 19, 120);
    doc.rect(30, 112, 125, 12).stroke();
    doc.text('Chief Guest Remuneration', 35, 120);
    doc.rect(155, 112, 45, 12).stroke();
    doc.text(`${data.event_budget}`, 157, 120);// budget amount
    doc.rect(15, 124, 15, 12).stroke();
    doc.text('', 19, 132);
    doc.rect(30, 124, 125, 12).stroke();
    doc.text('Total', 35, 132);
    doc.rect(155, 124, 45, 12).stroke();
    doc.text(`${data.event_budget}`, 157, 132);// total budget amount
    doc.rect(15, 136, 185, 12).stroke();
    doc.text('In Words:', 19, 144);
    doc.text('One Thousand Rupees only/-',45,144);//In words budg
    doc.text('Event Coordinator(s)', 15, 234);
    doc.text('HOD', 90, 234);
    doc.text('Principal', 167, 234);
    
    /////////////////////////////////////////////////InfraR/////////////////////////////////////////////
    
    doc.addPage();
    doc.addImage(Image, 'PNG', 10, 7, 25, 25);
    doc.addImage(Image2, 'PNG', 173, 7, 25, 25);
    
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',35, 15);
    doc.setFontSize(10);
    doc.setFont("times", "");
    doc.text('(An Autonomous Institution)', 80, 20);
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)', 35, 25);
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu', 65, 30);
    
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.rect(10, 40, 30, 7);
    doc.text('EP', 21, 45);
    doc.rect(10, 47, 30, 7);
    doc.text('InfraR', 17, 52);
    
    
    doc.rect(60, 40, 80, 7);
    doc.text('EVENT PROPOSAL', 85, 45);
    doc.rect(60, 47, 80, 7);
    doc.text('Infrastructure and Facilities Requirements', 61, 52);
    
    
    doc.rect(170, 43, 30, 7);
    doc.text(`${data.acdyr_id}`, 173, 47.5);//academic year
    
    
    doc.setFont("times", "bold");
    doc.rect(10, 60, 10, 10);
    doc.text('S.no', 11,66);
    doc.rect(20, 60, 75, 10);
    doc.text('Activity', 45, 66);
    doc.rect(95, 60, 75, 10);
    doc.text('Remarks', 123, 66);
    doc.rect(170, 60, 30, 10);
    doc.text('Responsible\n     Person', 175, 64);
    
    doc.setFont("times", "");
    doc.rect(10, 70, 10, 10);
    doc.text('1.', 13, 76);
    doc.rect(20, 70, 75, 10);
    doc.text('Title of the Event', 22, 76);
    doc.rect(95, 70, 75, 10);
    doc.text('', 97, 76);
    doc.rect(170, 70, 30, 40);
    doc.text('SPOC', 180, 90);
    
    doc.rect(10, 80, 10, 10);
    doc.text('2.', 13, 86);
    doc.rect(20, 80, 75, 10);
    doc.text('Organized by', 22, 86);
    doc.rect(95, 80, 75, 10);
    doc.text('', 97, 86);
    
    doc.rect(10, 90, 10, 10);
    doc.text('3.', 13, 96);
    doc.rect(20, 90, 75, 10);
    doc.text('Date of the Event', 22, 96);
    doc.rect(95, 90, 75, 10);
    doc.text('', 97, 96);
    
    doc.rect(10, 100, 10, 10);
    doc.text('4.', 13, 106);
    doc.rect(20, 100, 75, 10);
    doc.text('Duration of the Event', 22, 106);
    doc.rect(95, 100, 75, 10);
    doc.text('', 97, 106);
    
    
    doc.rect(10, 110, 10, 10);
    doc.text('5.', 13, 116);
    doc.rect(20, 110, 75, 10);
    doc.text('Venue (Online/Offline)', 22, 116);
    doc.rect(95, 110, 75, 10);
    doc.text('cloud', 97, 116);
    doc.rect(170, 110, 30, 10);
    doc.text('SPOC,PRO', 177, 116);
    
    
    doc.rect(10, 120, 10, 20);
    doc.text('6.', 13, 131);
    doc.rect(20, 120, 75, 10);
    doc.text('Event Single point of Contact\n(SPOC) (Coordinator)', 22, 124);
    doc.rect(95, 120, 75, 10);
    doc.text('', 97, 126);
    doc.rect(20, 130, 75, 10);
    doc.text('Mobile No', 22, 136);
    doc.rect(95, 130, 75, 10);
    doc.text('', 97, 136);
    doc.rect(170, 120, 30, 20);
    doc.text('SPOC', 180, 131);
    
    
    doc.rect(10, 140, 10, 50);
    doc.text('7.', 13, 166);
    doc.rect(20, 140, 75, 50);
    doc.text('Details of the Guest', 22, 166);
    doc.rect(95, 140, 75, 10);
    doc.text('', 97, 146);
    doc.rect(170, 140, 30, 50);
    doc.text('SPOC', 180, 166);
    
    
    doc.rect(10, 190, 10, 10);
    doc.text('8.', 13, 196);
    doc.rect(20, 190, 75, 10);
    doc.text('Number of participants expected', 22, 196);
    doc.rect(95, 190, 75, 10);
    doc.text('', 97, 196);
    doc.rect(170, 190, 30, 10);
    doc.text('SPOC', 180, 196);
    
    
    doc.rect(10, 200, 10, 10);
    doc.text('9.', 13, 206);
    doc.rect(20, 200, 75, 10);
    doc.text('Computing facility required', 22, 206);
    doc.rect(95, 200, 75, 10);
    doc.text('YES/NO', 97, 206);
    doc.rect(170, 200, 30, 10);
    doc.text('PRO', 182, 206);
    
    
    
    doc.rect(10, 210, 10, 10);
    doc.text('10.', 13, 216);
    doc.rect(20, 210, 75, 10);
    doc.text('Photographer required', 22, 216);
    doc.rect(95, 210, 75, 10);
    doc.text('YES/NO', 97, 216);
    doc.rect(170, 210, 30, 10);
    doc.text('PRO', 182, 216);
    
    
    doc.rect(10, 220, 10, 10);
    doc.text('11.', 13, 226);
    doc.rect(20, 220, 75, 10);
    doc.text('Is Upcoming Events for\nSubmission to Website ready?',22, 224);
    doc.rect(95, 220, 75, 10);
    doc.text('YES/NO', 97, 226);
    doc.rect(170, 220, 30, 10);
    doc.text('PRO', 182, 226);
    
    
    doc.rect(10, 230, 10, 10);
    doc.text('12.', 13, 236);
    doc.rect(20, 230, 75, 10);
    doc.text('Is a Brief description about the Chief Guest\nfor Submission to PRO ready?',22, 234);
    doc.rect(95, 230, 75, 10);
    doc.text('YES/NO', 97, 236);
    doc.rect(170, 230, 30, 10);
    doc.text('Manager', 178, 236);
    
    doc.rect(10, 240, 10, 10);
    doc.text('13.', 13, 246);
    doc.rect(20, 240, 75, 10);
    doc.text('Accommodation Required?\nGuest/ Participants',22, 244);
    doc.rect(95, 240, 75, 10);
    doc.text('YES/NO', 97, 246);
    doc.rect(170, 240, 30, 10);
    doc.text('SPOC', 180, 246);
    
    doc.setFont("times","bold")
    doc.text('Event SPOC', 20, 276);
    doc.text('HoD', 100, 276);
    doc.text('Principal', 170, 276);
    
    
    /////////////////////////////////////////////////Event Planner/////////////////////////////////////////////
    
    doc.addPage();
    doc.addImage(Image, 'PNG', 10, 7, 25, 25);
    doc.addImage(Image2, 'PNG', 173, 7, 25, 25);
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',35, 15);
    doc.setFontSize(10);
    doc.setFont("times", "");
    doc.text('(An Autonomous Institution)', 80, 20);
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)', 35, 25);
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu', 65, 30);
    
    doc.setFontSize(13);
    doc.setFont('times', 'bold');
    doc.text('Event Planner',80,45 );
    doc.setFontSize(14);
    doc.text('DEPARTMENT OF ',28,54);//dept full nmae
    doc.setFont('times', 'roman');
    doc.rect(8,58,50,10).stroke();
    doc.text('Event Date:',10,65);
    doc.text(`${data.event_date}`,35,65);////Event Date 
    doc.rect(165,58,30,10);
    doc.text(`${data.acdyr_id}`,170,65);///Academic Year
    
     
    
    doc.text('\tThis is to inform the Faculty member that,the following committees have been formed for \nsmooth conductance of workshop has organize by our Department of Computer Science and\n Engineering,the commitee memmber are requested to carry out their resposibilities to perfection.',10,79)
    doc.rect(15,110,15,12).stroke()
    doc.text('S.NO',17,117)
    doc.rect(30,110,70,12).stroke();
    doc.text('Name of the committee',40,117)
    doc.rect(100,110,60,12).stroke()
    doc.text('In charge(s)',110,117)
    doc.rect(160,110,40,12).stroke()
    doc.text('Remark',170,117)
    doc.rect(15,122,15,15).stroke()
    doc.text('1',19,129)
    doc.rect(30,122,70,15).stroke()
    doc.text('Organization Secretary',34,130)
    
    doc.rect(100,122,60,15).stroke()
    doc.text('Dr.G.Kavitha',103,130)//////Event Organization seretary
    doc.rect(160,122,40,32).stroke()
    doc.text('',163,130)
    
    doc.rect(15,137,15,17).stroke()
    doc.text('2',19,144)
    doc.rect(30,137,70,17).stroke()
    doc.text('permission & Report Preparation \nInvitation Flux Designing',33,143)
    doc.rect(100,137,60,17).stroke()
    doc.text('Dr.G.Kavitha',102,146)////Event Report Preparation
    
    doc.setFont('times', 'bold');
    doc.text('Coordinated',30,220)
    doc.text('HOD',170,220)
    
    
    
    //////////////////////////////////////////////// Invitation ////////////////////////////////////////
    doc.addPage();
    doc.addImage(Image, 'PNG', 10, 7, 25, 25);
    doc.addImage(Image2, 'PNG', 173, 7, 25, 25);
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',35, 15);
    doc.setFontSize(10);
    doc.setFont("times", "");
    doc.text('(An Autonomous Institution)', 80, 20);
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)', 35, 25);
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu', 65, 30);
    doc.setFontSize(13);
    doc.setFont("times", "bold");
    doc.text('Department of Computer Science and Engineering',58,50);
    doc.setFont("times", "roman");
    doc.text('in Association with',85,57);
    doc.text('Computer Society of India(CSI)',72,64);
    doc.setFont("times", "italic");
    doc.text('The Management, Principal, Faculty and Students Cardially Invite you to the',38,74);
    doc.setFont("times", "roman");
    doc.setFont("times", "bold");
    doc.text('WORKSHOP',90,84);
    doc.setFont("times", "roman");
    doc.text('On',100,92);
    doc.text('Cloud',98,100);
    doc.text('Resource Person',89,110);
    doc.setFont("times", "bold");
    doc.text('Vijayprakash M',90,120);
    doc.setFont("times", "italic");
    doc.text('Student',98,127);
    doc.setFont("times", "roman");
    doc.setFont("times", "bold");
    doc.text('Dr.K.Gunasekaran',88,137);
    doc.setFont("times", "italic");
    doc.text('Secretary & Managing Trustee',80,144);
    doc.text('Muthayammal Educational Trust and Research Foundation',55,151);
    doc.text('will preside over the function',82,158);
    doc.setFont("times", "roman");
    doc.setFont("times", "bold");
    doc.text('Dr.M.Madheshwaran',87,168);
    doc.setFont("times", "italic");
    doc.text('Principal',98,175);
    doc.text('Muthayammal Engineering College',73,182);
    doc.text('will feliciate the function',86,189);
    doc.setFont("times", "roman");
    doc.setFont("times", "bold");
    doc.text('Dr.G.Kavitha',94,199);
    doc.setFont("times", "italic");
    doc.text('HoD-CSE',96,206);
    doc.text('Will Welcome The Gathering',80,213);
    doc.setFont("times", "bold");
    doc.text('Date:" "',20,240);//date
    doc.text('Time:" "',80,240);//time
    doc.text('Venue:" "',140,240);//place
    doc.setFont("times", "roman");
    doc.setFont("times", "italic");
    doc.text('Dr.G.Kavitha, Professor & Head',20,254);
    doc.text('Dr.G.Kavitha',20,263);
    doc.text('Co-Ordinator',20,272);
    
    
    ////////////////////////////////////////Event photos///////////////////////////////////
    
    doc.addPage();
    doc.addImage(Image, 'PNG', 10, 7, 25, 25);
    doc.addImage(Image2, 'PNG', 173, 7, 25, 25);
    
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',35, 15);
    doc.setFontSize(10);
    doc.setFont("times", "");
    doc.text('(An Autonomous Institution)', 80, 20);
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)', 35, 25);
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu', 65, 30);
    
    doc.setFontSize(12);
    doc.setFont("times", "bold");
    
    doc.rect(10,40,25,10)
    doc.text('',17.5, 46); //department
    
    doc.rect(60,40,75,10)
    doc.text('',65, 46);//topic
    
    doc.rect(165,40,25,10)
    doc.text('',168.5, 46);//academic year
    
    doc.setFontSize(15)
    doc.text("Event Photos",85,65)
    
    doc.rect(10,90,95,105)
    doc.rect(105,90,95,105)
    
    ////////////////////////////////////////Budget Utilized//////////////////////////////////
    
    
    doc.addPage();
    doc.addImage(Image, 'PNG', 10, 7, 25, 25);
    doc.addImage(Image2, 'PNG', 173, 7, 25, 25);
    
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',35, 15);
    doc.setFontSize(10);
    doc.setFont("times", "");
    doc.text('(An Autonomous Institution)', 80, 20);
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)', 35, 25);
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu', 65, 30);
    
    doc.setFont("times", "bold");
    doc.setFontSize(19);
    doc.text('Budget Utilized', 80, 45);
    doc.setFontSize(18);
    doc.text('Date of the Event:', 15, 60);
    doc.setFont("times","");
    doc.text('',65, 60);
    
    doc.setFont("times", "");
    doc.setFontSize(15);
    doc.text('To the Management through Principle', 15, 70);
    doc.setFont("times", "bold");
    doc.text('Total Paticipants:', 15, 90);
    doc.setFont("times","");
    doc.text('',57, 90);
    doc.setFont("times", "bold");
    doc.rect(15, 100, 15, 12).stroke();
    doc.text('S.no', 17, 108);
    doc.rect(30, 100, 125, 12).stroke();
    doc.text('Details', 80, 108);
    doc.rect(155, 100, 45, 12).stroke();
    doc.text('Cost (in Rs)', 165, 108);
    
    doc.setFont("times", "");
    doc.rect(15, 112, 15, 12).stroke();
    doc.text('1', 19, 120);
    doc.rect(30, 112, 125, 12).stroke();
    doc.text('Chief Guest Remuneration', 35, 120);
    doc.rect(155, 112, 45, 12).stroke();
    doc.text('', 157, 120); // budget
    
    doc.setFont("times", "bold");
    doc.rect(15, 124, 15, 12).stroke();
    doc.text('', 19, 132);
    doc.rect(30, 124, 125, 12).stroke();
    doc.text('Total', 35, 132);
    doc.rect(155, 124, 45, 12).stroke();
    doc.text('', 157, 132); //total budget
    doc.rect(15, 136, 185, 12).stroke();
    doc.text('In Words', 19, 144);
    
    doc.setFont("times","bold");
    doc.text('Event Coordinator(s)', 15, 234);
    doc.text('HOD', 100, 234);
    doc.text('Principal', 167, 234);
    
    
    
    
    /////////////////////////////////One Slide PPT/////////////////////////////////////////////////////////////////////////////
    
    doc.addPage();
    doc.setFontSize(10);
    
    doc.rect(20,45,80,8).stroke()
    doc.setFont("times", "bold");
    doc.text("Nature of the Event",23,50)
    doc.rect(100,45,100,8).stroke()
    doc.setFont("times",'');
    doc.text(`${data.sub_report}`,103,50)
    doc.rect(20,53,80,8).stroke()
    doc.setFont("times",'bold')
    doc.text("Title of the Event",23,58)
    doc.rect(100,53,100,8).stroke()
    doc.setFont('times','')
    doc.text(`${data.event_title}`,103,58)
    doc.rect(20,61,80,8).stroke()
    doc.setFont("times",'bold');
    doc.text("Organized by",23,66)
    doc.rect(100,61,100,8).stroke()
    doc.setFont("times",'')
    doc.text(`${data.event_organizer}`,103,66)
    
    doc.rect(20,69,80,8).stroke()
    doc.setFont("times",'bold');
    doc.text("Collaborating/Sponsoring Agency",23,74)
    doc.rect(100,69,100,8).stroke()
    doc.setFont("times",'');
    doc.text(`${data.event_sponsor}`,103,74)
    doc.rect(20,77,80,8).stroke()
    doc.setFont("times",'bold');
    doc.text("Date of the Event",23,83)
    doc.rect(100,77,100,8).stroke()
    doc.setFont("times",'')
    doc.text(`${data.event_date}`,103,82)
    doc.rect(20,85,80,8).stroke()
    doc.setFont("times", "bold");
    doc.text("Venue",23,90)
    doc.rect(100,85,100,8).stroke()
    doc.setFont("times",'');
    doc.text(`${data.event_venue}`,103,90)
    
    doc.rect(20,93,80,40).stroke()
    doc.setFont("times",'bold');
    doc.text("Details of the Guest",23,110)
    doc.rect(100,93,40,8).stroke()
    doc.setFont("times",'');
    doc.text("Name",103,98)
    doc.rect(140,93,60,8).stroke()
    doc.text(`${data.guest_name}`,143,98)
    
    doc.rect(100,101,40,8).stroke()
    doc.text("Designation",103,106)
    doc.rect(140,101,60,8).stroke()
    doc.text(`${data.guest_designation}`,143,106)
    
    doc.rect(100,109,40,8).stroke()
    doc.text("Address",103,114)
    doc.rect(140,109,60,8).stroke()
    doc.text(`${data.guest_address}`,143,114)
    
    doc.rect(100,117,40,8).stroke()
    doc.text("Contact Number",103,122)
    doc.rect(140,117,60,8).stroke()
    doc.text(`${data.guest_mobile_number}`,143,122)
    
    doc.rect(100,125,40,8).stroke()
    doc.text("Mail Id",103,130).stroke()
    doc.rect(140,125,60,8).stroke()
    doc.text(`${data.guest_email}`,143,130)
    
    
    doc.rect(20,133,80,24).stroke()
    doc.setFont("times", "bold");
    doc.text("Members Participated in the Event \n (List is to be Attached)",23,145)
    doc.rect(100,133,40,8).stroke()
    doc.setFont("times", "");
    doc.text("MEC Students",103,138)
    doc.rect(140,133,60,8).stroke()
    doc.text(`${data.student_count}`,143,138)
    
    doc.rect(100,141,40,8).stroke()
    doc.text("MEC Faculty",103,146)
    doc.rect(140,141,60,8).stroke()
    doc.text(`${data.faculty_count}`,143,146)
    
    doc.rect(100,149,40,8).stroke()
    doc.text("Others",103,155)
    doc.rect(140,149,60,8).stroke()
    doc.text(`${data.others_count}`,143,155)
    
    doc.rect(20,157,80,8).stroke()
    doc.setFont("times", "bold");
    doc.text("Budget Utilized",23,162)
    doc.rect(100,157,100,8).stroke()
    doc.setFont("times",'')
    doc.text(`${data.event_budget}`,103,162)
    
    doc.rect(20,165,180,8).stroke()
    doc.setFont("times",'bold');
    doc.text("About the Event with Potograph",23,170)
    
    doc.rect(20,173,100,50).stroke()
    doc.setFont("times",'');
    doc.text(" Student TechTalk on  Introduction to  Artificial Intelligence  was \n conducted by the Department of Computer Science and \n Engineering on 16/10/2023. The Resource Person of the event was \n Meghavarshini R, IV CSE B, Department of Computer Science and \n Engineering, Muthayammal Engineering College.  She delivered \n about Definition of AI, role of AI in technology, Algorithm used in\nTraining and the students are actively participated in the Student \n TechTalk..",23,177)
    doc.rect(120,173,80,50).stroke()
    
    ////////////////////////////////////////////////////////    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
        // Generate a data URI for the PDF
        const pdfDataUri = doc.output('datauristring');
    
        // Open the PDF in a new tab or window
        const newWindow = window.open();
        newWindow.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);
      
      }
          
         catch (err) {
          console.error(err);
        }
      }
   

    // const acceptAll=async()=>{
    //     const logged=JSON.parse(sessionStorage.getItem("person"))
    //     const temp = await approveLevel1(logged.dept_id,logged.faculty_id)
    //     setInfo(temp)
    // }
    const pdfAccept=async(report_id)=>{
        const temp=await onTable(report_id)
    if(temp.report_id){
        sessionStorage.setItem("report_id",JSON.stringify(temp))
        
    }
    viewPdf(temp.report_id);

    }


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
                                                <td>{val.major_report}</td>
                                                <td>{val.sub_report}</td>
                                                
                                                <td>{val.event_coordinator}</td>
                                                <td className="row justify-content-evenly">
                                                <button type="button" onClick={async()=>{
                                               
                                                        accept(val.dept_id,val.report_id,val.completion);
                                                    }} className="btn btn-success col-4"  >Accept</button>
                                                    <button type="button" className="btn btn-dark col-4">Reject</button>
                                                    </td>
                                                    <td><button className="btn btn-dark col-4"
                                                    style={{
                                                        backgroundColor: '#0000ff', 
                                                        color: 'white', 
                                                        width: '90%', 
                                                        
                                                        padding: '10px', 
                                                        borderRadius: '5px', 
                                                        cursor: 'pointer', 
                                                        border: 'none', 
                                                    }} type="button" onClick={async()=>{
                                                       
                                                        pdfAccept(val.report_id);
                                                       
                                                    }} >View Proposal</button></td>
                                            </tr>
                                        ))
                                    }
                                    {
                                        ecrs1.map((val,key)=>(
                                            <tr>
                                                <td>{val.report_id}</td>
                                                <td>{val.event_title}</td>
                                                <td>{val.major_report}</td>
                                                <td>{val.sub_report}</td>
                                                
                                                <td>{val.event_coordinator}</td>
                                                <td className="row justify-content-evenly">
                                                <button type="button" onClick={async()=>{
                                                       
                                                        accept(val.dept_id,val.report_id,val.completion);
                                                    }} className="btn btn-success col-4">Accept</button>
                                                    <button type="button" className="btn btn-dark col-4">Reject</button>
                                                    </td>
                                                    <td><button className="btn btn-dark col-4"
  style={{
    backgroundColor: '#f29b44', // Background color
    color: 'white', 
    // size:'10px',// Text color
    // height:'4 px',
    width: '90%', // Button width

    padding: '10px', // Padding
    borderRadius: '5px', // Border radius
    cursor: 'pointer', // Cursor style
    border: 'none', // Remove the border
  }}
  type="button" onClick={async()=>{
                                                        // alert(val.workshop_id+" "+val.dept_id)
                                                       ecr(val.report_id);
                                                    }} >View ECR</button></td>
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