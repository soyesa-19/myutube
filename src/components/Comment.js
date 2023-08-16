
const Comment = ({data}) => {

    const {name, text, replies} = data;

    return(
        <div className="flex p-2 my-2">
            <img className="h-11 w-11 p-1"
            alt='user' 
            src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
            <div className="ml-2">
                <p className="font-bold text-sm">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )

};

const CommentList = ({comments}) => {

    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} key={index} />
            <div className="ml-6 border-l-2 ">
                <CommentList comments={comment.replies} key={index} />
            </div>
        </div>

    ))
};

export default CommentList;