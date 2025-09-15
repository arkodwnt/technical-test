import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import News from './pages/News';

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lifestyle" element={<h1 className="p-10 text-3xl">Lifestyle Page</h1>} />
        <Route path="/business" element={<h1 className="p-10 text-3xl">Business Page</h1>} />
        <Route path="/celebrities" element={<h1 className="p-10 text-3xl">Celebrities Page</h1>} />
        <Route path="/sport" element={<h1 className="p-10 text-3xl">Sport Page</h1>} />
        <Route path="/news" element={<News />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
