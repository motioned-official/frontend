import Link from 'next/link';
import ServiceCard from './components/service-card';
import { Services } from './static';
import View from '@/components/view';
import GradientMotionedText from '@/components/gradient-motioned';
import HeroText from './components/hero-text';
import ServiceList from './components/service-list';
import PreviousWorks from './components/previous-works';
const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto min-h-screen grid grid-cols-1 pt-28 gap-8 place-content-center">
      <HeroText />
      <ServiceList />
      <PreviousWorks />
    </section>
  );
};
export default Hero;
