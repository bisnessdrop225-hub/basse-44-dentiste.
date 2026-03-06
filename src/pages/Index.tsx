
port Navbar from '../components/elite/Navbar';
import Hero from '../components/elite/Hero';
import MarqueeBar from '../components/elite/MarqueeBar';
import EditorialIntro from '../components/elite/EditorialIntro';
import SmileGallery from '../components/elite/SmileGallery';
import Services from '../components/elite/Services';
import Amenities from '../components/elite/Amenities';
import Team from '../components/elite/Team';
import Testimonials from '../components/elite/Testimonials';
import BookingCTA from '../components/elite/BookingCTA';
import Location from '../components/elite/Location';
import Footer from '../components/elite/Footer';
import FloatingWhatsApp from '../components/elite/FloatingWhatsApp';

const CLINIC = 'Elite Dental Gallery';

export default function Home() {
  return (
    <div style={{ background: '#FFFFFF', overflowX: 'hidden' }}>
      <Navbar clinicName={CLINIC} />
      <Hero clinicName={CLINIC} />
      <MarqueeBar />
      <EditorialIntro />
      <SmileGallery />
      <Services />
      <Amenities />
      <Team clinicName={CLINIC} />
      <Testimonials />
      <BookingCTA />
      <Location />
      <Footer clinicName={CLINIC} />
      <FloatingWhatsApp />
    </div>
  );
}
