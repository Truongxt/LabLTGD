import Content from "./Content"
import Sider from "./Sider"
import "./index.css"
export default function Main() {
    return (
        <>
            <div className="main">
                <Sider />
                <Content />
            </div>
        </>
    )
}