import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import FeaturesSection from './components/FeaturesSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';

// Marketing Website Layout
const MarketingSite = () => (
  <div className="min-h-screen bg-white">
    <main>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
    </main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Marketing Site */}
        <Route path="/" element={<MarketingSite />} />

        {/* Protected Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="bookings" element={<div className="p-4">Bookings Page (Coming Soon)</div>} />
          <Route path="clients" element={<div className="p-4">Clients Page (Coming Soon)</div>} />
          <Route path="settings" element={<div className="p-4">Settings Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
