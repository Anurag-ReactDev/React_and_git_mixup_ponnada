import { Component } from "react";
import UserContext from "../utils/UserContext";
// const About = ()=>{
//     console.log("About")
//     return(
        
//         <div className="pages-div">
//             <h1>
//                 You're on About page
//             </h1>
//         </div>
       
//     )
// }

class About extends Component{ //trying out classBased component as well
    constructor(props){
        super(props);
    }
  
    componentDidMount(){

    }
render(){
    return(
        
            <div>
                <UserContext.Consumer>
                    {({loggedInUser})=><h3>User: {loggedInUser}</h3>}
                </UserContext.Consumer>
                <h1>
                    You're on About page
                </h1>
            </div>
       
    )
   
}
    
}
export default About;