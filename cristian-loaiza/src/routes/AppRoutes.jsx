import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiComponente from '../components/MiComponente';
import MiContador from '../components/MiContador';

const AppRoutes = () => {
    return (
    <Router>
        <Routes>
        <Route path="/micomponente" element={<MiComponente />} />
        <Route path="/micontador" element={<MiContador />} />
        <Route path="*" element={<MiComponente />} />
        </Routes>
    </Router>
    );
};

export default AppRoutes;
