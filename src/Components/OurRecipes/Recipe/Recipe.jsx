import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { IoFlameOutline } from "react-icons/io5";


const Recipe = ({recipe}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div className="border-2 rounded-xl p-4">
            <img src={recipe_image} alt="" className="w-full h-44 rounded-md mb-4"/>
            <div className="space-y-4">
                <h1 className="text-lg font-bold font-serif">{recipe_name}</h1>
                <p className="font-medium text-sm text-gray-500">{short_description}</p>
                <hr/>
                <h3 className="text-lg font-bold font-serif">Ingredients: {ingredients.length}</h3>
                <div>
                    {
                        ingredients.map((item,index) =>(<li className="text-gray-500" key={index}>{item}</li>))
                    }
                </div>
                <hr />
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-500">
                        <CiClock2/>
                        <p>{preparing_time} minutes</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <IoFlameOutline/>
                        <p>{calories} calories</p>
                    </div>
                </div>
                <button className="py-2 px-8 rounded-full bg-green-500 font-medium font-mono">Want to Cook</button>
            </div>
        </div>
    );
};

export default Recipe;

Recipe.propTypes ={
    recipe: PropTypes.object.isRequired
}