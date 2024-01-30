import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);
  return (
    <div className=" text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
