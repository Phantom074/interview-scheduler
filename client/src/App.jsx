import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ScheduleInterviewForm from './components/ScheduleInterviewForm';
import ScheduledList from './components/ScheduledList';

function App() {
  const isLoggedIn = localStorage.getItem("recruiter");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/schedule" element={isLoggedIn ? <ScheduleInterviewForm /> : <Navigate to="/login" />} />
        <Route path="/interviews" element={isLoggedIn ? <ScheduledList /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
