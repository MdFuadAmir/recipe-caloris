

const Banner = () => {
    return (
        
        <div className="h-screen bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co.com/sbjZyGQ/istockphoto-1388791611-612x612.webp')] rounded-xl">
            <div className="bg-black flex flex-col items-center justify-center space-y-4 h-screen w-full rounded-xl bg-opacity-60 p-4">
            <h1 className="text-3xl md:text-5xl max-w-2xl text-center font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
            <p className="max-w-2xl text-white text-sm mx-auto text-center">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="w-full flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button className="py-2 px-6 bg-green-400 rounded-full font-semibold font-mono">Explore Now</button>
                <button className="py-2 px-6 rounded-full border-2 text-white font-mono">Our Feedback</button>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default Banner;

