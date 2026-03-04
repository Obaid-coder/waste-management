import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Home.jsx'
import About from './about.jsx'
import AdminLogin from "./admin-login.jsx";
import UserLogin from './user-login.jsx';
import Contact from "./contact.jsx";
import Registration from './registration.jsx'
import AdminDash from "./admin-dashboard.jsx";
import UserDash from "./user-dashboard.jsx";
import WorkerLogin from "./worker-login.jsx";
import WorkerDash from "./worker-dash.jsx";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path='/admin-login' element={<AdminLogin/>}></Route>
        <Route path="/user-login" element={<UserLogin/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDash/>}></Route>
        <Route path='/user-dashboard' element={<UserDash/>}></Route>
        <Route path="/worker-login" element={<WorkerLogin />} />
        <Route path="/worker-dashboard" element={<WorkerDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;