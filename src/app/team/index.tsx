import GradientMotionedText from '@/components/gradient-motioned';
import View from '@/components/view';
import Image from 'next/image';
import HaneulChoi from 'public/team/haneul_choi.png';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import MemberCard from './components/member-card';

const Hero: React.FC = () => {
  return (
    <section className="w-full relative max-w-6xl mx-auto p-8 py-28 lg:px-0 min-h-screen grid grid-cols-1 gap-8 place-content-center">
      <View id="team-hero" className="">
        <article className="w-full h-full flex flex-col justify-center items-start">
          <h2 className="font-bold font-pop text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4">
            Team <GradientMotionedText query={{}} />
          </h2>
          <p className="font-pop leading-7 md:text-lg lg:text-xl lg:leading-8 mb-4">
            Our great products come from collaborations between talented &
            respectful team members from photographers, designers, project
            managers, to developers.
          </p>
        </article>
      </View>
      <article className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <MemberCard
          name="Haneul Choi"
          position="Founder & Lead Developer"
          img={HaneulChoi}
          links={{
            github: 'https://github.com/haneulab',
            linkedin: 'https://linkedin.com/in/haneulab',
          }}
        />
      </article>
      <View id="team-notice" className="">
        <p className="text-stone-600/60 pt-2 border-t">
          <span>
            *depending on the need for special expertise, we have various
            connections that can help satisfy our clients&apos; needs. In this
            case, we usually let clients directly connect with them or provide
            contact information.{' '}
            <a
              className="text-blue-500 transition-all hover hover:text-blue-400"
              href="#"
            >
              See the experts connected with our services.
            </a>
          </span>
        </p>
      </View>
    </section>
  );
};

export default Hero;
