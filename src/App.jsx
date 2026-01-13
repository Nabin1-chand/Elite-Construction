import { Route, Routes } from "react-router-dom"
import LoginPage from "./component/pages/LoginPage"
import Dashboard from "./component/pages/DashBoard"

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}
export default App;
