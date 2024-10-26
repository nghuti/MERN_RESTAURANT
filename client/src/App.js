import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import HomePage from './Pages/Home/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Pages/Menu/Menu.js';  
import About from './Pages/About/About.js';
import Contact from './Pages/Contact/Contact.js';
import BookTable from './Pages/Reservation/Reservation.js';
import Login from './Pages/Login/Login.js';
import Singup from './Pages/Signup/Signup.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<BookTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Singup />} />
       
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;