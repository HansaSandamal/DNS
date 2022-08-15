import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Carousal from "../components/Carousal";
import ItemList from "./ItemList";
import img from '../assests/images/cover.jpg';
import axios from "axios";

type Items= {
  
    
      itemName: String;
      description: String;
      catagory: String;
      image: String;
    
  };

const Home:React.FC=()=>{
const [itemList,setItemList]=useState<Items[]>([]);

  useEffect(()=>{
     axios.get("http://localhost:5000/item")
      .then(res => {
        
   
        setItemList(res.data);
        
       
      });
    
  },[]);

    return(
        
        <React.Fragment>
            <div className="background">
                <Header/>
                {/* <div className="cover">                  
                </div> */}
                <Carousal/>
                <div className="about">

                <img className="rounded-circle" alt="logo" src={img} width="100px" height="100px"/>
                <p> 
                We have a complete range of hardware products ready to deliver to your doorstep. Please contact us for the best prices.
                </p>
                </div>
                {/* <Catagory/> */}
                <ItemList items={itemList}/>
                
                {/* <Admin/> */}
                <Footer/>
            </div>
        </React.Fragment>
    )
}
export default Home;