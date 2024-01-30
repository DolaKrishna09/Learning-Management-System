package com.app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Video")
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "VID_ID")
    private int vidId;

    @Column(name = "VIDEO_NAME", nullable = true) 
    private String videoName;

	
    
    public int getVidId() {
		return vidId;
	}

	public void setVidId(int vidId) {
		this.vidId = vidId;
	}

	public String getVideoName() {
		return videoName;
	}

	public void setVideoName(String videoName) {
		this.videoName = videoName;
	}

	@Override
	public String toString() {
		return "Video [vidId=" + vidId + ", videoName=" + videoName + "]";
	}


}
