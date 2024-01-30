package com.app.Service;

import com.app.entity.Video;

public interface VideoInterface {
	

	
	public Video createPost(Video video);
	
	
	public Video getVideoById(Integer id);
	
	
	public Video updatePost(Video video,Integer id);
	
	
	public Video deleteVideos(Integer id);
}
