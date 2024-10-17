import PropTypes from "prop-types";

const Cook = ({cook}) => {
    const {recipe_name,preparing_time,calories} = cook;
    return (
        <div className="grid grid-cols-3 items-center text-center mt-4 p-2 text-sm bg-gray-100/70">
            <h1>{recipe_name}</h1>
            <h1 className="flex flex-col">{preparing_time}<span>minutes</span></h1>
            <h1 className="flex flex-col">{calories}<span>calories</span></h1>
        </div>
    );
};

export default Cook;

Cook.propTyprs ={
    cook:PropTypes.object.isRequired
}