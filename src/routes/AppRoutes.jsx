import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ChatPage from '../pages/ChatPage';
import LoginPage from '../pages/LoginPage';
import PrimeirosSocorrosPage from '../pages/PrimeirosSocorrosPage';
import TabuaDeMaresPage from '../pages/tabuaDeMaresPage';
import AreaDeRiscoPage from '../pages/AreaDeRiscoPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat-page" element={<ChatPage />} />
        <Route path="/primeiros-socorros" element={<PrimeirosSocorrosPage />} />
        <Route path="/tabua-de-mares" element={<TabuaDeMaresPage />} />
        <Route path="/areas-de-risco" element={<AreaDeRiscoPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;