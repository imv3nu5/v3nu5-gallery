import { Route, Routes, BrowserRouter } from 'react-router-dom';

import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';

import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from './components/Layout';
import Gallery1 from './components/Pages/Gallery1';
import Gallery2 from './components/Pages/Gallery2';
import Gallery3 from './components/Pages/Gallery3';


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CaseStudyShowcaseHome />} />
         
          <Route
            path="/Gallery2024"
            element={<Gallery1 />}
          />
           <Route
            path="/Gallery2025"
            element={<Gallery2 />}
          />
           <Route
            path="/Gallery2026"
            element={<Gallery3 />}
          />
          
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
