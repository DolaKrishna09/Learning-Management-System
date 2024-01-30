
import './App.css';
import AdmSideNavRoute from './Components/AdminConsole/AdmSideNavRoute';

import Navbar from './Components/Navbar';
import NavbarAdmin from './Components/NavbarAdmin'
import NavbarFacultys from './Components/NavbarFacultys'
import FacultySideNavRoute from './Components/FacultyConsole/FacultySideNavRoute'
import Footer from './Components/Footer'
import NavbarStudent from './Components/NavbarStudent';
import StdSideNavRoute from './Components/StudentConsole/StdSideNavRoute'

import CoursesHomePage from './Components/CoursesHomePage';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      {/* -----------------ADMIN------------------- */}

         <Navbar></Navbar>
    <NavbarAdmin></NavbarAdmin>
       <AdmSideNavRoute></AdmSideNavRoute>     
        
      {/* -------------- FACULTY---------------------- */}
      
    {/* <Navbar></Navbar>
      <NavbarFacultys></NavbarFacultys>
      <FacultySideNavRoute>
      </FacultySideNavRoute>    */}
        
      {/* ----------STUDENT------------ */}
 
{/* 
       <Navbar></Navbar>
      <NavbarStudent></NavbarStudent>
      <StdSideNavRoute></StdSideNavRoute>    */}




 

      <Footer></Footer>



        



      
    </div>
  );
}

export default App;
