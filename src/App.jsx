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
import SummaryReportGraph from "./component/graphs/SummaryReport"
import DashBoardLayout from "./component/DashBoardLayout"
import DailySiteReport from "./component/pages/DailySiteReport"
import DevationGraph from "./component/pages/DevationGraph"
import DrillingHole from "./component/pages/DrillingHole"
import DailySitePhoto from "./component/pages/DailySitePhoto"

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
        <Route element={<DashBoardLayout />}>
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
        <Route path="/projects/summaryReport" element={<SummaryReportGraph />} />
        {/* dailySiteReport */}
        <Route path="/projects/dailySiteReport" element={<DailySiteReport />} />
        <Route path="/projects/devationGraph" element={<DevationGraph />} />
        <Route path="/drilling-hole" element={<DrillingHole />} />
        <Route path="/drilling-hole-log" element={<DrillingLog />} />
        <Route path="/projects/dailyPhotoSite" element={<DailySitePhoto />} />




 </Route>
    </Routes>






  )
}
export default App;
