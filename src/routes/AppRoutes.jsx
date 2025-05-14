import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AreasDeRiscoPage from '../pages/AreasDeRiscoPage';
import ChatPage from '../pages/ChatPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PrimeirosSocorrosPage from '../pages/PrimeirosSocorrosPage';
import SobrePage from '../pages/Sobre';
import TabuaDeMaresPage from '../pages/TabuaDeMaresPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/areas-de-risco" element={<AreasDeRiscoPage />} />
        <Route path="/chat-page" element={<ChatPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/primeiros-socorros" element={<PrimeirosSocorrosPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/tabua-de-mares" element={<TabuaDeMaresPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;