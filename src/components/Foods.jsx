import { useEffect, useState } from "react";
import axios from "axios";
import CardPro from "./CardPro";


const Foods = () => {
    const [foods, setFoods] = useState([]);
   useEffect(()=>{
    axios.get("foods.json")
    .then((res)=>setFoods(res.data))
    .catch((err)=>console.log(err))
   },[])
//    console.log(foods);

    return (
        <div >
           <div className="grid
              grid-cols-1 gap-4 p-4
            md:grid-cols-3">
           {
            foods.map((food)=><CardPro key={food.id} food={food}/>)
               
           }
           </div>
           
        </div>
    );
};

export default Foods;