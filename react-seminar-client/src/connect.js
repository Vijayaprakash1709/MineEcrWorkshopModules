import axios from 'axios'

const url="http://localhost:1234"

export const onLogin=async(obj)=>{
    const returned = await axios.post(`${url}/login`,obj)
    return returned.data
}

export const onProposalsLoad=async(dept_id)=>{
    
    // alert(dept_id)
    const returned=await axios.get(`${url}/seminar/find/${dept_id}`)
    let ids=[]
        returned.data.rows.map((v)=>{
            ids.push(v)
        })
        return ids
}

export const onPropose=async(obj)=>{
    // alert(JSON.stringify(obj))
    const returned = await axios.post(`${url}/seminar/propose/${obj.event_name}`,obj)
    return returned.data
}


export const loadForLevel1=async(dept,emp)=>{
    const receive = await axios.get(`${url}/seminar/loadForLevel1/${dept}/${emp}`)
    return receive.data.rows
}

export const approveLevel1=async(dept,emp,sno)=>{
    const receive = await axios.put(`${url}/seminar/acknowledgelevel1/${dept}/${emp}/${sno}`)
    return receive.data.message
}
export const Table=async()=>
{
     // alert("axios called")
    const url="http://localhost:1234/seminar/dept/1";  
    const temp=await axios.get(`${url}`);
    // console.log(temp.data)
    return temp;
}

export const callLoadForLevel2=async()=>{
    // alert("axios called")
    const receive = await axios.put(`${url}/seminar/loadforlevel2`);
    return receive.data.row
}

export const callAcceptLevel2=async(dept,wid)=>{
    const response=await axios.put(`${url}/ecr/acknowedgelevel2/${dept}/${wid}`)
    return response.data.message
}