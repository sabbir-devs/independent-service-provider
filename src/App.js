import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Blog from './Pages/Home/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
