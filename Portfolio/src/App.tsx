import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
function App() {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skils" element={<Skills />}></Route>
          <Route path="/project" element={<Projects />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
