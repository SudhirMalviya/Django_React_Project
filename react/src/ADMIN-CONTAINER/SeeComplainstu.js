import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet} from 'react-router-dom';
// Import statements...

const SeeComplainstu = () => {
  const [myData, setMyData] = useState([]);
  const [stname, setStname] = useState([]);
  let sno = 0;

  useEffect(() => {
    loadData();
    loadName();
  }, []);

  const loadName = () => {
    let url = 'http://127.0.0.1:8000/student/';
    axios.get(url)
      .then((res) => {
        setStname(res.data);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
        // Handle error (e.g., show error message to the user)
      });
  };

  const loadData = () => {
    let url = 'http://127.0.0.1:8000/stucomplain/';
    axios.get(url)
      .then((res) => {
        setMyData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching complaint data:', error);
        // Handle error (e.g., show error message to the user)
      });
  };

  const dataRows = myData.map((complaint) => {
    const student = stname.find((student) => student.id === complaint.stuid);
    sno++;
    const ans = complaint.ans;

    if (!ans) {
      return (
        <tr key={complaint.id}>
          <td>{sno}</td>
          <td>{student ? student.name : 'Unknown'}</td>
          <td>{student ? student.email : 'Unknown'}</td>
          <td>{complaint.stucomplain}</td>
          <td>
            <Link to={`adminreply/${complaint.id}`}>
              <button className="reply_button">Reply Answer</button>
            </Link>
          </td>
        </tr>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      <div className="admin_reply_container">
        <div className="complaints-container">
          <h1 className="page-title">Student Complaints (No Reply)</h1>
          <table className="container_stc">
            <thead>
              <tr>
                <th><h1>Sno</h1></th>
                <th><h1>Student Name</h1></th>
                <th><h1>Email</h1></th>
                <th><h1>Complaints</h1></th>
                <th><h1>Reply</h1></th>
              </tr>
            </thead>
            <tbody>
              {dataRows}
            </tbody>
          </table>
        </div>
        <div className="admin_ans">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SeeComplainstu;
