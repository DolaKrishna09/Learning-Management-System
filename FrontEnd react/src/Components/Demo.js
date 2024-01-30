import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Demo() {
    const [module, setModule] = useState({});
    const [video, setVideo] = useState({});
    const { moduleId } = useParams();

    useEffect(() => {
        console.log(moduleId);

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
        <div>

            
            {module && (
                <div>
                    <h1>{module.courseId}</h1>
                    <p>{module.moduleName}</p>
                    <p>{module.prerequisites}</p>
                    <p>{module.outcome}</p>
                    <p>{module.moduleNotes}</p>
                </div>
            )}

            <div className="row">
             
                   
                    <h2 className="text-center m-4">Module Video</h2>
                    <div className="card">
                       
                            <div style={{ maxWidth: '50%' }}>
                                <video controls width="100%" height="100%">
                                    <source
                                        src={`http://localhost:8080/video/play/${moduleId}`}
                                        type="video/mp4"
                                        alt=""
                                    />
                                </video>
                           
                        </div>
                    </div>
                </div>
           
           

        </div>
    );
}

export default Demo;
