
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"
import Dashboard from "./pages/Dashboard"
import Cabins from "./pages/Cabins"
import Users from "./pages/Users"
import Bookings from "./pages/Bookings"
import Account from "./pages/Account"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <>
    <GlobalStyles/>
      <BrowserRouter>
        <Routes>
           
           <Route index element={<Navigate replace to='dashboard'/>}/>
           
           <Route path="dashboard" element={<Dashboard/>}/>
           <Route path="bookings" element={<Bookings/>}/>
           <Route path="cabins" element={<Cabins/>}/>
           <Route path="users" element={<Users/>}/>
           <Route path='settings' element={<Settings/>}/>
           <Route path='accounts' element={<Account/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='*' element={<PageNotFound/>}/>

        </Routes>
      </BrowserRouter>
      
      </>
  )
}

export default App
