import { Navbar } from "./components/NavBar";
import { BenefitsSection } from "./components/sections/BenefitsSection";
import { CTASection } from "./components/sections/CTASection";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { ProductsSection } from "./components/sections/ProductsSection";

function App() {
  return (
    <div className="min-h-screen bg-white antialiased" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}} />
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;