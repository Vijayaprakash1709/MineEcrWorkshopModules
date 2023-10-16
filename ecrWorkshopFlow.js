const express = require("express")
const route = express.Router()
const base = require("./db")
const cors=require('cors')
route.use(cors())
// route.get('/find/:deptId',async(req,res)=>{
//     const dId=req.params.deptId
//     const sql="select faculty_id, faculty_name from data_faculties where faculty_dept=? and not faculty_desig in(403,404)"
//     base.query(sql,[dId],(err,rows)=>{
//         if(err){
//             res.status(500).json({error:err.message})
//             return
//         }
//         if(rows.length==0){
//             res.status(404).json({error:"No faculties"})
//             return
//         }
//         res.status(200).json({rows})
//     })
// })

// route.get('/find/:deptId',async(req,res)=>{
//     const dId=req.params.deptId
//     const sql="select faculty_name from data_faculties where faculty_dept=? and not faculty_desig in(403,404)"
//     base.query(sql,[dId],(err,rows)=>{
//         if(err){
//             res.status(500).json({error:err.message})
//             return
//         }
//         if(rows.length==0){
//             res.status(404).json({error:"No faculties"})
//             return
//         }
//         res.status(200).json({rows})
//     })
// })


route.post('/ecrProposal',async(req,res)=>{
    // receive the request from client
    const{sno,event_name,event_title,event_organizer,event_sponsor,event_date,event_venue,guest_name,guest_designation,guest_address,guest_number,guest_email,student_count,faculty_count,others_count,proposal_date,proposal_hod,proposal_principal,event_budget,event_coordinator,coordinator_phno,coordinator_designation,acdyr_id,dept_id,sem_id}=req.body
    sql="insert into data_ecr_workshop(sno,event_name,event_title,event_organizer,event_sponsor,event_date,event_venue,guest_name,guest_designation,guest_address,guest_number,guest_email,student_count,faculty_count,others_count,proposal_date,proposal_hod,proposal_principal,event_budget,event_coordinator,coordinator_phno,coordinator_designation,acdyr_id,dept_id,sem_id,approval_status,is_eve_completed) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,0,0)"
        base.query(sql,[sno,event_name,event_title,event_organizer,event_sponsor,event_date,event_venue,guest_name,guest_designation,guest_address,guest_number,guest_email,student_count,faculty_count,others_count,proposal_date,proposal_hod,proposal_principal,event_budget,event_coordinator,coordinator_phno,coordinator_designation,acdyr_id,dept_id,sem_id],(err,ack)=>{
            if(err){
                res.status(500).json({error:err.message})
                return
            }
            res.status(200).json({message:"Workshop Proposal has sent",id:ack.insertId})
        })
})

// route.get('/authorities/:deptId',async(req,res)=>{
//     const id=req.params.deptId
//     const sql="call GetNonNullColumnsForDeptId(?)"
//     base.query(sql,[id],(err,row)=>{
//         if(err){
//             res.status(500).json({error:err.message})
//             return
//         }
//         if(row.length==0){
//             res.status(404).json({message:"No ECR Workshop matched"})
//             return
//         }
//         //res.status(200).json({row})
//         let count=0
//         let obj={}
//         for (let index = 0; index < row[0].length; index++) {
//                 console.log(row[0][index].column_name+" "+row[0][index].column_value)
//                 let key=row[0][index].column_name
//                 let value=row[0][index].column_value
//                 obj[key]=value
//                 count++;
//             //}
//         }
//         obj['dept_id']=id
//         console.log(obj+" "+count)
//         res.status(200).json({obj})
//     })
// })


route.get('/loadforlevel1/:deptId/:empId',async(req,res)=>{
    const dId=req.params.deptId
    const eId=req.params.empId
    let sql="select report_lvl1 from data_approval_ecr where dept_id=? and report_lvl1 like ?"
    base.query(sql,[dId,'%'+eId+'%'],(err,row)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(row.length==0){
            res.status(404).json({error:"No matches"})
            return
        }
        sql="select * from data_ecr_workshop where approval_status=0 and report_lvl1 is null and is_eve_completed=0 and dept_id=?"
        base.query(sql,[dId],(err,rows)=>{
            if(err){res.status(500).json({error:err.message});return;}
            if(row.length==0){res.status(404).json({error:"Nothing to show"})}
            res.status(200).json({rows})
        })
    })
})

