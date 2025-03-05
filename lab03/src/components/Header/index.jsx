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
            <div className="container">
                <div className="home">
                    <img src="./chef.png" alt="" />
                    <h2>Chefify</h2>
                </div>
                <div className="searchInput">
                    <img src="./icons8-find-80.png" alt="" />
                    <input type="text" value={"cakescascasa"} />
                </div>
                <ul className="list">
                    {/* <li className="box">What to cook</li>
                    <li className="box">Recipes</li>
                    <li className="box">Ingredients</li>
                    <li className="box">Occasions</li>
                    <li className="box">About Us</li> */}

                    {menuItems.map((item,index) =>{
                        return (
                            <li className="box" key={index}>{item}</li>
                        )
                    })}
                </ul>
                <div className="recipe">
                    <img src="./image.png" alt="" />
                    Your Recipe Box
                </div>
                <div className="findtar">
                    <img src="./avatar.png" alt="" />
                </div>
            </div>
        </>
    )
}