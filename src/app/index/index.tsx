import HeroImage from './components/hero-image';
import HeroText from './components/hero-text';
const Hero: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-28 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center">
      <HeroText />
      <HeroImage />
    </section>
  );
};
export default Hero;
