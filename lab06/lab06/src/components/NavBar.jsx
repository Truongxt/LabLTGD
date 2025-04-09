import { NavLink } from "react-router"

function NavBar() {
    return (
        <>
            <div className="navbar">
                <img src="./Image 1858.png" alt="" width={100} height={30} />
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink to={"/"} >
                                <img src="./Squares four 1.png" alt="" />
                                DashBoard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/project"}>
                                <img src="./Folder.png" alt="" />
                                Project
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/team"}>
                                <img src="./Groups.png" alt="" />
                                Teams
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/analyst"}>
                                <img src="./Pie chart.png" alt="" />
                                Analytics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"message"}>
                                <img src="./Chat.png" alt="" />
                                Message
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/integration"}>
                                <img src="./Code.png" alt="" />
                                Integrations
                            </NavLink>
                        </li>
                        <li style={{ textAlign: "center" }}>
                            <img src="./Group.png" alt="" />

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar