import { useEffect } from "react";
import Navbar from "../component/Navbar";


const SearchItem = () => {
    useEffect(() =>{
        document.title= "Search Item - NeighborShare"
    },[]);
  return (
    <>
        <Navbar/>
        
    </>
  )
}

export default SearchItem;