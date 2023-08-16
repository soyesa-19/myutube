

const LiveChatComment = ({chat}) => {
    return(
        <div className="flex py-1 content-center bg-gray-50 ">
            <img className="h-8 w-8 p-1"
                alt='user' 
                src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
            <span className="font-bold text-sm content-center ml-1 pt-1">{chat.name}</span>
            <span className="ml-1 text-sm pt-1">{chat.message}</span>
        </div> 
    )
};

export default LiveChatComment;