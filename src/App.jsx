import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Plans from './components/Plans.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import QuoteSimulator from './components/QuoteSimulator.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Plans />
        <HowItWorks />
        <QuoteSimulator />
      </main>
      <Footer />
    </div>
  );
}
