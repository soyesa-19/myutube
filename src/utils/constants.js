const UTUBE_API_KEY = 'AIzaSyA5EdyCQWEHxpNBjjb7OAjaBY_210VDGps';
export const SINGLE_VIDEO_DETAIL =  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key='+UTUBE_API_KEY+"&id="; 



export const GET_COMMENTS = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Creplies&key='+UTUBE_API_KEY+'videoId=';

export const UTUBE_API_VIDEOS = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+UTUBE_API_KEY;
export const GET_SEARCH_VIDEO =  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&key='+UTUBE_API_KEY+'&q=';
export const GET_RELATED_VIDEOS = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key='+ UTUBE_API_KEY +'&relatedToVideoId=';
  
