import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/layouts/userDashboard/UserLayout';
import DashboardPage from './components/pages/users/DashboardPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<UserLayout>{<DashboardPage />}</UserLayout>}
        />

        {/* handle route not found */}
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
