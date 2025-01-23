import Image from "next/image";
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Services from "@/components/Services";
import TimeLine from '@/components/TimeLine';
import Partnership from '@/components/Partnership';
import SustainabilityCommitment from '@/components/SustainabilityCommitment';
import AiSupportAssistant from '@/components/AiSupportAssistant';
import SecurityFeatures from "@/components/SecurityFeatures";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
export default function Home() {
  return (
   <>
   <Navbar />
   <Header />
   <Services />
   <TimeLine />
   <Partnership />
   <SecurityFeatures />
   <SustainabilityCommitment />
   <AiSupportAssistant />
   <Newsletter />
   <Footer />
   </>
  );
}
