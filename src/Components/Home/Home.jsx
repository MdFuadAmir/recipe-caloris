import Banner from "../Banner/Banner";
import OurRecipies from "../OurRecipes/OurRecipies";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <Banner/>
            <OurRecipies/>
        </div>
    );
};

export default Home;