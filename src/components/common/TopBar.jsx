import React from "react";
import LinkedInLogo from "../../assets/linkedinlogo.png";
import UserLogo from "../../assets/user.png";
import { BsSearch } from "react-icons/bs";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidGrid } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  return (
    <div className="topBar">
      <div className="logoSearch">
        <img src={LinkedInLogo} className="linkedinLogo" />
        <div className="search">
          <BsSearch />
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div className="icons">
        <div className="iconbox" onClick={() => goToRoute("/home")}>
          <AiFillHome />
          <p>Home</p>
        </div>
        <div className="iconbox" onClick={() => goToRoute("/profile")}>
          <MdPeople />
          <p>My Network</p>
        </div>
        <div className="iconbox">
          <BsBriefcaseFill />
          <p>Jobs</p>
        </div>
        <div className="iconbox">
          <AiFillMessage />
          <p>Messaging</p>
        </div>
        <div className="iconbox">
          <IoMdNotifications />
          <p>Notifications</p>
        </div>
        <div className="iconbox">
          <img src={UserLogo} className="userLogo" />
          <p>Me</p>
        </div>
        <div className="iconbox">
          <BiSolidGrid />
          <p>Work</p>
        </div>
      </div>
    </div>
  );
}
