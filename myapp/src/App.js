import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { CartProvider } from './store/context/CartContext'; // Import the CartProvider

import LandingPage from './store/pages/LandingPage';
import MobilePage from './store/pages/MobilePage';
import CompPage from './store/pages/CompPage';
import WatchPage from './store/pages/WatchPage';
import MenPage from './store/pages/MenPage';
import WomanPage from './store/pages/WomanPage';
import FurniturePage from './store/pages/FurniturePage';
import AcPage from './store/pages/AcPage';
import KitchenPage from './store/pages/KitchenPage';
import MobileSingle from './store/singles/MobileSingle';
import UserCart from './store/UserCart';
import FridgePage from './store/pages/FridgePage';
import ComputerSingle from './store/singles/ComputerSingle';
import FurnitureSingle from './store/singles/FurnitureSingle';
import KitchenSingle from './store/singles/KitchenSingle';
import AcSingle from './store/singles/AcSingle';
import MenSingle from './store/singles/MenSingle';
import WatchSingle from './store/singles/WatchSingle';
import WomanSingle from './store/singles/WomanSingle';
import FridgeSingle from './store/singles/FridgeSingle';

const App = () => {
  return (
    <CartProvider> {/* Wrap the entire application with CartProvider */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/kitchen" element={<KitchenPage />} />
            <Route path="/mobiles" element={<MobilePage />} />
            <Route path="/computers" element={<CompPage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/fridge" element={<FridgePage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/woman" element={<WomanPage />} />
            <Route path="/furniture" element={<FurniturePage />} />
            <Route path="/ac" element={<AcPage />} />
            <Route path="/mobiles/:id" element={<MobileSingle />} />
            <Route path="/cart" element={<UserCart />} />
            <Route path="/ac/:id" element={<AcSingle />} />
            <Route path="/computers/:id" element={<ComputerSingle />} />
            <Route path="/furniture/:id" element={<FurnitureSingle />} />
            <Route path="/kitchen/:id" element={<KitchenSingle />} />
            <Route path="/men/:id" element={<MenSingle />} />
            <Route path="/watch/:id" element={<WatchSingle />} />
            <Route path="/woman/:id" element={<WomanSingle />} />
            <Route path="/fridge/:id" element={<FridgeSingle />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
