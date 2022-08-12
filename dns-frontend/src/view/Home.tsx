import React from "react";
import Header from "../layouts/Header";
import Admin from "./Admin";
import Footer from "../layouts/Footer";
import Catagory from "./Catagory";
import Carousal from "../components/Carousal";
import ItemList from "./ItemList";
import AddItem from "../components/AddItem";


const Home:React.FC=()=>{
    //const itemList=['item1','item2','item3','newitem1','Aitem','newitem2','Bitem','newitem3'];
    const itemList=[
        {
        itemName:'itemName',description:'sld',itemCat:'item1',itemImg:'url'
        },
        {
            itemName:'itemName2',description:'sld',itemCat:'tool',itemImg:'url2'
        },
];
    return(
        
        <React.Fragment>
            <div className="background">
                <Header/>
                {/* <div className="cover">                  
                </div> */}
                <Carousal/>
                <div className="about">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio mollitia delectus itaque quod accusantium fugiat omnis sequi. Recusandae, expedita iusto illum quae vel consequuntur rem veniam iste dolore quod!</p>
                </div>
                {/* <Catagory/> */}
                <ItemList items={itemList}/>
                <AddItem/>
                {/* <Admin/> */}
                <Footer/>
            </div>
        </React.Fragment>
    )
}
export default Home;