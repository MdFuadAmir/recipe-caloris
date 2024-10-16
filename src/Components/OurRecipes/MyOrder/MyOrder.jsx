import PropTypes from "prop-types";

const MyOrder = ({order}) => {
    const {recipe_name,preparing_time,calories} = order;

    return (
        <div className="grid grid-cols-3 p-2 text-center bg-gray-100/70 mt-4 text-sm">
            <p>{recipe_name}</p>
            <p className="flex flex-col">{preparing_time} <span>minutes</span></p>
            <p className="flex flex-col">{calories} <span>calories</span></p>
            <button className="py-2 rounded-2xl bg-green-500 font-medium font-mono ">Preparing</button>

        </div>
    );
};

export default MyOrder;

MyOrder.propTypes = {
    order: PropTypes.object.isRequired
}