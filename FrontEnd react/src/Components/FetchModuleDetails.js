import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FetchModuleDetails() {
    const [module, setModule] = useState({});
    const [video, setVideo] = useState({});
    const { moduleId } = useParams();

    useEffect(() => {
        // Fetch module details
        axios.get(`http://localhost:8080/module/getModuleByModuleId/${moduleId}`)
            .then((res) => {
                setModule(res.data);
                // After fetching module details, load the video
                loadVideo();
            })
            .catch((error) => {
                console.error('Error fetching module details:', error);
            });
    }, [moduleId]);

    const loadVideo = async () => {
        try {
            // Fetch video details
            const result = await axios.get(`http://localhost:8080/video/play/${moduleId}`);
            setVideo(result.data);
        } catch (error) {
            console.error('Error fetching video:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4" style={{ color: 'black' }}>{module.moduleName}</h1>

            <div className="card mb-4">
                <div className="card-body">
                    <h2 className='text-primary'>Prerequisites:</h2>
                    <p style={{ color: 'black' }}>{module.prerequisites}</p>
              
        

         
                    <h2 className='text-primary'>Outcome:</h2>
                    <p style={{ color: 'black' }}>{module.outcome}</p>
                </div>
            </div>

            <div className="card text-center mb-4">
                <div className="card-body">
                    <h1 className="mb-3 text-primary">Module Video</h1>
                    <video controls className="w-100" height="500" style={{ border: '2px solid #ccc', borderRadius: '5px' }}>
                        <source
                            src={`http://localhost:8080/video/play/${moduleId}`}
                            type="video/mp4"
                            alt="Video"
                        />
                    </video>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <h1 className="mb-3 text-primary">Module Notes</h1>
                    <h6 style={{ color: 'black' }}>{module.moduleNotes}</h6>
                </div>
            </div>

            <div className="text-center mt-4">
                <Link to="/F2" className="btn btn-secondary mr-2">
                    Back to Modules
                </Link>
              
            </div>
        </div>
    );
}

export default FetchModuleDetails;
