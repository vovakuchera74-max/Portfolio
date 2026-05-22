import {Home} from "./page/Home"
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App
