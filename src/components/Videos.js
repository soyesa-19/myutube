const Videos = ({video}) => {

    const {title, channelTitle} = video.snippet

    return(
        <div className="w-60 m-2 p-2 shadow-sm">
            <img 
                className="rounded-md" 
                alt='logo' 
                src={video.snippet.thumbnails.medium.url} />
            <h4 className="font-semibold">{title}</h4>
            <p>{channelTitle}</p>
        </div>
    )
};

export default Videos;