route.put('/acknowledgelevel1/:deptId/:empId/:rId',async(req,res)=>{
    const dId=req.params.deptId
    const eId=req.params.empId
    let sql="select report_id from data_ecr_workshop where dept_id=? and approval_status=0 and is_eve_completed=0"
    base.query(sql,[dId],(err,row)=>{
        if(err){
            res.status(500).json({error:err.message})
            console.log("selecting workshop")
            return
        }
        if(row.length==0){
            res.status(404).json({error:"No records available to acknowledge"})
            console.log("selecting workshop records")
            return
        }
        //no need
        sql="call GetNonNullColumnsForDeptId(?)"
        base.query(sql,[dId],(err,rows)=>{
            if(err){
                res.status(500).json({error:err.message})
                return
            }
            if(rows.length==0){
                res.status(404).json({error:"No records available to acknowledge"})
                return
            }
            console.log(rows[0])
            let count=rows.length
            // for (let index = 0; index < rows.length; index++) 
            // {count++;}
            console.log(count)
            //upto this
            if(rows[0][0].column_value.includes(eId)){
                sql="update data_ecr_workshop set report_lvl1=?, approval_status=approval_status+1 where dept_id=? and approval_status=0 and is_eve_completed=0 and report_id=?"
                base.query(sql,[eId,dId,req.params.rId],(err,result)=>{
                    if(err){
                        res.status(500).json({error:err.message})
                        return
                    }
                    if(result.affectedRows==0){
                        res.status(404).json({error:"Event hasn't completed yet"})
                        return
                    }
                    res.status(200).json({message:"acknowledged by level"})
                })
            }
            else{
                res.status(404).json({error:"Forbidden access"})
            }
        })
    })
})

route.get('/loadforlevel2/:deptId',async(req,res)=>{
    const dId=req.params.deptId
    let sql="select * from data_ecr_workshop where approval_status=1 and is_eve_completed=0 and dept_id=?"
    base.query(sql,[dId],(err,row)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(row.length==0){
            res.status(404).json({error:"No workshop to be approved"})
            return
        }
        res.status(200).json({row})
    })
})


route.put('/acknowledgelevel2/:deptId/:rid',async(req,res)=>{
    const dId=req.params.deptId
    const rid=req.params.rid
    let sql="update data_ecr_workshop set report_lvl2=6000, approval_status=approval_status+1 where dept_id=? and report_id=?"
    base.query(sql,[dId,rid],(err,result)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(result.affectedRows==0){
            res.status(404).json({error:"Nothing has approved"})
            return
        }
        //res.status(200).json({message:`${wid} approved by principal`})
        sql="call GetNonNullColumnsForDeptId(?)"
        base.query(sql,[dId],(err,rows)=>{
            if(err){
                res.status(500).json({error:err.message})
                return
            }
            if(rows.length==0){
                res.status(404).json({error:"No records available to acknowledge"})
                return
            }
            res.status(200).json({message:`Event Proposal Completed ${dId}`})
        })
    })
})

route.get('/loadforCompletion/:deptId',async(req,res)=>{
    const dId=req.params.deptId
    let sql="select * from data_ecr_workshop where approval_status=2 and is_eve_completed=0 and dept_id=?"
    base.query(sql,[dId],(err,row)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(row.length==0){
            res.status(404).json({error:"No workshop to be approved"})
            return
        }
        res.status(200).json({row})
    })
})

route.put('/ecrCompletion/:report_id',async(req,res)=>{
    // receive the request from client
    const{event_photo_1,event_photo_2,event_po,completion_date,completion_hod,completion_principal,pdf,event_duration,event_os,event_time,event_description,event_budget_utilized}=req.body
    sql="update data_ecr_workshop set event_photo_1=?, event_photo_2=?, event_po=?, completion_date=?,completion_hod=?, completion_principal=?,pdf=?,event_duration=?, event_os=?, event_time=?, event_description=?, event_budget_utilized=?,approval_status=approval_status+1 where report_id=? and approval_status=2"
        base.query(sql,[event_photo_1,event_photo_2,event_po,completion_date,completion_hod,completion_principal,pdf,event_duration,event_os,event_time,event_description,event_budget_utilized,req.params.report_id],(err,ack)=>{
            if(err){
                res.status(500).json({error:err.message})
                return
            }
            res.status(200).json({message:"Workshop Completion Report has sent"})
        })
})


