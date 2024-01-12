import React,{lazy,Suspense,useEffect,useState,useContext} from "react";
import  ReactDOM  from "react-dom/client";
import  Body  from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet, Link} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Heading from "./components/Heading";
import Error from "./components/Error";
import MenuCard from "./components/MenuCard";
import Sui from "./components/Sui";
import UserContext from "./utils/UserContext";
//redux
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const root = document.getElementById('root')

//this won't work
/*
const Instamart = lazy(()=>{
    import("./components/Instamart")
})
*/
// const [userName,setUserName] = useState("");
//this works, dont know why😅
const Instamart = lazy(()=>import("./components/Instamart"))




const AppLayout = ()=>{

    //authentication, not real but just do it
    useEffect(()=>{
        //actually this should be an api call but for simplicity it is hardcoded for now
        const data = {
            "name" : "Anurag Preetam"
        }
        setUsername(data.name)
    },[])
    const[userName,setUsername] = useState();

    return(
        <Provider store={appStore}>

        
        <UserContext.Provider value={{loggedInUser:userName,setUsername}}>
            <div>
            {/* <UserContext.Provider value={{loggedInUser:"PODA"}}>
                <Heading/>
            </UserContext.Provider> */}
            <Heading/>
                <Outlet/>
           
            </div>
        </UserContext.Provider>
        </Provider>
           
       
    )
}
const appRoute = createBrowserRouter([
        
       
        {
            path:"/",
            element:<AppLayout/>,
            errorElement:<Error/>,
            children:[                  //careful here 'c' should'nt be capital
                {
                    path:"/",
                    element:<Body/>,
                },
                {
                    path:"/about",
                    element:<About/>,
                },
                {
                    path:"/contact",
                    element:<Contact/>,
                },
                {
                    path:"/cart",
                    element:<Cart/>,
                },
                {
                    //lazy-loaded
                    path:"/instamart",
                    element:(
                        <Suspense fallback={<Sui></Sui>}><Instamart/></Suspense>
                    ),
                },
                {
                    path : "/restaurants/:resID",
                    element:<MenuCard/>,
                }
            ]
        }
       
    //     ]
    // {
    //     path:"/about",
    //     element:<About/>,
    //     errorElement:<Error/>,
    // },
    // {
    //     path:"/main",
    //     element:<Body/>,
    //     errorElement:<Error/>,
    // },
    // {
    //     path:"/contact",
    //     element:<Contact/>,
    //     errorElement:<Error/>,
    // },
    
    
])

//babel transpiles JSX to browser understandable javascript (like react.createElement)
// console.log(<Body></Body>)
ReactDOM.createRoot(root).render(<RouterProvider router={appRoute}/>);
// ReactDOM.createRoot(root).render(<AppLayout/>);


