import React, { useState } from 'react';
import { onTable ,onComplete} from './connect';
import './sty.css';


export const EcrInput = () => {
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [newFileName, setNewFileName] = useState('');
    const [formData, setFormData] = useState({

        "event_photo_1":"",
        "event_photo_2":"",
        "event_po":"",
        "event_date_from":"",
        "event_date_to":"",
        "event_organizing_secretary":"",
        "event_time":"",
        "event_description":"",
        "event_budget_utilized":""
      });
    //   const report=JSON.parse(sessionStorage.getItem("report_id"))
      
    //   console.log("report_id "+ report.report_id)
    const [report_id, setreport_id] = useState('');
    const handlereport_id = (e) => {
        setreport_id(e.target.value);
      };
      const [Data, setData] = useState('');
      const handleNewFileNameChange = () => {
        setNewFileName(Data.event_title);
      };
      const handlereport = async() => {
        
        const temp=await onTable(report_id)
        setData(temp)
        // alert(temp.event_title)
        handleNewFileNameChange();

      }
      
        
console.log(newFileName)
      // console.log(formData)
    
      const handleInputChange = (e) => {
        const { name, value, type} = e.target;
        const newValue = value;
        
        setFormData({
          ...formData,
          [name]: newValue,
        });
        try{
        const arrayAsString = formData.event_po.join(", ");
        setFormData({
            ...formData,
            event_po: arrayAsString,
          })
          alert(arrayAsString)
        }
        catch(err){
          
        }
      };
    
      const handlePoChange = (e) => {
        const { name, checked } = e.target;
    
        if (checked) {
          setFormData({
            ...formData,
            event_po: [...formData.event_po, name],
          });
        } else {
          setFormData({
            ...formData,
            event_po: formData.event_po.filter((event_po) => event_po !== name),
          });
        }
      };
    
    
  
    const handleFileChange1 = (e) => {
      setSelectedFile1(e.target.files[0]);
    };
    const handleFileChange2 = (e) => {
        setSelectedFile2(e.target.files[0]);
      };
  
 
  
  
    const handleUpload = () => {
        if (selectedFile1 && newFileName) {
          const formData1 = new FormData();
          const currentDate = new Date();

const dd = String(currentDate.getDate()).padStart(2, '0');
const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
const yyyy = currentDate.getFullYear();

const hh = String(currentDate.getHours()).padStart(2, '0');
const min = String(currentDate.getMinutes()).padStart(2, '0');
const ss = String(currentDate.getSeconds()).padStart(2, '0');

const dateTimeString = `${dd}-${mm}-${yyyy}_${hh}-${min}-${ss}`;
          const name1=newFileName+'1_'+dateTimeString+'.png';
          const name2=newFileName+'2_'+dateTimeString+'.png';
          formData1.append('file', selectedFile1,name1 );
          // alert("Hello");
          setFormData({
            ...formData,
            event_photo_1: name1,
            event_photo_2: name2,
          });
          
       
    
          fetch('http://localhost:1234/ecr/upload1', {
            method: 'POST',
            body: formData1,
          })
            .then((response) => response.text())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error('Error uploading the file:', error);
            })
            
           
        }
      }
      const handleUpload1 = () => {
        if (selectedFile2 && newFileName) {
            const formData2 = new FormData();
            const currentDate = new Date();

            const dd = String(currentDate.getDate()).padStart(2, '0');
            const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
            const yyyy = currentDate.getFullYear();
            
            const hh = String(currentDate.getHours()).padStart(2, '0');
            const min = String(currentDate.getMinutes()).padStart(2, '0');
            const ss = String(currentDate.getSeconds()).padStart(2, '0');
            
            const dateTimeString = `${dd}-${mm}-${yyyy} ${hh}-${min}-${ss}`;
            const name2=newFileName+'2_'+dateTimeString+'.png';
            formData2.append('file', selectedFile2,name2 );
           
            setFormData({
                
              ...formData,
              event_photo_2: name2,
            })
            fetch('http://localhost:1234/ecr/upload1', {
                method: 'POST',
                body: formData2,
              })
                .then((response) => response.text())
                .then((data) => {
                  console.log(data);
                })
                .catch((error) => {
                  console.error('Error uploading the file:', error);
                })
          
                handleUpload();
        }
    }
    

        const handleSubmit = async(e) => {
          
            e.preventDefault();
            // handleUpload1();
           
            // alert("Submit working")
            
            // Access form data as formData.event_budget_utilized, formData.event_photo_1, etc.
            alert(formData);
            console.log(formData)
            // alert(Data.report_id)
            try{
            const temp = await onComplete(formData,Data.report_id)
            alert(temp.message)
            }
            catch(err){
                alert("Error in entering data")
            }
            
          };
      
  
    return (
        <>
        
    
     <h2>.</h2>
     <div>
        <p>.</p>
        <p>.</p>
     </div>
      <div>
        {/* <input type="file" accept="image/*" onChange={handleFileChange1} /> */}
        {/* <input
          type="text"
          placeholder="Enter new file name"
          value={newFileName}
          onChange={handleNewFileNameChange}
        /> */}
        
         <input
          type="text"
          placeholder="Enter new file name"
          value={report_id}
          onChange={handlereport_id}
        />
     
        <button onClick={handlereport}>send report_id</button>
        
      </div>

      <form>
      

      <label htmlFor="event_photo_1">Photo 1:</label>
      <input type="file" id="event_photo_1" name="event_photo_1" accept="image/*" onChange={handleFileChange1} /><br />

      <label htmlFor="event_photo_2">Photo 2:</label>
      <input type="file" id="event_photo_2" name="event_photo_2" accept="image/*" onChange={handleFileChange2} />
      
      </form>
      <br></br>
     <button onClick={handleUpload1} style={{marginLeft:'45%'}}>Upload </button>
     <br></br>
     <br/>
      
      <form onSubmit={handleSubmit}>
      <label htmlFor="event_budget_utilized">Budget Utilized:</label>
      <input type="text" id="event_budget_utilized" name="event_budget_utilized" value={formData.event_budget_utilized} onChange={handleInputChange}  /><br />
      <label htmlFor="event_po">Program Outcomes:</label>
      <div>
        <label>

          <input type="checkbox" name="PO1" checked={formData.event_po.includes('PO1')} onChange={handlePoChange} />
          PO1
       
          <input type="checkbox" name="PO2" checked={formData.event_po.includes('PO2')} onChange={handlePoChange} />
          PO2
        
          <input type="checkbox" name="PO3" checked={formData.event_po.includes('PO3')} onChange={handlePoChange} />
          PO3
      
          <input type="checkbox" name="PO4" checked={formData.event_po.includes('PO4')} onChange={handlePoChange} />
          PO4
       
          <input type="checkbox" name="PO5" checked={formData.event_po.includes('PO5')} onChange={handlePoChange} />
          PO5
        
          <input type="checkbox" name="PO6" checked={formData.event_po.includes('PO6')} onChange={handlePoChange} />
          PO6
          </label>
        <label>
          <input type="checkbox" name="PO7" checked={formData.event_po.includes('PO7')} onChange={handlePoChange} />
          PO7
      
          <input type="checkbox" name="PO8" checked={formData.event_po.includes('PO8')} onChange={handlePoChange} />
          PO8
       
          <input type="checkbox" name="PO9" checked={formData.event_po.includes('PO9')} onChange={handlePoChange} />
          PO9
        
          <input type="checkbox" name="PO10" checked={formData.event_po.includes('PO10')} onChange={handlePoChange} />
          PO10
        
          <input type="checkbox" name="PO11" checked={formData.event_po.includes('PO11')} onChange={handlePoChange} />
          PO11
        
          <input type="checkbox" name="PO12" checked={formData.event_po.includes('PO12')} onChange={handlePoChange} />
          PO12
        </label>
        
      
      </div>

      <label htmlFor="event_date_from">Event Starting Date:</label>
      <input type="date" id="event_date_from" name="event_date_from" value={formData.event_date_from} onChange={handleInputChange}  /><br />

      <label htmlFor="event_date_to">Event End Date:</label>
      <input type="date" id="event_date_to" name="event_date_to" value={formData.event_date_to} onChange={handleInputChange}  /><br />

      <label htmlFor="event_organizing_secretary">Organizing Secretary:</label>
      <input type="text" id="event_organizing_secretary" name="event_organizing_secretary" value={formData.event_organizing_secretary} onChange={handleInputChange}  /><br />

      <label htmlFor="event_time">Time:</label>
      <input type="time" id="event_time" name="event_time" value={formData.event_time} onChange={handleInputChange} /><br />

      <label htmlFor="event_description">About the Event Paragraph:</label>
      <input type="text" id="event_description" name="event_description" value={formData.event_description} onChange={handleInputChange}  /><br />

      <input type="submit" value="Submit" style={{marginLeft:'40%'}}/>
    </form>
      </>
    );
  }