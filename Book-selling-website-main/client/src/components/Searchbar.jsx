import {BiSearchAlt2} from "react-icons/bi";

export default function Searchbar() {
    return (
        <div className="max-w-screen h-14 bg-gray-200 mx-auto px-24 flex items-center justify-center gap-4">
            <input type="text" className="w-80 rounded-md px-2 py-1" placeholder="Search..."/>
            <button className="bg-green-500 px-2 py-1 rounded-md text-white hover:bg-green-600 flex gap-1 items-center">
                <BiSearchAlt2 className="pt-1 w-5 h-6" />    
                Search
            </button>
            <button className="bg-red-400 px-2 py-1 rounded-md text-white w-20 hover:bg-red-500">Cancel</button>
        </div>
    );
}