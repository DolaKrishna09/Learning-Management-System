import React, { useState } from 'react';
import axios from 'axios';

const AddVideo = ({ postId }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleSaveVideo = async () => {
    try {
      const formData = new FormData();
      formData.append('video', videoFile);

      // Replace the endpoint with your actual API endpoint
      await axios.post('http://localhost:8080/Admin/post/203', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      console.log('Video added successfully');
      // Optionally, you can redirect the user or perform other actions after saving the video.
    } catch (error) {
      console.error('Error adding video:', error);
    }
  };

  return (
    <div>
      <h2 className="text-center m-4">Add Video</h2>
      <div className="form-group">
        <label>Video File:</label>
        <input
          type="file"
          className="form-control-file"
          onChange={handleFileInputChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSaveVideo}>
        Save Video
      </button>
      {uploadProgress > 0 && (
        <div className="progress mt-3">
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
    </div>
  );
};

export default AddVideo;
