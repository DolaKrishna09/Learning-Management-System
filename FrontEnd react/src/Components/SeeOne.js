import React,{useState,useEffect} from 'react'

import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const SeeOne = () => {

    const [user, setUser] = useState({
        id: " ",
       
      });
      const {id} = useParams();
      useEffect(() => {
        loadUser();
      },[]);
      const loadUser =  async () => {
        const result = await axios.get('http://localhost:8080/Admin/play/202');
         setUser( result.data);
           console.log("something wrong")
         setUser(result.data);
       };



  return (
    <div>
        <div className="row">
        <div
          className={ "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" } >
          <h2 className={"text-center m-4"}>Post Detail</h2>
          <div className="card">
            <div className="card-header">
            <div style={{ maxWidth: "40%" }}>
                        <video controls width="250" height="200">
                          <source
                            src={'http://localhost:8080/Admin/play/202'}
                            type="video/mp4"
                            alt=""
                          />
                        </video>
                      </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeeOne ;