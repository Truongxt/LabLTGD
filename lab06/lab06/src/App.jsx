import LayoutDefault from "./components/LayoutDefault"
import "./App.css"
import { Route, Routes } from "react-router"
import Dashboard from "./pages/Dashboard"
import Analyst from "./pages/Analyst"
import Project from "./pages/Project"
import Message from "./pages/Message"
import Team from "./pages/Team"
import Intergration from "./pages/Intergration"
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analyst" element={<Analyst />} />
          <Route path="/integration" element={<Intergration />} />
          <Route path="/project" element={<Project />} />
          <Route path="/message" element={<Message />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
