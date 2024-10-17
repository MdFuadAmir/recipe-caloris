import { useEffect, useState } from "react";
import Recipe from "./Recipe/Recipe";
import MyOrder from "./MyOrder/MyOrder";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cook from "./Cook/Cook";
import RecipeHeader from "./RecipeHeader/RecipeHeader";

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
            setMyOrders([...myOrders,item]);
        }
        else{
            toast("Already added this item");
        }
    }
    const [cooking,setCooking] = useState([]);
    const [totalTime,setTotalTime] = useState(0);
    const [totalCalories,setTotalCalories] = useState(0);
    const handelCooking = (items) =>{
        const isExist = cooking.find(cook => cook.recipe_id == items.recipe_id);
        if(!isExist){
            setCooking([...cooking,items]);
        }
        else{
            toast("Already coocking this item");
        }
        const timeExist = cooking.find(cook => cook.recipe_id == items.recipe_id);
        if(!timeExist){
            const newTotal = totalTime + items.preparing_time;
            setTotalTime(newTotal)
        }
        const caloriesExist = cooking.find(cook => cook.recipe_id == items.recipe_id);
        if(!caloriesExist){
            const newCalories = totalCalories + items.calories;
        setTotalCalories(newCalories)
        } 
    }

    
    return (
        <div className="my-12">
            <RecipeHeader/>
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
                {/* sellected items */}
                    <div>
                        <div className="flex justify-center items-center">
                            <h1 className="px-6 py-2 border-b-2 font-mono text-xl font-bold">Want to cook: {myOrders.length}</h1>
                        </div>
                        {/* orders */}
                        <div className="mt-4 grid grid-cols-4 text-gray-500">
                            <p className="text-center">Name</p>
                            <p className="text-center">Time</p>
                            <p className="text-center">Calories</p>
                        </div>
                        <div>
                            {
                                myOrders.map((order) => <MyOrder key={order.id} handelCooking={handelCooking} order={order}></MyOrder>)
                            }
                        </div>
                        <ToastContainer />

                    </div>
                    {/* preparing */}
                    <div className="mt-8 mb-4">
                        {/*  */}
                        <div className="flex justify-center items-center">
                            <h1 className="px-6 py-2 border-b-2 font-mono text-xl font-bold">Currently Cooking: {cooking.length}</h1>
                        </div>
                        {/*  */}
                        <div className="mt-4 grid grid-cols-3 text-gray-500">
                        <p className="text-center">Name</p>
                        <p className="text-center">Time</p>
                        <p className="text-center">Calories</p>
                        </div>
                        {/*  */}
                        <div>
                            {
                                cooking.map((cook) => <Cook key={cook.recipe_id} cook={cook}></Cook>)
                            }
                        </div>
                    </div>
                    <hr />
                    {/* total time and calories */}
                    <div className="mt-4 grid grid-cols-3 text-gray-500 items-center">
                        <p className="text-center"></p>
                        <p className="flex justify-center flex-col text-center">Total Time = <span>{totalTime} minutes</span> </p>
                        <p className="flex justify-center flex-col text-center">Total Calories =<span>{totalCalories} calories</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default OurRecipies;

        