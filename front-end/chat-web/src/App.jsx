import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import ChatHome from './components/pages/Home/ChatHome';
import Signup from './components/pages/Signup/Signup';
export default function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/chat-home" element={<ChatHome/>} /> */}
        <Route path="/chat-home/:friendId?" element={<ChatHome/>} />
      </Routes>
    </BrowserRouter>
  )
}
