import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/toggleSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cacheResult } from "../utils/cacheSlice";
import { addVideos, deleteVideos } from "../utils/videoSlice";
import { GET_SEARCH_VIDEO } from "../utils/constants";



const Header = () => {
    
    const [searchText, setSearchText] = useState('');
    const cache = useSelector(store => store.cache)
    const [suggestionData, setSuggestionData] = useState([])
    const [isFocus, setIsFocus] = useState(false)
    const dispatch = useDispatch();




    useEffect(()=>{
        /* Debouncing :- when we dont make api call for every keypress. 
           If the difference between two keystrokes is greter than 200ms then only the api call will be made.
           We included the caching for optimizing our api calls. Once the api call made for one string,
           we do not need to make api call again for that{specialy when user press backspace on search bar}.
        */
        const timer = setTimeout(() =>{
            if(cache[searchText]){
                setSuggestionData(cache[searchText])
            }else{
                getSuggestiondata()
            }
        } , 200)

        return( () => {
            clearTimeout(timer)
        })
    },[searchText]);

    const getSuggestiondata = async () => {
        const json = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+ searchText);
        const data = await json.json();
        setSuggestionData(data[1]);

        dispatch(cacheResult({
            [searchText] : data[1],
        }))
    }

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar());
    };

    const handlegetData = () => {
        getSearchdata()   
    }

    const getSearchdata = async () => {
        const json = await fetch(GET_SEARCH_VIDEO + searchText)
        const data = await json.json()
        dispatch(deleteVideos())
        dispatch(addVideos(data.items));
        console.log(data.items)
    }


    return(
        <div className="grid grid-flow-col shadow-md">
            <div className="flex col-span-1 p-3">
                <img 
                    className=" h-10 w-6 ml-6"
                    onClick={() => handleToggleSidebar()}
                    alt='Logo' 
                    src='https://www.flaticon.com/svg/vstatic/svg/3917/3917291.svg?token=exp=1676659874~hmac=bffdc2feeb0fa935f91b29efce6dddb3' />
                <a href="/">
                    <img 
                        
                        className="h-10 w-20 ml-10"
                        alt='logo' 
                        src='https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg' />
                </a>
            </div>
            <div className="col-span-10 p-3 ml-44 ">
                <div>
                    <input className='w-1/2 ml-6 border-gray-300 border-2 rounded-l-full p-2 shadow-sm focus:border-gray-300'
                        name='search'
                        placeholder="🔎 Search..."
                        value={searchText}
                        onChange = {(e)=> setSearchText(e.target.value)}
                        onFocus= {()=> setIsFocus(true)}
                        onBlur = {() => setIsFocus(false)}
                        autoComplete="off" />
                    <Link to='/'><button onClick={() => handlegetData()}  className="border-gray-300 border-2 rounded-r-full bg-gray-200 p-2">🔎</button></Link>
                </div>
                {searchText.length !== 0 &&
                 isFocus && 
                 suggestionData.length !== 0 && 
                 <div className="ml-6 p-2 border-gray-300 border-2 w-[30rem] rounded-lg fixed bg-white">
                    <ul>
                        {suggestionData.map( data => (
                            <li key={data} className="hover:bg-gray-100 p-2 rounded-lg">🔎 {data}</li>                         
                        ))}
                    </ul>
                </div>}
            </div>
            <div className=" col-span-1 p-3 mt-2">
                <img 
                    className="h-8 w-8"
                    alt='logo' 
                    src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
            </div>
        </div>
    )
};

export default Header;