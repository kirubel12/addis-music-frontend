import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/HomePage"
import AddSongPage from "./pages/AddSongPage"
import Dashboard from "./pages/DashboardPage"


function App() {

  
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/addsong" element={<AddSongPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
