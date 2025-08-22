import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import PortfolioPages from "../components/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <div className="relative">
        <Navbar/>
        <PortfolioPages />
        <Footer />
        <div className="backdrop-blur-md bg-transparent fixed -bottom-1 left-0 w-full h-[80px] z-60 rounded-t-xl shadow-lg" />
      </div>
    </>
  );
}
