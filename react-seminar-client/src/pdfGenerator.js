import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import Image from './logo.png';
import Image2 from './logo2.png';
import Image3 from './logo3.jpg';
import Image4 from './logo4.jpg';

const InputPage = () => {
  const [id, setId] = useState('');

  useEffect(() =>{
    const report=JSON.parse(sessionStorage.getItem("report_id"))
    setId(report.report_id)
    
    
   },[])
   

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
doc.text(`${data.acdyr_id}`, 173, 45);//academic year

doc.setFont("times","")
doc.rect(10, 55, 10, 20).stroke();
doc.text('1.', 12, 65);
doc.rect(20, 55, 90, 20).stroke();
doc.text('Nature of the Event:\nConference/Technical Symposium/Workshop/\nSeminar/Guest/Lecture/FDP/Any other',22, 61);
doc.rect(110, 55, 90, 20).stroke();
doc.text(`${data.event_name}`, 113, 65);//Nature of the Event


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
  };

  return (
    <>
    <div>
      <h1>View PDF</h1>
      <h2>Generated Pdf</h2>
      <h3>Enter id</h3>
    </div>
    <div>
    
      <label>
          Id:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit" onClick={handleDownload}>View PDF</button>
    </div>
    </>
  );
};
export default InputPage;