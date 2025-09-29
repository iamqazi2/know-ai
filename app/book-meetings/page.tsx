import Navbar from "../components/navbar";
import BookMeetings from "../components/BookMeetings";
import Footer from "../components/Footer";

export default function BookMeetingsPage() {
  return (
    <div className="relative bg-black text-white">
      <Navbar />
      <BookMeetings />
      <Footer />
    </div>
  );
}