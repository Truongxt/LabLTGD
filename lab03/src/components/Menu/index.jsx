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
            <ul>
                {data.map((item, index) => {
                    return (
                        <>
                            <div className="recipes">
                                <img src={item.image} alt="" />
                                <h3>{item.title}</h3>
                                <p>15 Minutes</p>
                            </div>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default Menu;