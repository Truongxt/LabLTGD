import "./index.css"
export default function Header() {
    const menuItems = [
        "What to cook",
        "Recipes",
        "Ingredients",
        "Occasions",
        "About Us"
    ];
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center" >
                    <img src="./chef.png" alt="" className="h-15 w-15" />
                    <h2 className="text-pink-700 font-bold text-[20px] ">Chefify</h2>
                </div>

                {/* Search Bar */}
                <div className="flex items-center space-x-2 bg-white text-black px-3 py-1 rounded-md bg-">
                    <img src="./icons8-find-80.png" alt="Search Icon" className="h-6 w-6" />
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        className="outline-none w-48 bg-transparent"
                    />
                </div>

                {/* Navigation Menu */}
                <ul className="hidden md:flex space-x-6 text-sm font-medium">
                    {menuItems.map((item, index) => (
                        <li
                            className="hover:text-yellow-400 cursor-pointer transition duration-300"
                            key={index}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Recipe Box */}
                <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-400 transition duration-300">
                    <img src="./image.png" alt="Recipe Box" className="w-8 h-8" />
                    <span>Your Recipe Box</span>
                </div>

                {/* User Avatar */}
                <div className="flex items-center">
                    <img src="./avatar.png" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-yellow-400" />
                </div>
            </div>
        </>
    )
}