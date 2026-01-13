import Footer from "@/components/footer";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-linear-to-t from-[#1C1DF621] to-[#5D06E905] relative min-h-[calc(100vh-96px)]">
        {/* Main Content */}
        <MainContent />
      </div>
      
      {/* Footer is stick to the bottom */}
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}
