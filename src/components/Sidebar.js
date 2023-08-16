import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const toggleStatus = useSelector( store => store.toggle.isToggle)
    
    if (!toggleStatus) {return null}

    return(
        <>
        <div className="w-44 p-2 m-2">
            <ul className="border-b-gray-200  border-b-2">
                <Link to='/'><li className="p-2">Home</li></Link>
                <li className="p-2">Shorts</li>
                <li className="p-2">Subscriptions</li>
            </ul>
            <ul className="border-b-gray-200  border-b-2 mt-8">
                <li className="p-2">Videos</li>
                <li className="p-2">About</li>
                <li className="p-2">Youtube insights</li>
            </ul>
            <ul className="border-b-gray-200  border-b-2 mt-8">
                <li className="p-2">Home</li>
                <li className="p-2">Shorts</li>
                <li className="p-2">Subscriptions</li>
            </ul>
        </div>

        </>

    )
};

export default Sidebar;