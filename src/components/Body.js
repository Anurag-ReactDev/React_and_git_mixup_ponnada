import  Heading  from "./Heading";
import  Cards, {CardswithPromotedLabel}  from "./Cards";
import swiggyData from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Sui from "./Sui";
import Search from "./Search";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//whenever a state variable for a component changes, react, re-renders the component

export const Body = ()=>{

   
    var[restaurants_filter,setList] = useState([]);////top rated restaurants filter
    var[full_list,setFullList] = useState([]) // clear filter
    var[searchItem,setSearchItem] = useState("") //search
    const CardsPromoted = CardswithPromotedLabel(Cards) 
      //get value from API
     //useEffect is executed after the component is rendered
      
     //empty dependent variable
     useEffect(()=>{
        console.log("UseEffect called after component has rendered")
        fetchData();
     },[])

     //no dependent variable, run it and see console, it is madness
    /* useEffect(()=>{
         console.log("UseEffect called after component has rendered")
        fetchData();
     })
     */

      /* useEffect(()=>{
         console.log("UseEffect called after component has rendered")
        fetchData();
     },[some_state_variable])
     */

     //We'd like to use the actual swiggy api rather than hardcoded data, we do so by following
     //I integrated my own API of swiggys data
    //   var swiggyApi = "https://gregarious-babka-a10115.netlify.app//.netlify/functions/api/restaurants"
    var swiggyApi = "https://anurag-react-swiggyapi-nodejs.netlify.app//.netlify/functions/api/"
        const fetchData = async ()=>{
            try{
            const apiData = await fetch(swiggyApi,{"Access-Control-Allow-Origin":"true"}) //since fetch is asynchronous, you can either use 'await' or 'then' to handle it
            const json = await apiData.json();
            // console.log(json);
            // setList(json?.data.cards[4].card.card.info);
            setList(json); 
            setFullList(json);
            }
            catch(err){
                console.log("Here's the error",err)
            }
            //The optional chaining (?.) operator accesses an object's property or calls a function.
            // If the object accessed or function called using this operator is undefined or null, 
            //the expression short circuits and evaluates to undefined instead of throwing an error.
        }
        const onlineStatus = useOnlineStatus();
        console.log("Your online Status: " +onlineStatus)
        if(onlineStatus == "false"){
            console.log("Entering..")
            return(
                <div style={{padding:"10rem"}}>
                       <h1>
                    Oops! Dinosaur on the way!
                </h1>
            
                </div>
            )
        }

        //shimmerUi is rendered till the data is fetched from api and ready
         if(restaurants_filter.length == 0){
            // console.log("shimmerUI triggered")
            // setTimeout(() => {
            //     setList(full_list)
            // }, 1000);
            return(
                <div>
                    <Sui/>
                </div>
            )
         }
         else{
            console.log("shimmerUI not triggered")
        return(
        <div className="mainbody">
            {/* <Heading style={{display:"block"}}/> */}

            
            <Search value={searchItem} 
            
            onChange={(e)=>{
                setSearchItem(e.target.value)
                }
            }

            onClick={(e)=>{
                
                setList(
                    restaurants_filter.filter((res)=>res.info.name.toLowerCase().includes(searchItem.toLowerCase()))
                )
                
            }}
            />

            {/* avgRating>4 filter */}

            <div className="my-2 flex justify-end">
                <button className="mx-2 border-2 border-slate-300 rounded-lg p-2 hover:bg-yellow-200" onClick={()=>{
                    setList(
                        restaurants_filter.filter((res)=>res.info.avgRating>4)
                    )
                }} type="button" ><h3>Top rated restaurants</h3></button>

                {/* Clear filter */}
                <button  className="mx-2 border-2 border-slate-300 rounded-lg p-2 hover:bg-yellow-200" onClick={()=>{
                    setList(
                        full_list
                    );
                    // setSearchItem("")
                
                }} type="button" ><h3>Clear Filter</h3></button>
            </div>
            <div className="my-6 flex flex-wrap"> {/*  all cards container*/}
               
            
                {restaurants_filter.map(
                    (e)=> {
                        // console.log(e.info.id)
                        // console.log("cards rendered")
                        // console.log(e.info.id)
                        
                        return (
                            
                                <Link to={"restaurants/" + e.info.id}>
                                  {/* ternary operator */}
                                    {e.info.promoted == "true"? 
                                    <CardsPromoted key= {e.info.id} cardData={e.info} /> 
                                    : <Cards key= {e.info.id} cardData={e.info}/>}
                                    
                                </Link>
                            
                        )
                    }
                )}
            </div>
        </div>
    )
    }
}

export default Body;