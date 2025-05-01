import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LeagueList from './pages/LeagueList';
import LeagueDetail from './pages/LeagueDetail';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeagueList />} />
        <Route path="/league/:id" element={<LeagueDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
