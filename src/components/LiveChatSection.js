import { useEffect, useState } from "react";
import LiveChatComment from "./LiveChatComment";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generate, makeid } from "../utils/helper";

const LiveChatSeaction = () => {

    const [commentText,  setCommentText] = useState('')

    const dispatch = useDispatch();
    const chats = useSelector(store => store.chat.messages)

    useEffect(() => {

        const interval = setInterval(()=> {
            dispatch(addMessage({
                name: generate(),
                message: makeid(6) + 'Lorem test case🧨✨',
            }))
        },1000);

        return(()=> clearInterval(interval))
        
    },[])


    return(
        <>
        <div className="border-black-50 h-96 w-full border-2 p-1 my-1  content-center rounded-md overflow-y-scroll scroll-smooth flex flex-col-reverse">
            {chats.map((chat, index) => (
                <LiveChatComment chat={chat} key={index}/>
            ))}

        </div>
        <form className="w-full border-2 border-gray-50" 
            onSubmit={(e)=> {
                e.preventDefault();
                dispatch(addMessage({
                    name: 'suyash sinha',
                    message: commentText,
                }))
                setCommentText('')

                }}>
                <input 
                    className="w-5/6 p-1 border-gray-100"  
                    name='comment' 
                    placeholder="Comment ... "
                    value={commentText}  
                    onChange={ e => setCommentText(e.target.value)} />
                <button className="bg-gray-50 rounded-lg p-1">Send✔</button>
        </form>
        </>
    )
};


export default LiveChatSeaction;