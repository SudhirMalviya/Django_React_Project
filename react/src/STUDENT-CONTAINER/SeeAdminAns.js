// import { useEffect,useState } from "react";
// import  axios  from "axios";
// import {useSelector} from  'react-redux';
// import { selectStuId } from "./stuSlice";

// const SeeAdminAns = () => {
//     const [myData, setMyData] = useState([]);
//     const [editIndex, setEditIndex] = useState(null);
//     const stuid = useSelector(selectStuId);

//     useEffect(() => {
//         loaddata();
//     }, []);

//     const loaddata = () => {
//         let url = `http://127.0.0.1:8000/stucomplain/?stuid==${stuid}`;

//         axios.get(url).then((res) => {
//             setMyData(res.data);
//         });
//     };
    

//     const handleEdit = (index) => {
//         setEditIndex(index);
//     };

//     const handleSave = (index, updatedData) => {
        
//         const url = `http://127.0.0.1:8000/stucomplain/${myData[index].id}`;
//         axios.patch(url, updatedData).then(() => {
//             setEditIndex(null);
//             loaddata(); 
//         });
//     };

//     const handleDelete = (index) => {
       
//         const url = `http://127.0.0.1:8000/stucomplain/${myData[index].id}`;
//         axios.delete(url).then(() => {
//             loaddata(); 
//         });
//     };

//     const studentComplain = myData.map((key, index) => {
       
//         return (
//             <tr key={index}>
//                 <td>{index+1}</td>
//                 <td>{editIndex === index ? <input type="text" value={key.stucomplain} onChange={(e) => handleEditChange(e, index)} /> : key.stucomplain}</td>
//                 <td>{key.ans}</td>
//                 <td>
//                     {editIndex === index ? (
//                         <button className="button_stu_e_d_s" onClick={() => handleSave(index, { stucomplain: myData[index].stucomplain })}>Save</button>
//                     ) : (
//                         <button className="button_stu_e_d_s" onClick={() => handleEdit(index)}>Edit</button>
//                     )}
//                 </td>
//                 <td>
//                     <button className="button_stu_e_d_s" onClick={() => handleDelete(index)}>Delete</button>
//                 </td>
//             </tr>
//         );
//     });

//     const handleEditChange = (e, index) => {
//         const { value } = e.target;
//         const updatedData = [...myData];
//         updatedData[index] = { ...updatedData[index], stucomplain: value }; // Corrected from [name]: value
//         setMyData(updatedData);
//     };

//     return (
//         <>
//             <div className="see_ans">
//                 <h1>Response By Admin</h1>
//                 <table className="container_stc">
//                     <thead>
//                         <tr>
//                             <th>
//                                 <h1>Sno</h1>
//                             </th>
//                             <th>
//                                 <h1>Complaintsr</h1>
//                             </th>
//                             <th>
//                                 <h1>Response by admin</h1>
//                             </th>
//                             <th>
//                                 <h1>Edit</h1>
//                             </th>
//                             <th>
//                                 <h1>Delete</h1>
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>{studentComplain}</tbody>
//                 </table>
//             </div>
//         </>
//     );
// };

// export default SeeAdminAns;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectStuId } from "./stuSlice";

const SeeAdminAns = () => {
    const [myData, setMyData] = useState([]);
   
    const stuid = useSelector(selectStuId);

    useEffect(() => {
        loaddata();
    }, []);

    const loaddata = () => {
        if (!stuid) return; 
        let url = `http://127.0.0.1:8000/stucomplain/?stuid=${stuid}`;
    
        axios.get(url).then((res) => {
           
            const studentComplaints = res.data.filter(complaint => complaint.stuid === stuid);
            setMyData(studentComplaints);
        }).catch(error => {
            console.error("Error loading data:", error);
          
        });
    };
    
    


   

    const studentComplain = myData.map((key, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{key.stucomplain}</td>
                <td>{key.ans}</td>
               
            </tr>
        );
    });

    return (
        <>
            <div className="see_ans">
                <h1>Response By Admin</h1>
                <table className="container_stc">
                    <thead>
                        <tr>
                            <th>
                                <h1>Sno</h1>
                            </th>
                            <th>
                                <h1>Complaints</h1>
                            </th>
                            <th>
                                <h1>Response by admin</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>{studentComplain}</tbody>
                </table>
            </div>
        </>
    );
};

export default SeeAdminAns;