import { useEffect, } from "react";
import { addVideos } from "./videoSlice";
import { useDispatch } from "react-redux";

export const useGetVideos = (FETCH_URL) => {


    const dispatch = useDispatch()

    useEffect(()=> {
        getvideos(FETCH_URL)
    },[])

    const getvideos = async (FETCH_URL) => {
        const json = await fetch(FETCH_URL);
        const data = await json.json()
        console.log(data.items)
        dispatch(addVideos(data.items))
        
    }

};

