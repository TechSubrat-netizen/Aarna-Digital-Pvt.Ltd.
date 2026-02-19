
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mainlayout from './Client/Layout/Mainlayout.jsx'
import Home from './Client/Components/Home.jsx'
import About from './Client/Components/About.jsx'
import Services from './Client/Components/Services.jsx'
import Projects from './Client/Components/Projects.jsx'
import Carrier from './Client/Components/Carrier.jsx'
import Contact from './Client/Components/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='carrier' element={<Carrier/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
