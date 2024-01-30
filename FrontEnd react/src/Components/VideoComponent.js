import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const VideoComponent = () => {
  const [video, setVideo] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const { moduleId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadVideo();
  }, [moduleId]);

  const loadVideo = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/video/play/${moduleId}`);
      setVideo(result.data);
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('video', file);

    try {
      await axios.post(`http://localhost:8080/video/post/${moduleId}`, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(progress)
        },
      });

      // Reload the video after upload
      loadVideo();
      // Reset progress after a successful upload
      setUploadProgress(0);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

          {/* Back to Modules Link */}
          <Link to="/F2" className="btn btn-secondary mb-3">
            Back to Modules
          </Link>

          <div className="card">
            <div className="card-header">
              <div style={{ maxWidth: '100%' }}>
                <video controls className="w-100" height="auto">
                  <source
                    src={`http://localhost:8080/video/play/${moduleId}`}
                    type="video/mp4"
                    alt=""
                  />
                </video>
              </div>
            </div>
            <div className="card-footer mt-2">
              {uploadProgress > 0 && (
                <div className="progress mb-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${uploadProgress}%` }}
                    aria-valuenow={uploadProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {uploadProgress}%
                  </div>
                </div>
              )}
              <label htmlFor="videoUpload" className="btn btn-primary">
                Upload Video
                <input
                  type="file"
                  id="videoUpload"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="visually-hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
