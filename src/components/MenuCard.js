import { useEffect,useState } from "react";
import menuApi from "../utils/menuApi";
import { Link, useParams } from "react-router-dom";
import Sui from "./Sui";
import url from "../utils/constants";
import CategorisedMenu from "./CategorisedMenu";

const MenuCard = ()=>{

    const[resMenu,setResMenu] = useState(null)

    //useParams gets the id from the existing url, it stores that in key value pair
    //where key is the part of path that you give in path in createBrowserRouter, here I gave it as resID
    //so I get an object resID that is also the key to a value (here it is restaurant's ID)
    const {resID} = useParams()
  
    //we use useEffect hook to make an api call to fetch menu of particular restaurant
    // var resID = 17122
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(menuApi+resID);
        const menu = await data.json();
        console.log("If everthing went well....\n");
        console.log(menu)
        setResMenu(menu)
       
        
        // console.log(menu?.data?.cards[0]?.card?.card?.info.name)
        // console.log(menu?.data?.cards[0]?.card?.card?.info.cuisines.map((e)=>{
        //     console.log(e)
        // }));
    }

    if(resMenu === null){
        return <Sui/>
    }
    else{
        var destructuredData_basic = resMenu?.data?.cards[0]?.card?.card?.info;
        // console.log(resMenu?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
        var itemCards = resMenu?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
        return(
            <div className="">
                <div>
                    {/* <img className="w-60 h-40 m-4" src={url+destructuredData_basic.cloudinaryImageId}>
                    </img> */}
                    <h1 className="font-bold text-center">
                    {destructuredData_basic.name}
                    </h1>
                    <br></br>
                    {/* <ul className="p-2">
                    {itemCards.map((cuisines)=>{
                        return <li>{"*"} {cuisines?.card?.info?.name}</li>
                    })}
                    </ul> */}
                    {/*
                     <CategorisedMenu/> component should come here
                     */}
                     <CategorisedMenu data={itemCards}/>
                    <div className="mx-5">
                        <Link to="/">
                            <button className="mx-2 border-2 border-slate-300 rounded-lg p-2 hover:bg-yellow-200">
                            Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuCard;