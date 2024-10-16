import { useEffect, useState } from "react";
import Recipe from "./Recipe/Recipe";
import MyOrder from "./MyOrder/MyOrder";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OurRecipies = () => {
    const [recipes,setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipeData.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    
    const [myOrders, setMyOrders] = useState([]);
    const handelWantToCook = (item) =>{
        const isExist = myOrders.find(orders => orders.recipe_id == item.recipe_id);
        if(!isExist){
            setMyOrders([...myOrders,item])
        }
        else{
            toast("Already added this item");
        }
    }


    return (
        <div className="my-12">
            {/* header */}
            <div className="flex items-center justify-center flex-col space-y-3">
                <h1 className="text-3xl font-bold font-mono">Our Recipes</h1>
                <p className="max-w-3xl mx-auto text-center text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            {/* body */}
            <div className="flex flex-col md:flex-row gap-4 mt-12">
                {/* menu */}
                <div className="w-full md:w-2/3 gap-4 grid grid-cols-1 md:grid-cols-2">
                {
                    recipes.map(recipe =>(<Recipe key={recipe.recipe_id} recipe={recipe} handelWantToCook={handelWantToCook}></Recipe>))
                }
                </div>
                {/* waht to cook */}
                <div className="w-full md:w-1/3 border-2 rounded-xl py-4">
                    <div className="flex justify-center items-center">
                        <h1 className="px-6 py-2 border-b-2 font-mono text-xl font-bold">Want to cook: {myOrders.length}</h1>
                    </div>
                    {/* orders */}
                    <div className="mt-4 grid grid-cols-3 text-gray-500">
                        <p className="text-center">Name</p>
                        <p className="text-center">Time</p>
                        <p className="text-center">Calories</p>
                    </div>
                        <hr />
                    <div>
                        {
                            myOrders.map((order) => <MyOrder key={order.id} order={order}></MyOrder>)
                        }
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default OurRecipies;