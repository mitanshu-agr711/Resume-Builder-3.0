import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FirstPage from './login_page/homePage.jsx'
import RegisterPage from './login_page/register.jsx'
import LoginPage from './login_page/login.jsx'
import PersonalDetails from './details/personalDetails.jsx'
import Education from './details/education.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Back" element={<FirstPage />} />
        <Route path="/PersonalDetails" element={<PersonalDetails />} />
        <Route path="/Education" element={<Education/>} />
        
      </Routes>
    </Router>
  )
}

export default App
