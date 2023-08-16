import { useEffect, useState } from "react";
import Singlebutton from "./Singlebutton";
import Videos from "./Videos";
import { Link } from "react-router-dom";
import { openSidebar } from "../utils/toggleSlice";
import { useDispatch } from "react-redux";
import { useGetVideos } from "../utils/useGetVideos";
import { UTUBE_API_VIDEOS,  } from "../utils/constants";
import { useSelector } from "react-redux";

const VideoList = () => {

    const dispatch = useDispatch();
    useGetVideos(UTUBE_API_VIDEOS)
    // const videos = useGetVideos(UTUBE_API_VIDEOS);
    const videos = useSelector(store => store.videos.videoItems)
    // const videos = v[0]

    useEffect(()=> {
        dispatch(openSidebar())
    },[])

    return(
        <div className="ml-10">
            <div>
                <Singlebutton name={'All'}/>
                <Singlebutton name={'Sports'}/>
                <Singlebutton name={'News'}/>
                <Singlebutton name={'aliens'}/>
                <Singlebutton name={'waterfield'}/>
                <Singlebutton name={'discovery'}/>
                <Singlebutton name={'virat'}/>
                <Singlebutton name={'cricket'}/>
                <Singlebutton name={'india'}/>
                <Singlebutton name={'poker'}/>
            </div>
            <div className="flex flex-wrap">
                {videos[0]?.map((video,i) => {
                    if(video.id.videoId === undefined){
                        return <Link 
                        to={'watch?v='+video.id} 
                        key={i}><Videos video={video} />
                    </Link>
                    }
                    else{
                        return <Link 
                        to={'watch?v='+video.id.videoId} 
                        key={i}><Videos video={video} />
                        </Link>
                    }                 

                })}
            </div>
        </div>
    )
};

export default VideoList;