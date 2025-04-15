import { useAuth } from "../contexts/useAuth"
import { useNavigate } from "react-router-dom";


export const PrivateRoute = ({children})=>{
     const {isAuthenticated,loading}=useAuth();
     const nav = useNavigate();
     if(loading){
        return <h2>Loading...</h2>
     }
     if(isAuthenticated){
       return children
     } 
     else{
        nav('/login')
     }
}

