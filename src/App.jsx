import { Route, Routes } from "react-router-dom"
import LoginPage from "./component/pages/LoginPage"
import Dashboard from "./component/pages/DashBoard"
import CreateProject from "./component/pages/createProject"
import ProjectCard from "./component/pages/showProjectCard"
import AngleLog from "./component/pages/AngleLog"
import DailySupervisionLog from "./component/pages/DailySupervisionLog"
import DailyDrillingSummaryLog from "./component/pages/DailyDrillingSummaryLog"

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/projects/create" element={<CreateProject />} />
       <Route path="/projects/showProject" element={<ProjectCard />} />
       <Route path="/projects/angle-log" element={<AngleLog />} />
        <Route path="/projects/supervision-log" element={<DailySupervisionLog />} />
        <Route path="/projects/dailyDrillingSummary-log" element={<DailyDrillingSummaryLog />} />


    </Routes>
  )
}
export default App;
