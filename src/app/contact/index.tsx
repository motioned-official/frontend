import HeroImage from './components/hero-image';
import HeroText from './components/hero-text';
const Hero: React.FC = () => {
  return (
    <section className="w-full relative max-w-6xl mx-auto p-8 py-28 lg:px-0 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center">
      <HeroText />
      <HeroImage />
    </section>
  );
};

export default Hero;
