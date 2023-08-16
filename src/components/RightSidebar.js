const RightSidebar = ({video}) => {
    const {title, channelTitle} = video?.snippet

    return(
        <div className="flex my-3">
            <img 
                className="rounded-md w-36 h-26" 
                alt='logo' 
                src={video?.snippet?.thumbnails?.medium?.url} />
            <div className="ml-1">
                <h4 className="font-semibold text-xs">{title}</h4>
                <p className="text-sm">{channelTitle}</p>
                {video?.statistics?.viewCount ? <p className="text-xs">{parseFloat(video?.statistics?.viewCount / 1000000).toFixed(2)}M views</p> :
                <p>No data</p>
                }
            </div>
        </div>
    )
};

export default RightSidebar;