import { Routes, Route } from 'react-router-dom';
import SignInPage from '../components/login';
import Dashboard from '../components/Dashboard';
import Result from '../components/Result';
import Attendance from '../components/Attendance';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/result" element={<Result />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </div>
  );
};

export default App;
