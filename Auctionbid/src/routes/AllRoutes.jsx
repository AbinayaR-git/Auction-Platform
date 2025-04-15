import { Route, Routes } from "react-router-dom";
import { BidDetails, BidList } from "../pages";
import { Help } from "../pages/Help";  
import { Signup } from "../pages/Signup"; 
import { Login } from "../pages/Login";  
import Search from "../pages/Search";  
import { Menu } from "../pages/menu"
import { PrivateRoute } from "../Components/private_route"

const AllRoutes = () => {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<BidList title="Treasure is On the way"/>} />
        <Route path="Auction/Category" element={<BidList title="Category"/>} />
        <Route path="Auction/upcoming" element={<BidList title="Upcoming auction"/>} />
        <Route path="Auction/Login" element={<Login />} />
        <Route path="Auction/Signup" element={<Signup />} />
        <Route path="/Auction/Help" element={<Help />} />
        <Route path="/bid/:id" element={<BidDetails />} />
        <Route path="/Auction/search" element={<Search />} />
        <Route path='/' element={<PrivateRoute><Menu/></PrivateRoute>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
