import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectStuId } from './stuSlice';

const StuPassChange = () => {
  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [repass, setRepass] = useState('');
  const stuid = useSelector(selectStuId);

  
 
  
    const SunmitHandle = (e) => {
      e.preventDefault();
  
      if (!oldpass || !newpass || !repass) {
        alert('Please fill in all fields');
        return;
      }
  
      if (newpass !== repass) {
        alert('Passwords do not match');
        return;
      }
  
      const url = `http://127.0.0.1:8000/student/${stuid}/`;
  
      axios.get(url)
        .then((res) => {
          console.log(res.data)
          if (res.data.password === oldpass) {
            axios.patch(url, { password: newpass })
              .then(() => {
                alert('Password successfully changed');
              })
              .catch(error => {
                console.error('Error updating password:', error);
                alert('An error occurred while changing the password. Please try again.');
              });
          } else {
            alert('Please enter a valid old password');
          }
        })
        .catch(error => {
          console.error('Error fetching student data:', error);
          alert('An error occurred while fetching student data. Please try again.');
        });
    };
  
    return (
      <>
        <div className='stupass_container'>
          <div className='stupass_image'>
            <img src="../image/keypass.png" alt="keypass" />
          </div>
  
          <div className='stupass'>
            <h1 className='key-animation'>Set Password</h1>
            <form>
              Old Password:
              <input
                type="password"
                name="oldpass"
                value={oldpass}
                onChange={(e) => setOldpass(e.target.value)}
              />
  
              New Password:
              <input
                type="password"
                name="newpass"
                value={newpass}
                onChange={(e) => setNewpass(e.target.value)}
              />
  
              Re-Enter Password:
              <input
                type="password"
                name="repass"
                value={repass}
                onChange={(e) => setRepass(e.target.value)}
              />
  
              <button type="button" onClick={SunmitHandle}>
                Set Password
              </button>
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default StuPassChange;
  