import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import DashBoard from './pages/dashboard';
import Profile from './pages/profile';
import MyLeaveRequest from './pages/myLeaveRequest';
import LeaveCoveringRequest from './pages/leaveCoveringRequest';
import './assest/FA 6.4.0 Pro/css/all.min.css';
import AdminDashboard from './pages/adminDashboard';
import LeaveRequestView from './pages/leaveRequest';
import AddEmployee from './pages/addEmployee';
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Profile/view" element={<Profile />} />
            <Route path="/LeaveCoveringRequest" element={<LeaveCoveringRequest />} />
            <Route path='/Profile/MyLeaveRequest' element={<MyLeaveRequest />} />
            <Route path='/AdminDashboard' element={<AdminDashboard />} />
            <Route path='/LeaveRequests' element={<LeaveRequestView />} />
            <Route path='/AddEmployees' element={<AddEmployee />} />
          </Routes>
        </div>
      </Router>
    </SnackbarProvider>
  );
}

export default App;

