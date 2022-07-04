import View from '@/components/view';
import WarningText from '@/components/warning-text';

import HeroText from './components/hero-text';
import TeamList from './components/team-list';

const Hero: React.FC = () => {
  return (
    <section className="w-full relative max-w-6xl mx-auto p-8 py-28 lg:px-0 min-h-screen grid grid-cols-1 gap-8 place-content-center">
      <HeroText />
      <TeamList />
      <WarningText
        id="team-notice"
        textContent="depending on the need for special expertise, we have various
        connections that can help satisfy our clients' needs. In this
        case, we usually let clients directly connect with them or provide
        contact information."
        link={{
          to: '#',
          textContent: 'See the experts connected with our services.',
          color: 'blue-500',
        }}
        color="stone-100"
      />
    </section>
  );
};

export default Hero;
