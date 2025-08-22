import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import PortfolioMainSection from "../components/portfolio/components/main-section.tsx";

export default function PortfolioPage() {
  return (
    <>
      <div className="">
        <Navbar />
        <PortfolioMainSection />

        <Footer />
        <div className="backdrop-blur-md bg-transparent fixed -bottom-1 left-0 w-full h-[80px] z-60 rounded-t-xl shadow-lg" />
      </div>
    </>
  );
}
