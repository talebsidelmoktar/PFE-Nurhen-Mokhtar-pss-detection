import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ListIcon from '@mui/icons-material/List';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import PersonIcon from '@mui/icons-material/Person';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Person4Icon from '@mui/icons-material/Person4';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import {AuthContext, useAuth} from "../../context/AuthContext";
import { auth } from "../../firebase";

const Drsidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate  = useNavigate()
  const Logout = () => {
       auth.signOut().then(() => {
     
       navigate('/');
    }).catch((error) => {
      console.log('Error logging out:', error);
    });
};
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Doctor</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Patiens</span>
            </li>
          </Link>
          <Link to="/nurses" style={{ textDecoration: "none" }}>
            <li>
              <MedicationLiquidIcon className="icon" />
              <span>Nurses</span>
            </li>
          </Link>
         
          
          <Link to="/appointments" style={{ textDecoration: "none" }}>
            <li>
              <ListIcon className="icon" />
              <span>list of Apointments</span>
            </li>
          </Link>
          
          
          <p className="title">Checks</p>
          <Link to="/check" style={{ textDecoration: "none" }}>
            <li>
              <DocumentScannerIcon className="icon" />
              <span>Make a check</span>
            </li>
          </Link>
          <Link to="/checks" style={{ textDecoration: "none" }}>
            <li>
              <FormatListNumberedIcon className="icon" />
              <span>list of checks</span>
            </li>
          </Link>
          
          <p className="title">USER</p>
          
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={Logout}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Drsidebar;
