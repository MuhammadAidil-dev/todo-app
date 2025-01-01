import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/layouts/userDashboard/UserLayout';
import DashboardPage from './components/pages/users/DashboardPage';
import MyTaskPage from './components/pages/users/MyTaskPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<UserLayout>{<DashboardPage />}</UserLayout>}
        />
        <Route
          path="/tasks"
          element={<UserLayout>{<MyTaskPage />}</UserLayout>}
        />

        {/* handle route not found */}
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
