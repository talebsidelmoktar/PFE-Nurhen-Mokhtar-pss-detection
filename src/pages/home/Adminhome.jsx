import Drsidebar from "../../components/sidebar/Drsidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Table from "../../components/table/Table";
import Image, { ImageUpload } from "../imageUpload/Image";
import List from "../list/List";
import List2 from "../list/List2";
import Sidebar from "../../components/sidebar/Sidebar";
import Nursetable from "../../components/Nusrestable/Nursetable";
const Adminhome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        
        <div className="listContainer">
         
          <Nursetable />
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
