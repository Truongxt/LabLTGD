import LayoutDefault from "./components/LayoutDefault"
import "./App.css"
import { Route, Routes } from "react-router"
import TablePage from "./pages/Dashboard"
import Analyst from "./pages/Analyst"
import Intergration from "./pages/Intergration"
import Project from "./pages/Project"
import Message from "./pages/Message"
import Dashboard from "./pages/Dashboard"
import Team from "./pages/Team"
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
              <Route path="/" element = {<Dashboard/>}/>
              <Route path="/analyst" element = {<Analyst/>}/>
              <Route path="/integration" element = {<Intergration/>}/>
              <Route path="/project" element = {<Project/>}/>
              <Route path="/message" element = {<Message/>}/>
              <Route path="/team" element = {<Team/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
