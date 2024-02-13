import { useState,useEffect } from "react";
import Card from "./Card";



const Body = ()=>{
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await res.json();
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const [searchText,setSearchText] = useState("")
    const [listOfRes,setListOfRes] = useState([])
    const [filteredRes, setFilteredRes] = useState([])
    return (
        <div className="body">
            <div className="Search">
                <input type="text" className="input" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button 
                    className="btn" 
                    onClick={()=>{
                        const filtered = listOfRes.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRes(filtered)
                    }} 
                >Search</button>
            </div>
            <div className="res-container">
                {
                    filteredRes.map((resDetails)=>{
                        return <Card key={resDetails.info.id} resData={resDetails}/>
                    })
                }
                {/* <Card resData={infoList[0]}/> */}
            </div>
        </div>
    )
}

export default Body;