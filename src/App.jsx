import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Verification from './pages/Verification'
import ForgotPassword from './pages/ForgotPassword'
import CreateNewPass from './pages/CreateNewPass'
import SearchHotel from './pages/SearchHotel'
import SearchFlight from './pages/SearchFlight'

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/verification" element={<Verification/>} />
        <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
        <Route exact path="/newPassword" element={<CreateNewPass/>} />
        <Route exact path="/hotels" element={<SearchHotel/>} />
        <Route exact path="/flights" element={<SearchFlight/>} />
    </Routes>
    </>
    
  )
}

export default App
