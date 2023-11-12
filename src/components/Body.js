import  Heading  from "./Heading";
import  Cards  from "./Cards";
import swiggyData from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Sui from "./Sui";
import Search from "./Search";
//whenever a state variable for a component changes, react, re-renders the component

export const Body = ()=>{

   
    var[restaurants_filter,setList] = useState([]);////top rated restaurants filter
    var[full_list,setFullList] = useState([]) // clear filter
    var[searchItem,setSearchItem] = useState("") //search 
      //get value from API
     //useEffect is executed after the component is rendered
     useEffect(()=>{
        console.log("UseEffect called after component has rendered")
        fetchData();
     },[])

     //We'd like to use the actual swiggy api rather than hardcoded data, we do so by following
     //I integrated my own API of swiggys data
    //   var swiggyApi = "https://gregarious-babka-a10115.netlify.app//.netlify/functions/api/restaurants"
    var swiggyApi = "https://anurag-react-swiggyapi.netlify.app//.netlify/functions/api/restaurants"
        const fetchData = async ()=>{
            try{
            const apiData = await fetch(swiggyApi) //since fetch is asynchronous, you can either use 'await' or 'then' to handle it
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

        //shimmerUi is rendered till the data is fetched from api and ready
         if(restaurants_filter.length == 0){
            setTimeout(() => {
                setList(full_list)
            }, 5);
            return(
                <div>
                    <Sui/>
                </div>
            )
         }
         else{
    return(
        <div className="mainbody">
            <Heading style={{display:"block"}}/>

            
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
            <button onClick={()=>{
                setList(
                    restaurants_filter.filter((res)=>res.info.avgRating>4)
                )
            }} type="button"><h3>Top rated restaurants</h3></button>

            {/* Clear filter */}
             <button onClick={()=>{
                setList(
                    full_list
                );
                // setSearchItem("")
                
            }} type="button"><h3>Clear Filter</h3></button>

            <div className="all-cards-container">
            
                {restaurants_filter.map(
                    (e)=> {
                        // console.log(e.info.id)
                        console.log("cards rendered")
                        return <Cards key= {e.id} cardData={e.info}/>
                    }
                )}
            </div>
        </div>
    )
    }
}

export default Body;