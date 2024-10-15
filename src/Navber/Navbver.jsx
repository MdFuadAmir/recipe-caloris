import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState } from "react";


const menuData = [
    {
        id:1,
        name: "Home",
        path: "/"
    },
    {
        id:2,
        name: "Recipe",
        path: "/"
    },
    {
        id:3,
        name: "About",
        path: "/"
    },
    {
        id:4,
        name: "Search",
        path: "/"
    },
]

const Navbver = () => {
    const [open, setOpen] = useState(false);

    const handelOpemMenu = () =>{
        setOpen(!open);
    }
    return (
        <>
        <div className="flex justify-between items-center py-2 px-4 max-w-6xl mx-auto">
            {/* project logo*/}
            <div>
                <h1 className="text-xl font-bold font-mono">RECIPE-CALORIS</h1>
            </div>
            <div>
            {/* menu section for desktop or laptop device*/}
            <div className="hidden md:block">
            <div className="flex items-center justify-center gap-6 font-semibold">
                {
                    menuData.map(menu => (<li className="list-none" key={menu.id}><Link to={menu.path}>{menu.name}</Link></li>))
                }
            </div>
            </div>
            {/* menu section for mobile device */}
            <div className="block md:hidden">
                <button onClick={handelOpemMenu}><TiThMenu size={25}/></button>
            </div>
            </div>
            {/* profile or search bar */}
            <div className="hidden lg:block">
            <div className="flex items-center gap-4">
                {/* sarch ber */}
                <div>
                <label className="p-2 rounded-full bg-slate-200 flex items-center gap-2">
                    <IoIosSearch/>
                    <input type="text" className="bg-slate-200 outline-none" placeholder="Search" />
                </label>
                </div>
                {/* profile */}
                <div className="p-2 bg-green-500 rounded-full">
                    <CgProfile size={20}/>
                </div>
            </div>
            </div>
        </div>
        {/* mobile device design */}
        {
            open ? <div className="space-y-3 font-serif font-bold text-lg bg-green-300 rounded-md mx-5 text-center p-4">
            {
                menuData.map(menu => (<li className="list-none" key={menu.id}><Link to={menu.path}>{menu.name}</Link></li>))
            }
        </div> : ""
        }
        </>
    );
};

export default Navbver;