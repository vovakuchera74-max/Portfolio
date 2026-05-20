import {Home} from "./page/Home"
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  

  return (
    <div >
    <Header></Header>
    <Routes>
<Route path="/" element={<Home/>}></Route>
      
    </Routes>
<Footer></Footer>

  </div>)
}

export default App
