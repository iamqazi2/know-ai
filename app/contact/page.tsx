import ContactSection from "../components/contact";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="relative">
        <ContactSection />
        <Footer />
        <div className="backdrop-blur-md bg-transparent fixed -bottom-1 left-0 w-full h-[80px] z-60 rounded-t-xl shadow-lg" />
      </div>
    </>
  );
}
