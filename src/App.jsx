import { Route, Routes } from "react-router-dom"
import LoginPage from "./component/pages/LoginPage"
import Dashboard from "./component/pages/DashBoard"
import CreateProject from "./component/pages/createProject"
import ProjectCard from "./component/pages/showProjectCard"

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/projects/create" element={<CreateProject />} />
       <Route path="/projects/showProject" element={<ProjectCard />} />

    </Routes>
  )
}
export default App;
