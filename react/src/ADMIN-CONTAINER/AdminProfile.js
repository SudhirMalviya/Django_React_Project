import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectadminid } from './AdminSlice';

const AdminProfile = () => {
    const [mydata, setMydata] = useState({});
    const adminid = useSelector(selectadminid);

    const loaddata = () => {
        let url = `http://127.0.0.1:8000/adminc/?id=${encodeURIComponent(adminid)}`;
        axios.get(url)
        .then((res) => {
            console.log(res.data); 
            setMydata(res.data);
        })
        .catch((error) => {
            console.error('Error fetching admin data:', error);
        });
    };

    useEffect(() => {
        loaddata();
    },[]);
   

    return (
        <div className='adminprofile_container'>
            <div id="gradient"></div>
            <div className='image_profile_admin'>
                <img src="../image/ad.png" height="500px" alt="Admin Profile" />
            </div>
            <div id="card">
                <h2>{mydata.name}</h2>
                <p>Student of Cybrom Technology</p>
                <p>Interested in Web technologies like HTML5, CSS3, JavaScript, Django, React, Python, MySQL, etc.</p>
                <p>Email: {mydata.email}</p>
                <span className="left bottom">Tel: 91741 26***</span>
                <span className="right bottom">Address: INDIA</span>
            </div>
        </div>
    );
};

export default AdminProfile;
