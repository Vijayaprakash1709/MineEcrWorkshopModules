

import React from 'react';
import jsPDF from 'jspdf';
// var base64js = require('base64-js')
import Image from './logo.png';
import Image2 from './logo2.png';
import Image3 from './logo3.jpg';
import Image4 from './logo4.jpg';



class PDFGenerator extends React.Component {
  generatePDF = () => {
    const doc = new jsPDF();
    



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
doc.text("", 50, 50); //name of the event
doc.setFont('times', 'bold');
doc.text("Date of the Event Conducted:", 10, 57);
doc.setFont('times', '');
doc.text("", 70, 57); //Date

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

/////////////////////////////////////////////////////////////////////


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


doc.rect(170, 43, 20, 7);
doc.text('', 173, 47.5);//academic year


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


///////////////////////////////////////////////////////

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
doc.text('', 15, 45);

doc.rect(80, 40, 50, 7);
doc.text('EVENT PROPOSAL', 85, 45);

doc.rect(170, 40, 20, 7);
doc.text('', 173, 45);//academic year

doc.setFont("times","")
doc.rect(10, 55, 10, 20).stroke();
doc.text('1.', 12, 65);
doc.rect(20, 55, 90, 20).stroke();
doc.text('Nature of the Event:\nConference/Technical Symposium/Workshop/\nSeminar/Guest/Lecture/FDP/Any other',22, 61);
doc.rect(110, 55, 90, 20).stroke();
doc.text('', 113, 65);


doc.rect(10, 75, 10, 10).stroke();
doc.text('2.', 12, 81);
doc.rect(20, 75, 90, 10).stroke();
doc.text('Title of the event',22, 81);
doc.rect(110, 75, 90, 10).stroke();
doc.text('', 113, 81);


doc.rect(10, 85, 10, 10).stroke();
doc.text('3.', 12, 91);
doc.rect(20, 85, 90, 10).stroke();
doc.text('Organized by',22, 91);
doc.rect(110, 85, 90, 10).stroke();
doc.text('', 113, 91);



doc.rect(10, 95, 10, 10).stroke();
doc.text('4.', 12, 101);
doc.rect(20, 95, 90, 10).stroke();
doc.text('Collaboration/Sponsoring Agency',22, 101);
doc.rect(110, 95, 90, 10).stroke();
doc.text('', 113, 101);


doc.rect(10, 105, 10, 10).stroke();
doc.text('5.', 12, 111);
doc.rect(20, 105, 90, 10).stroke();
doc.text('Date of the Event Planned',22, 111);
doc.rect(110, 105, 90, 10).stroke();
doc.text('', 113, 111);

doc.rect(10, 115, 10, 10).stroke();
doc.text('6.', 12, 121);
doc.rect(20, 115, 90, 10).stroke();
doc.text('Venue',22, 121);
doc.rect(110, 115, 90, 10).stroke();
doc.text('', 113, 121);


doc.rect(10, 125, 10, 50).stroke();
doc.text('7.', 12, 141);
doc.rect(20, 125, 90, 50).stroke();
doc.text('Details of the Guest',22, 141);

doc.rect(110, 125, 23, 10).stroke();
doc.text('Name', 111, 131);
doc.rect(133, 125,67, 10).stroke();
doc.text('', 135, 131);
doc.rect(110, 135, 23, 10).stroke();
doc.text('Designation', 111, 141);
doc.rect(133, 135,67, 10).stroke();
doc.text('', 135, 141);
doc.rect(110, 145, 23, 10).stroke();
doc.text('Address', 111, 151);
doc.rect(133, 145,67, 10).stroke();
doc.text('', 135, 151);
doc.rect(110, 155, 23, 10).stroke();
doc.text('Contact No', 111, 161);
doc.rect(133, 155,67, 10).stroke();
doc.text('', 135, 161);
doc.rect(110, 165, 23, 10).stroke();
doc.text('Mail-id', 111, 171);
doc.rect(133, 165,67, 10).stroke();
doc.text('', 135, 171);

doc.rect(10, 175, 10, 30).stroke();
doc.text('8.', 12, 190);
doc.rect(20, 175, 90, 30).stroke();
doc.text('Total Participants expected',22, 190);

doc.rect(110, 175, 23, 10).stroke();
doc.text('MEC\nStudents', 110.5, 179);
doc.rect(133, 175,67, 10).stroke();
doc.text('', 135, 181);

doc.rect(110, 185, 23, 10).stroke();
doc.text('MEC\nFaculty', 110.5, 189);
doc.rect(133, 185,67, 10).stroke();
doc.text('', 135, 181);

doc.rect(110, 195, 23, 10).stroke();
doc.text('Others', 110.5, 201);
doc.rect(133, 195,67, 10).stroke();
doc.text('', 135, 181);

doc.rect(10, 205, 10, 10).stroke();
doc.text('9.', 12, 211);
doc.rect(20, 205, 90, 10).stroke();
doc.text('Proposed Budget',22, 211);
doc.rect(110, 205, 90, 10).stroke();
doc.text('', 113, 211);


doc.rect(10, 215, 10, 40).stroke();
doc.text('10.', 12, 230);
doc.rect(20, 215, 90, 40).stroke();
doc.text('Details of the Guest',22, 230);

doc.rect(110, 215, 23, 10).stroke();
doc.text('Name', 111, 221);
doc.rect(133, 215,67, 10).stroke();
doc.text('', 135, 221);
doc.rect(110, 225, 23, 10).stroke();
doc.text('Designation', 111, 231);
doc.rect(133, 225,67, 10).stroke();
doc.text('', 135, 231);
doc.rect(110, 135, 23, 10).stroke();
doc.text('Contact No', 111, 241);
doc.rect(133, 235,67, 10).stroke();
doc.text('', 135, 241);
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
  render() {
    return (
        <>
        <h3>.</h3>
        <h2>.</h2>
        <h1>View The Pdf</h1>
      <div>
        <button onClick={this.generatePDF}>View PDF</button>
      </div>
      </>
    );
  }

}


export default PDFGenerator;