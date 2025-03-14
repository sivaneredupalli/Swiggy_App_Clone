import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header =()=>{
    const [btnLogin,setBtnLogin] = useState("Login")
    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="w-24">
            <img src={LOGO_URL} alt="Logo" />
        </div>
        <div className="flex item-center">
            <ul className="flex p-4 m-4">
            <li className="px-4">Online Status :{onlineStatus ? "🟢" : "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About</Link></li>
                <li className="px-4"><Link to="/contact">Contact</Link></li>
                <li className="px-4"><Link to="/cart">Cart</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
              <button className="btn" onClick={()=>{
                  btnLogin =="Login" ?setBtnLogin("Logout") : setBtnLogin("Login")
                }}>{btnLogin}</button>
                
            </ul>
        </div>
    </div>
    );};
export default Header;