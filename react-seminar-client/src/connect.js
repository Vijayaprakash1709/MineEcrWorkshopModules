import axios from 'axios'

const url="http://192.168.214.14:1234"

export const onLogin=async(obj)=>{
    const returned = await axios.post(`${url}/login`,obj)
    return returned.data
}

export const onProposalsLoad=async()=>{
    
    // alert(dept_id)
    const returned=await axios.get(`${url}/seminar/find`)
    let ids=[]
        returned.data.rows.map((v)=>{
            ids.push(v)
        })
        
        return ids
}

export const onPropose=async(obj)=>{
    // alert(JSON.stringify(obj))
    try{
    const returned = await axios.post(`${url}/seminar/ecrProposal/${obj.event_name}`,obj)
    return returned.data
    }
    catch(error){
        alert("Please fill all fields")
    }
}


export const loadForLevel1=async(dept,emp)=>{
    // alert(dept)
    const receive = await axios.get(`${url}/seminar/loadForLevel1/data_management_seminar/${dept}/${emp}`)
    return receive.data.rows

}

export const approveLevel1=async(dept,emp,report_id)=>{
    const receive = await axios.put(`${url}/seminar/acknowledgelevel1/data_management_seminar/${dept}/${emp}/${report_id}`)
    return receive.data
}
export const Table=async()=>
{
     // alert("axios called")
    // const url=`${url}/seminar/dept/1`;  
    const temp=await axios.get(`${url}/seminar/dept/1`);
    // console.log(temp.data)
    return temp;
}

export const callLoadForLevel2=async(empid)=>{
    // alert(empid)
    const deptid = 1;


try {
    const response = await axios.get(`${url}/seminar/loadforlevel2/data_management_seminar/${deptid}/${empid}`);
    return response.data;
  } catch (error) {
 console.log("No request found")
  }
}


export const callAcceptLevel2=async(dept,empid,report_id)=>{
    try{
    const response=await axios.put(`${url}/seminar/acknowledgelevel2/data_management_seminar/${dept}/${empid}/${report_id}`)
    return response.data
    }
    catch (error){
        alert("Accept Error")
    }
}
export const Venue=async()=>{
    const res=await axios.get(`${url}/seminar/dropdownVenue`)
    let ids=[]
    res.data.rows.map((v)=>{
        ids.push(v)
    })
    return ids
    
}

export const Major=async()=>{
    const re=await axios.get(`${url}/seminar/dropdownMajorType`)
    let ids=[]
    re.data.rows.map((v)=>{
        ids.push(v)
    })
    return ids
    
}
export const SubReport=async(mid)=>{
    const re=await axios.get(`${url}/seminar/dropdownSubTypeWithMajor/${mid}`)
    let ids=[]
    re.data.rows.map((v)=>{
        ids.push(v)
    })
    return ids
    
}
export const Academic=async()=>{
    const re=await axios.get(`${url}/seminar/currentAcademicYear`)
    let ids=[]
    re.data.rows.map((v)=>{
        ids.push(v)
    })
    return ids
    
}