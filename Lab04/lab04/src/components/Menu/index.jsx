import { useEffect, useState } from "react";
import "./style.css"
function Menu() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://67c81c8a0acf98d07084e590.mockapi.io/todo")
            .then(res => res.json())
            .then((data) => setData(data))
    }, [])
    return (
        <>
            <ul className="flex flex-wrap justify-evenly text-center items-center">
                <div className="w-full text-left">
                    <h1 className="text-[40px] bold">Salad (32)</h1>
                </div>
                {data.map((item, index) => {
                    return (
                        <>
                            <div className="recipes h-80 w-80 text-center m-12">
                                <img src={item.image} alt="" className="h-80 w-80" />
                                <div className="flex justify-between text-[30px]">
                                    <h3 className="text-nowrap text-center">{item.title}</h3>
                                    <h2>🎁</h2>
                                </div>
                                <p className="text-left text-[20px]">15 Minutes</p>
                            </div>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default Menu;