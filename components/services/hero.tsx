import Link from 'next/link';
import GradientText from '../gradient-text';
import Motioned from '../motioned';
interface ServicesHeroProps {
  clickHandler: () => void;
}
const Hero: React.FC<ServicesHeroProps> = ({ clickHandler }) => {
  return (
    <Motioned.container
      id="services-hero"
      className="w-full h-screen flex flex-col justify-center bg-dark"
    >
      <Motioned.wrapper className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
        <>
          <Motioned.content>
            <>
              <h2 className="font-bold font-pop text-6xl md:text-7xl lg:text-8xl text-light mb-12 text-center">
                Explore{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-ocean to-melon">
                  Motioned
                </span>{' '}
                Services
              </h2>
            </>
          </Motioned.content>
          <Motioned.content className="flex items-center justify-center">
            <button
              onClick={clickHandler}
              className="font-bold border-b-4 w-max pb-2 mx-auto bg-clip-text text-transparent bg-gradient-to-r  from-ocean to-melon lg:bg-clip-content lg:from-dark rounded-none text-center lg:hover:border-light lg:hover:border-l-8 lg:hover:pl-4 lg:bg-dark lg:text-light font-pop text-lg md:text-lg lg:text-2xl lg:hover:animate-pulse transition-all hover lg:hover:bg-dark/70 transform lg:hover:translate-x-2"
            >
              Choose A Service
            </button>
          </Motioned.content>
        </>
      </Motioned.wrapper>
    </Motioned.container>
  );
};
export default Hero;
