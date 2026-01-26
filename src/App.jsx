import { Route, Routes } from "react-router-dom"
import LoginPage from "./component/pages/LoginPage"
import Dashboard from "./component/pages/DashBoard"
import CreateProject from "./component/pages/createProject"
import ProjectCard from "./component/pages/showProjectCard"
import AngleLog from "./component/pages/AngleLog"
import DailySupervisionLog from "./component/pages/DailySupervisionLog"
import DailyDrillingSummaryLog from "./component/pages/DailyDrillingSummaryLog"
import Drilling from "./component/pages/Drilling"
import DrillingLog from "./component/pages/DrillingLog"
import GroutingLog from "./component/pages/GroutingLog"
import DailyGroutingLog from "./component/pages/DailyGroutingLog"

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
        <Route path="/projects/drilling" element={<Drilling />} />
        <Route path="/projects/drilling-log" element={<DrillingLog />} />
        <Route path="/projects/grouting-log" element={<GroutingLog />} />
        <Route path="/projects/dailyGrouting-log" element={<DailyGroutingLog />} />






    </Routes>
  )
}
export default App;
