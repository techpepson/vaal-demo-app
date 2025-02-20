import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import PropertyListing from "./pages/PropertyListing";
import PropertyDetail from "./pages/PropertyDetail";
import VirtualTour from "./pages/VirtualTour";
import MarketAnalysis from "./pages/MarketAnalysis";
import MortgageCalculator from "./pages/MortgageCalculator";
import Auth from "./pages/Auth";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bookings from "./pages/Bookings";
import Chat from "./pages/Chat";
import BuyProperty from "./pages/BuyProperty";
import SellProperty from "./pages/SellProperty";
import RentProperty from "./pages/RentProperty";
import Confirmation from "./pages/Confirmation";
import PropertyManagement from "./pages/PropertyManagement";
import PropertyInquiry from "./pages/PropertyInquiry";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<PropertyListing />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/virtual-tour/:id" element={<VirtualTour />} />
            <Route path="/market-analysis" element={<MarketAnalysis />} />
            <Route
              path="/mortgage-calculator"
              element={<MortgageCalculator />}
            />
            <Route path="/auth" element={<Auth />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/buy-property" element={<BuyProperty />} />
            <Route path="/sell-property" element={<SellProperty />} />
            <Route path="/rent-property" element={<RentProperty />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route
              path="/property-management"
              element={<PropertyManagement />}
            />
            <Route
              path="/property-management/:id"
              element={<PropertyManagement />}
            />
            <Route path="/list-property" element={<PropertyListing />} />
            <Route path="/property-detail/:id" element={<PropertyDetail />} />
            <Route path="/property-inquiry" element={<PropertyInquiry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
