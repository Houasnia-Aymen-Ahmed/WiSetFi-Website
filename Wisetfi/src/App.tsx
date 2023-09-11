/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Services, Contact, Authenticate, About } from './components'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<Authenticate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
