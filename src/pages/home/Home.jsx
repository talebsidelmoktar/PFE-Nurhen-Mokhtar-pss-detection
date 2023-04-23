import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Table from "../../components/table/Table";
import Image, { ImageUpload } from "../imageUpload/Image";
import Radsidebar from "../../components/sidebar/Radsidebar";
const Home = () => {
  return (
    <div className="home">
      <Radsidebar />
      <div className="homeContainer">
        <Navbar />
        
        
        <div className="listContainer">
          
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default Home;
