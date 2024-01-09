import { useCart } from "react-use-cart";


const CardPro = ({food}) => {
  const {addItem,
    
    items,
   
   }=useCart();
  
  // console.log(food);
  // const {id}=food;
  // const {name,price,image,caption,title}=food;
 const handleAddtoCart=()=>{
  addItem(food);
  console.log(items);

 }
    return (
        <div>
    <div className="card w-30 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={food.image}alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">
      {food.name}
    </h2>
    <div className="badge  small">{food.price}$/each</div>
    <p className="text-xl ">
      {food.title}. {food.caption}
    </p>
    <button
    onClick={()=>handleAddtoCart()}
     className="btn block mb-2 btn-primary">
        Add to Cart
      </button>
      <button className="btn ">
       Customize
      </button>
    
  </div>
</div>
        </div>
    );
};

export default CardPro;