import { useEffect, useState } from "react";
import Dashboarditemshown from "./Dashboarditemshown";
import { useCart } from "react-use-cart";
// import { CartProvider, useCart } from "react-use-cart";

const DashBoard = () => {
    const [cart, setCart] = useState([]);
    
    
    // const {addItem}=useCart();
    const { isEmpty,  items,   } = useCart();
    console.log(items);
    useEffect(()=>{
        setCart(items);
    },[items])
    if (isEmpty) return <p>Your cart is empty</p>;
   
    
    return (
        <div className="bg-slate-500
        
         text-white">
         <div className="text-center">
         Dashboard
            </div>  
            <div className="">
                {cart?.map(item=><Dashboarditemshown key={item.id} item={item}/>)}
            </div>
            <div>
            <h2 className="text-center text-2xl">
            Total Price:{items.reduce((acc,curr)=>acc+curr.price*curr.quantity,0).toFixed(2)}$
            </h2>
    </div>
        </div>
    );

};

export default DashBoard;