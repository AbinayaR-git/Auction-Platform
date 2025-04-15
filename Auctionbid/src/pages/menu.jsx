import { useEffect,useState } from "react";
import { get_notes,logout } from "../endpoints/api";
import {useNavigate} from 'react-router-dom'
export const Menu = ()=>{

    const[notes,setNotes]=useState([])
    const nav = useNavigate();
    useEffect(()=>{
         const fetchNotes= async()=>{
            const notes=await get_notes()
            setNotes(notes)
         }
         fetchNotes();
    },[])

    const handleLogout = async() => {
           const success= await logout();
           console.log("Logout success?", success);
           if(success){
            nav('/login')
           }

    }
    return (
        <div>
            <h1>Welcome Back User</h1>
            <div>
                {notes.map((note)=>{
                    return <p>{note.description}</p>
                })}
            </div>
            <button style={{'backgroundColor':'red','fontSize':'30px','color':'white'}} onClick={handleLogout}>Logout</button>
        </div>
    )

}