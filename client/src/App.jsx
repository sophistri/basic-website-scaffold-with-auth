import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './AppRoutes/AppRoutes';
import Backdrop from './components/Backdrop';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Backdrop />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
