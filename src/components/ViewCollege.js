import React, { useState, useEffect } from "react";
import collegeService from "../service/collegeService";
import "./ViewCollege.css"

const ViewCollege = () => {

    const [data, setData] = useState([]);

   useEffect(() => {
      collegeService.getAllCollegs().then((e) => {
            const objKeys = Object.keys(e.data);
            const collegeData = [];
            for(let i in e.data){
                let d = {id:i, ...e.data[i]};
                collegeData.push(d)
            }
            console.log("college Data :", collegeData);
            setData(collegeData)
        });
    }, []);

    const deleteRow=(id)=>{
     collegeService.deleteCollege(id);
    }

   return (
        <div>
            <div className="contant">
            <table className="table table-striped" >
                <tr>
                    <th>College_Name</th>
                    <th>College_Id</th>
                    <th>college_Email</th>
                    <th>college_Mobile</th>
                    <th>college_State</th>
                    <th colSpan={2}>Action</th>
                </tr>
                {
                    data.map((e) => {
                        return (
                            <tr key={e.college_Id}>
                                <td>{e.college_Name}</td>
                                <td>{e.college_Id}</td>
                                <td>{e.college_Email}</td>
                                <td>{e.college_Mobile}</td>
                                <td>{e.college_State}</td>
                                <td><button className="btn btn-warning">View</button></td>
                                <td><button className="btn btn-info" onClick={()=>deleteRow(e.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
                </table>
            </div>
        </div>
    )
}

export default ViewCollege;