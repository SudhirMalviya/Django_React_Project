import { useState } from "react";
import {  useSelector } from 'react-redux';
import { selectStuId } from './stuSlice';
import axios from "axios";

const StuComplain = () => {
  const [complain, setComplain] = useState("");
  const stuId = useSelector(selectStuId);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:8000/stucomplain/`;
    axios.post(url, { "stuid": stuId, "stucomplain": complain}).then((res) => {
      alert("Complaint will be registered");
    });
  };

  return (
    <>
    <div className="stucomplain_container">
      <h2 className="stucomplain_heding">Submit a Complaint</h2>
      <form onSubmit={handleSubmit}className="stucomplain_form">
        <textarea
          className="stucomplain_textarea"
          name="complain"
          cols="50"
          rows="6"
          value={complain}
          onChange={(e) => setComplain(e.target.value)}
          placeholder="Enter your complaint..."
        />
       
        <button className="stucomplain_submit_button" type="submit">Submit</button>
      </form>
      
    </div>
    </>
  );
};

export default StuComplain;



// import { useState } from "react";
// import { useSelector } from 'react-redux';
// import { selectStuId } from './stuSlice';
// import axios from "axios";

// const StuComplain = () => {
//     const [complain, setComplain] = useState("");
//     const stuId = useSelector(selectStuId);

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const csrfToken = document.getElementsByName('csrfmiddlewaretoken')[0]?.value;
//         const response = await axios.post(
//           'http://localhost:4000/stuComplain',
//           {
//             stuid: stuId,
//             stucomplain: complain,
//             ans: '',  
//           },
//           {
//             headers: {
//               'X-CSRFToken': csrfToken,
//             },
//           }
//         );
//         alert('Complaint will be registered');
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error submitting complaint:', error);
//         console.log('Server response:', error.response.data);
//       }
//     };
    
//     return (
//         <>
//             <div className="stucomplain_container">
//                 <h2 className="stucomplain_heding">Submit a Complaint</h2>
//                 <form onSubmit={handleSubmit} className="stucomplain_form">

//                 <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />
//                     <textarea
//                         className="stucomplain_textarea"
//                         name="complain"
//                         cols="50"
//                         rows="6"
//                         value={complain}
//                         onChange={(e) => setComplain(e.target.value)}
//                         placeholder="Enter your complaint..."
//                     />
//                     <button className="stucomplain_submit_button" type="submit">Submit</button>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default StuComplain;

