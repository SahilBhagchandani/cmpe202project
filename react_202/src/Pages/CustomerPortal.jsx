import React, {useState, useContext} from 'react';
import Menu from './Menu.jsx'
import { ReqContext } from '../Components/ReqContext';
import { Link } from 'react-router-dom';
function CustomerPortal(){

let menuItems=[{link:"/UserInfoUpdate", name:"Update Info"}, {link:"/CustomerFlights", name:"My Flights" }, {link:"/Search", name:"Available Flights"}
, {link:"/Home", name:"Sign Out" }  ];


const {cuId,setCuId,cuMile, setCuMile, cuUsername,setCuUsername, cuIsLoggedin ,setCuIsLoggedin, 
distance, setDistance, adminIsLoggedin,setAdminIsLoggedin}= useContext(ReqContext);

// Customer should be replaced from database where id===cuId or username===cuUsername




return (
<div >
<Menu menuItems={menuItems}/>
    <div className="container">
        <h1> Welcome {cuUsername }! </h1>
        { cuMile>0? <h2> We're so proud to fly {cuMile} miles with you!</h2>  :null}


        
    </div>

</div>

)


}


export default CustomerPortal;