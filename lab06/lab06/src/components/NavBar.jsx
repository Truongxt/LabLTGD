import { NavLink } from "react-router"

function NavBar() {
    return (
        <>
            <div className="navbar">
                <img src="./Image 1858.png" alt="" width={100} height={30} />
                <div className="menu">
                    <ul>
                        <li>
                            <a>
                                <img src="./Squares four 1.png" alt="" />
                                DashBoard
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./Folder.png" alt="" />
                                Project
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./Groups.png" alt="" />
                                Teams
                            </a>
                        </li>
                        <li>
                            <a to={"/analyst"}>
                                <img src="./Pie chart.png" alt="" />
                                Analytics
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./Chat.png" alt="" />
                                Message
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="./Code.png" alt="" />
                                Integrations
                            </a>
                        </li>
                        <li style={{textAlign: "center"}}>
                            <img src="./Group.png" alt="" />

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar