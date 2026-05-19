import {Home} from "./page/Home"
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";

function App() {
  

  return (
    <div >
    <Header></Header>
    <Routes>
<Route path="/" element={<Home/>}></Route>
      
    </Routes>


  </div>)
}

export default App
