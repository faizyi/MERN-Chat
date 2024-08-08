import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/Login/Login';
import ChatHome from './components/pages/Home/ChatHome';

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/chat/:friendId" element={<ChatHome/>} />
      </Routes>
    </BrowserRouter>
  )
}
