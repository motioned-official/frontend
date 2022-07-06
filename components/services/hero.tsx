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
              <h3 className="font-bold font-sand text-light mb-4 flex flex-col text-center space-y-2">
                <span className="text-xl lg:text-2xl">
                  From Simple Websites
                </span>
                <span className="text-2xl lg:text-3xl">
                  To Sophisticated Ecommerce Platform
                </span>
                <span className="font-bold text-xl lg:text-2xl">& More</span>
              </h3>
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
              className="inline-block border-l-0 w-full lg:w-max bg-clip-text text-transparent bg-gradient-to-r  from-ocean to-melon lg:bg-clip-content lg:from-dark rounded-none text-center lg:hover:border-light lg:hover:border-l-8 lg:hover:pl-4 lg:bg-dark lg:text-light font-sand font-bold text-lg md:text-lg lg:text-2xl lg:hover:animate-pulse transition-all hover lg:hover:bg-dark/70 transform lg:hover:translate-x-2"
            >
              Select The Service To Explore
            </button>
          </Motioned.content>
        </>
      </Motioned.wrapper>
    </Motioned.container>
  );
};
export default Hero;
