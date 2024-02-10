import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import './style.js';
import Home from './Home';
import Register from './STUDENT-CONTAINER/Registration.js';
// import Dashboard from './Dashboard.js';
import StuComplain from './STUDENT-CONTAINER/StuComplain.js';
import DashLoder from './STUDENT-CONTAINER/DashLoder.js';
// import AdminDashbord from './ADMIN-CONTAINER/AdminDashbord.js';
import SeeComplainstu from './ADMIN-CONTAINER/SeeComplainstu.js';
import AdminReply from './ADMIN-CONTAINER/AdminReply.js';
import SeeAdminAns from './STUDENT-CONTAINER/SeeAdminAns.js';
import AdminLoder from './ADMIN-CONTAINER/AdminLoder.js';
import AllStudentComplain from './ADMIN-CONTAINER/AllStudentComplain.js';
import AdminPasswrod from './ADMIN-CONTAINER/AdminPassword.js';
import StuPassChange from './STUDENT-CONTAINER/StuPassChange.js';
import AdminProfile from './ADMIN-CONTAINER/AdminProfile.js';
import StudentProfile from './STUDENT-CONTAINER/StuProfile.js';
import About from './About.js';
import Contact from './Contact.js';
import CursurAnimate from './CursurAnimate.js';
import AdminDashbord from './ADMIN-CONTAINER/AdminDashbord.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<><Home/> <CursurAnimate/></>} />
            <Route path="home/" element={<><Home /> <CursurAnimate/></>} />
            <Route path="about" element={<><About/><CursurAnimate/></>}/>
            <Route path="contact" element={<><Contact/><CursurAnimate/></>}/>
            <Route path="register/" element={<><Register /><CursurAnimate/></>} />
            <Route path="dashboard/" element={<><DashLoder /><CursurAnimate/></>}>
               <Route path="stupasschange" element={<><StuPassChange/><CursurAnimate/></>}/>
               <Route path="studentprofile" element={<><StudentProfile/><CursurAnimate/></>}/>
               <Route path="dashbord/complain/" element={<><StuComplain /><CursurAnimate/></>} />
               <Route path="seeadminans" element={<><SeeAdminAns/><CursurAnimate/></>}/> 
               <Route path="about" element={<><About/><CursurAnimate/></>}/>
            </Route>
            {/* --------------Student--End------------------- */}
            <Route path="admindashbord" element={<><AdminLoder/><CursurAnimate/></>}>
                <Route path="adminprofile" element={<><AdminProfile/><CursurAnimate/></>}/>
                <Route path="about" element={<><About/><CursurAnimate/></>}/>
                <Route path="allstudentcomplain" element={<><AllStudentComplain/><CursurAnimate/></>}/>
                <Route path="adminpasswrod" element={<><AdminPasswrod/><CursurAnimate/></>}/>
                <Route path='seecomplainstu' element={<><SeeComplainstu/><CursurAnimate/></>}>
                    <Route path='adminreply/:id' element={<><AdminReply/><CursurAnimate/></>}/>
                </Route>   
            </Route>
            {/* ------------Admin--End------------------------ */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
