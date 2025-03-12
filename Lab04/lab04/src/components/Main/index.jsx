import Menu from "../Menu"
import Sider from "./Sider"
import "./index.css"
export default function Main() {
    return (
        <>
            <div className="main flex justify-evenly">
                <Sider />
                <Menu />
            </div>
        </>
    )
}