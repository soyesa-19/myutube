import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar, toggleSidebar } from "../utils/toggleSlice";
import CommentSection from "./CommentSection";
import RightSidebar from "./RightSidebar";
import { useGetVideos } from "../utils/useGetVideos";
import { Link } from "react-router-dom";
import { GET_RELATED_VIDEOS, SINGLE_VIDEO_DETAIL, UTUBE_API_VIDEOS } from "../utils/constants";
import {HiBell,HiDownload,HiThumbUp,} from 'react-icons/hi';
import LiveChatSeaction from "./LiveChatSection";
import { useSelector } from "react-redux";
import { addRelatedVideos } from "../utils/relatedVideosSlice";

const WatchPage = () => {
    const [videoDetail, setVideoDetail] = useState({title:'',views:'', commentCount:'', channelTitle:''})
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [likeCount, setLikeCount] = useState()
    useGetVideos(UTUBE_API_VIDEOS)
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const isToggle = useSelector( store => store.toggle.isToggle)

    useEffect(() => {
        console.log('hello')
        getRelatedVideos()
        getVideoDetail()
        dispatch(closeSidebar())
    },[searchParams.get('v')]);

    const getVideoDetail = async () => {
        const json_data = await fetch(SINGLE_VIDEO_DETAIL+searchParams.get('v'));
        const data = await json_data.json();
        const {title, channelTitle} = data?.items[0]?.snippet;
        const { viewCount,commentCount, likeCount } = data?.items[0]?.statistics;
        setVideoDetail(
            {
                title:title, 
                views:viewCount, 
                commentCount:commentCount, 
                channelTitle:channelTitle,
            });
        setLikeCount(likeCount);
        
    }

    const getRelatedVideos = async () => {
        const json = await fetch(GET_RELATED_VIDEOS + searchParams.get('v'))
        const data  = await json.json()
        setRelatedVideos(data.items)
    };

    return(
        <div className="flex">
            <div className="px-7 py-3">
                <iframe 
                    width="1050" height="500" 
                    src={"https://www.youtube.com/embed/"+ searchParams.get('v')} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                <div>
                    <div className="flex py-3 justify-between">
                        <p className="text-lg font-bold">{videoDetail.title}</p>  
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <img className="h-11 w-11 p-1"
                                alt='user' 
                                src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                            <div className="mx-2">
                                <p className="font-semibold">{videoDetail.channelTitle}</p>
                                <p className="text-xs font-light ">
                                    {parseFloat((videoDetail.views-10000) / 1000000).toFixed(2)}
                                    M Subscribers
                                </p>
                            </div>
                        </div>
                        <div className="flex my-3 justify-between">
                            <p className="text-sm font-light mx-3   flex">
                                {parseFloat(videoDetail.views / 1000000).toFixed(2)}M views                                
                            </p>
                            <button 
                                className="bg-gray-50 flex mx-2" 
                                onClick={()=> setLikeCount(Number(likeCount)+1)} 
                            >
                                <HiThumbUp className=" text-xl"/>
                                <p className="flex">{likeCount}</p>
                            </button>                            
                            <button><HiBell className="mx-3 text-xl"/></button>
                            <button><HiDownload className="mx-3 text-xl"/></button>
                        </div>                        
                    </div>
                </div>
                <div>
                    <CommentSection count={videoDetail.commentCount}/>
                </div>            
            </div>
            {isToggle ? <></> : <div>
                <LiveChatSeaction />
                {relatedVideos?.map((video,index) => {
                    console.log(video,"hi from watchpage")
                    return <Link to={'?v=' + video.id.videoId}  key={index}><RightSidebar video={video}/></Link>                     
                })}
            </div>}
        </div>
    )
};

export default WatchPage;