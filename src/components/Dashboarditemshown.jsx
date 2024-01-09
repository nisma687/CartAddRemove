
import {  useCart } from "react-use-cart";
import { CiSquareRemove } from "react-icons/ci";
const Dashboarditemshown = ({item}) => {
   
    const {
       
        updateItemQuantity,
        removeItem,
      } = useCart();
    // console.log(items);
        
    return (
        <div className="border ">
            <div className=" my-5
             card-side w-50  p-8
               
                rounded-box
              shadow-xl">
 <div className="">
 <figure>
    <img
      className="
       
       w-full  rounded-lg"
     src={item.image} alt="Movie"/></figure>
     <h2 className="text-xl">
        {item.name}
    </h2>
 </div>
  <div className="">
    
    <p>
        {item.title} .{item.caption}
    </p>
    <div className="card-actions 
    mt-5
    justify-center">
      <button 
        onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}
      className="btn btn-primary">
        +
      </button>
        <div 
        className="badge badge-outline">
        {item.quantity}
        </div>
        <button
        onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}
         className="btn btn-primary">
        -
        </button>
    </div>
    <div className="card-actions small justify-end">
        {item.price*item.quantity}$
        
    <button
    className="btn btn-error"
     onClick={() => removeItem(item.id)}>
    <CiSquareRemove />
        </button>
    </div>
    

  </div>
</div>
        </div>
    );
};


export default Dashboarditemshown;