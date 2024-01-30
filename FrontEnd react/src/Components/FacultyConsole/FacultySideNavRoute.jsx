import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import F1 from './F1';
import F2 from './F2';
import F3 from './F3';
import F4 from './F4';
import F5 from './F5';
import F6 from './F6';
import F7 from './F7';

import FacultySideNav from './FacultySideNav';
import FetchModuleDetails from '../FetchModuleDetails';
import Module from '../Module';
import AddModule from '../AddModule';
import EditModule from '../EditModule';
import VideoComponent from '../VideoComponent';
import FetchCourseDetails from '../FetchCourseDetails';
import ViewAllCourses from '../ViewAllCourses';
import CoursesHomePage from '../CoursesHomePage';

const FacultySideNavRoute = () => {
  return (
    <BrowserRouter>
    <div className="d-flex">
        <div className="col-auto bg-dark ">
            <FacultySideNav/>
        </div>
        <div style={{width:'100%',backgroundColor:'#C8E7F5'}}>
            <Routes>
                <Route path="/" element={<F1/>}></Route>
                <Route path="/F2" element={<F2/>}></Route>
                <Route path="/F3" element={<F3/>}></Route>
                <Route path="/F4" element={<F4/>}></Route>
                <Route path="/F5" element={<F5/>}></Route>
                <Route path="/F6" element={<F6/>}></Route>
                <Route path="/F7" element={<F7/>}></Route>

                <Route path="/Module" element={<Module/>} />
          <Route path="module/:moduleId" element={<FetchModuleDetails/>} />
          <Route path="/add-module" element={<AddModule/>} />
          <Route path="edit-module/:moduleId" element={<EditModule/>} />


          <Route path="/view-video/:moduleId" element={<VideoComponent/>} />
     
          <Route path="/FetchModuleDetails/:moduleId" element={<FetchModuleDetails></FetchModuleDetails>} />


          <Route path="/coursesHomePage" element={<CoursesHomePage></CoursesHomePage>} />
          <Route path="course/:courseId" element={<FetchCourseDetails/>} />
          <Route path="/viewAllCourses" element={<ViewAllCourses></ViewAllCourses>} />



            </Routes>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default FacultySideNavRoute  