route.get('/eventcompletionloadlevel1/:deptId/:empId',async(req,res)=>{
    const dId=req.params.deptId
    const eId=req.params.empId
    let sql="select report_lvl1 from data_approval_ecr where dept_id=? and report_lvl1 like ?"
    base.query(sql,[dId,'%'+eId+'%'],(err,row)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(row.length==0){
            res.status(404).json({error:"No matches"})
            return
        }
        sql="select * from data_ecr_workshop where approval_status=3 and report_lvl1 is not null and is_eve_completed=0 and dept_id=?"
        base.query(sql,[dId],(err,rows)=>{
            if(err){res.status(500).json({error:err.message});return;}
            if(row.length==0){res.status(404).json({error:"Nothing to show"})}
            res.status(200).json({rows})
        })
    })
})


route.put('/completionacknowledgelevel1/:deptId/:empId',async(req,res)=>{
    const dId=req.params.deptId
    const eId=req.params.empId
    let sql="select report_id from data_ecr_workshop where dept_id=? and approval_status=3 and is_eve_completed=0"
    base.query(sql,[dId],(err,row)=>{
        if(err){
            res.status(500).json({error:err.message})
            console.log("selecting workshop")
            return
        }
        if(row.length==0){
            res.status(404).json({error:"No records available to acknowledge"})
            console.log("selecting workshop records")
            return
        }
        //no need
        sql="call GetNonNullColumnsForDeptId(?)"
        base.query(sql,[dId],(err,rows)=>{
            if(err){
                res.status(500).json({error:err.message})
                return
            }
            if(rows.length==0){
                res.status(404).json({error:"No records available to acknowledge"})
                return
            }
            console.log(rows[0])
            let count=rows.length
            // for (let index = 0; index < rows.length; index++) 
            // {count++;}
            console.log(count)
            //upto this
            if(rows[0][0].column_value.includes(eId)){
                sql="update data_ecr_workshop set report_lvl1=?, approval_status=approval_status+1 where dept_id=? and is_eve_completed=0"
                base.query(sql,[eId,dId],(err,result)=>{
                    if(err){
                        res.status(500).json({error:err.message})
                        return
                    }
                    if(result.affectedRows==0){
                        res.status(404).json({error:"Event hasn't completed yet"})
                        return
                    }
                    res.status(200).json({message:"Completion report acknowledged by level"})
                })
            }
            else{
                res.status(404).json({error:"Forbidden access"})
            }
        })
    })
})

route.get('/completionloadlevel2/:deptId',async(req,res)=>{
    const dId=req.params.deptId
    let sql="select * from data_ecr_workshop where approval_status=4 and is_eve_completed=0 and dept_id=?"
    base.query(sql,[dId],(err,row)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(row.length==0){
            res.status(404).json({error:"No workshop to be approved"})
            return
        }
        res.status(200).json({row})
    })
})

route.put('/completionacknowledgelevel2/:deptId/:rid',async(req,res)=>{
    const dId=req.params.deptId
    const rid=req.params.rid
    let sql="update data_ecr_workshop set report_lvl2=6000, approval_status=approval_status+1 where dept_id=? and report_id=?"
    base.query(sql,[dId,rid],(err,result)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(result.affectedRows==0){
            res.status(404).json({error:"Nothing has approved"})
            return
        }
        //res.status(200).json({message:`${wid} approved by principal`})
        sql="call GetNonNullColumnsForDeptId(?)"
        base.query(sql,[dId],(err,rows)=>{
            if(err){
                res.status(500).json({error:err.message})
                return
            }
            if(rows.length==0){
                res.status(404).json({error:"No records available to acknowledge"})
                return
            }
            // console.log(rows[0])
            // let count=rows.length
            // console.log(count)
            sql="update data_ecr_workshop set is_eve_completed=is_eve_completed+1 where report_id=? and approval_status=5"
            base.query(sql,[rid],(err,result)=>{
                if(err){
                    res.status(500).json({error:err.message})
                    return
                }
                if(result.affectedRows==0){
                    res.status(404).json({error:"Event can't approved"})
                    return
                }
                res.status(200).json({message:`Event Report Completed ${dId}`})
            })
        })
    })
})

module.exports = route;