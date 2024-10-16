import PropTypes from "prop-types";

const MyOrder = ({order,handelCooking,handelRemove}) => {
    const {recipe_id,recipe_name,preparing_time,calories} = order;

    return (    
            <div className="grid grid-cols-4 items-center p-2 text-center bg-gray-100/70 mt-4 text-sm">
            <p>{recipe_name}</p>
            <p className="flex flex-col">{preparing_time} <span>minutes</span></p>
            <p className="flex flex-col">{calories} <span>calories</span></p>
            <button onClick={()=>{handelCooking(order),handelRemove(recipe_id)}} className="p-2 rounded-2xl bg-green-400">Preparing</button>
            </div> 
    );
};

export default MyOrder;
MyOrder.propTypes = {
    order: PropTypes.object.isRequired,
    handelCooking:PropTypes.func.isRequired,
    handelRemove:PropTypes.func.isRequired,

    
}

