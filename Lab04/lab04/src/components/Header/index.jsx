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
                    <img src="./chef.png" alt="" className="h-10 w-10" />
                    <h2>Chefify</h2>
                </div>
                <div className="flex items-center justify-between">
                    <img src="./icons8-find-80.png" alt="" className="h-10 w-10" />
                    <input type="text" value={"cakescascasa"} />
                </div>
                <ul className="list flex justify-between">
                    {menuItems.map((item, index) => {
                        return (
                            <li className="box p-10" key={index}>{item}</li>
                        )
                    })}
                </ul>
                <div className="recipe flex items-center">
                    <img src="./image.png" alt="" className="w-10 h-10 mr-2" />
                    Your Recipe Box
                </div>
                <div className="findtar">
                    <img src="./avatar.png" alt="" />
                </div>
            </div>
        </>
    )
}