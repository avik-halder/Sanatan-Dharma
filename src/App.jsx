import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Deities from './pages/Deities';
import Footer from './components/Footer';
import Practices from './pages/Practices';
import Festivals from './pages/Festivals';
import Temples from './pages/Temples';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import BrahmaPage from './pages/deities/Brahma';
import VishnuPage from './pages/deities/Vishnu';
import ShivaPage from './pages/deities/Shiva';
import DurgaPage from './pages/deities/Durga';
import GaneshaPage from './pages/deities/Ganesha';
import KrishnaPage from './pages/deities/Krishna';
import HanumanPage from './pages/deities/Hanuman';
import LakshmiPage from './pages/deities/Lakshmi';
import RamaPage from './pages/deities/Rama';
import SaraswatiPage from './pages/deities/Saraswati';
import DiwaliPage from './pages/festivals/Diwali';
import DurgaPujaPage from './pages/festivals/DurgaPuja';
import HoliPage from './pages/festivals/Holi';
import JanmashtamiPage from './pages/festivals/Janmashtami';
import MahaShivratriPage from './pages/festivals/MahaShivratri';
import GaneshChaturthiPage from './pages/festivals/GaneshChaturthi';
import VedasPage from './pages/resouces/Vedas';
import UpanishadsPage from './pages/resouces/Upanishads';
import PuranasPage from './pages/resouces/Puranas';
import EpicsPage from './pages/resouces/Epics';
import PujaPage from './pages/practices/Puja';
import YogaPage from './pages/practices/Yoga';
import MeditationPage from './pages/practices/Meditation';
import MantraChantingPage from './pages/practices/MantraChanting';
import BlogDetails from './components/BlogDetails';
import AllBlogs from './pages/Blogs';
import ParvatiPage from './pages/deities/Parvati';

const App = () => {
  return (
    <div className="selection:bg-orange-900 selection:text-orange-300">
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/deities" element={<Deities  />} />
            <Route path="/practices" element={<Practices />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/temples" element={<Temples />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact /> } />

            {/* blog-specific routes */}
            <Route path="/blogs/:blogId" element={<BlogDetails />} />
            <Route path="/blogs" element={<AllBlogs />} />

            {/* Deity-specific routes */}
            <Route path="/deities/brahma" element={<BrahmaPage /> } />
            <Route path="/deities/vishnu" element={<VishnuPage /> } />
            <Route path="/deities/shiva" element={<ShivaPage /> } />
            <Route path="/deities/durga" element={<DurgaPage />} />
            <Route path="/deities/parvati" element={<ParvatiPage />} />
            <Route path="/deities/lakshmi" element={<LakshmiPage />} />
            <Route path="/deities/saraswati" element={<SaraswatiPage />} />
            <Route path="/deities/ganesh" element={<GaneshaPage />} />
            <Route path="/deities/rama" element={<RamaPage />} />
            <Route path="/deities/krishna" element={<KrishnaPage />} />
            <Route path="/deities/hanuman" element={<HanumanPage />} />
            
            {/* Festival-specific routes */}
            <Route path="/festivals/diwali" element={<DiwaliPage />} />
            <Route path="/festivals/durga-puja" element={<DurgaPujaPage />} />
            <Route path="/festivals/holi" element={<HoliPage />} />
            <Route path="/festivals/ganesh-chaturthi" element={<GaneshChaturthiPage />} />
            <Route path="/festivals/janmashtami" element={<JanmashtamiPage />} />
            <Route path="/festivals/shivaratri" element={<MahaShivratriPage />} />

            {/* Resources-specific routes */}
            <Route path="/resources/vedas" element={<VedasPage />} />
            <Route path="/resources/upanishads" element={<UpanishadsPage />} />
            <Route path="/resources/puranas" element={<PuranasPage />} />
            <Route path="/resources/epics" element={<EpicsPage />} />

            {/* Practices-specific routes */}
            <Route path="/practices/puja" element={<PujaPage />} />
            <Route path="/practices/yoga" element={<YogaPage />} />
            <Route path="/practices/meditation" element={<MeditationPage />} />
            <Route path="/practices/mantra-chanting" element={<MantraChantingPage />} />

          </Routes>
          <Footer />
      </Router>
    </div>
  )
}

export default App
