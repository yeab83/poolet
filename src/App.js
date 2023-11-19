import Footer1 from './component/footer 1/footer1';
import Footer2 from './component/footer 2/footer2';
import Header from './component/header/header';
import Aboutus from './page/About us/Aboutus';
import ContactPage from './page/contact/contact';

import Home from './page/home/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import RidePage from './page/rider/riderpage';
import Drivepage from './page/driver/driverpage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/ride" element={<RidePage />} />
        <Route path="/driver" element={<Drivepage />} />
      </Routes>
      <Footer1 />
      <Footer2 />
    </Router>
  );
}

export default App;
