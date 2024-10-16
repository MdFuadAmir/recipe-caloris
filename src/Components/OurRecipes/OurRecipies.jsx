import { useEffect, useState } from "react";
import Recipe from "./Recipe/Recipe";


const OurRecipies = () => {
    const [recipes,setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipeData.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
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
                    recipes.map(recipe =>(<Recipe key={recipe.id} recipe={recipe}></Recipe>))
                }
                </div>
                {/* waht to cook */}
                <div className="w-full md:w-1/3 border-2">

                </div>
            </div>
        </div>
    );
};

export default OurRecipies;