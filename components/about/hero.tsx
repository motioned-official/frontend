import goals from '@/db/goals';
import GradientText from '../gradient-text';
import Motioned from '../motioned';
import GoalCard from './goal-card';

const Hero: React.FC = () => {
  return (
    <Motioned.container id="about-hero" className="w-full lg:h-screen">
      <Motioned.wrapper className="w-full h-full grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-12">
        <>
          <Motioned.container className="h-full flex flex-col justify-center px-8 lg:px-16 py-28 lg:col-span-3 xl:col-span-5">
            <>
              <Motioned.content className="mb-4">
                <h2 className="text-center lg:text-left">
                  <span className="font-bold text-6xl lg:text-7xl font-pop">
                    <GradientText /> Seeks Success
                  </span>
                </h2>
              </Motioned.content>
              <Motioned.content>
                <p className="text-center lg:text-left font-sand font-medium text-2xl leading-9 lg:text-3xl lg:leading-[3rem] max-w-xl">
                  <span className="inline-block">
                    with{' '}
                    <strong className="inline-block bg-dark px-4 py-1 rounded-xl ">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-tangerine to-sunflower">
                        Three Goals
                      </span>
                    </strong>{' '}
                  </span>
                </p>
              </Motioned.content>
            </>
          </Motioned.container>
          <Motioned.container className="h-full flex flex-col justify-center px-8 lg:px-16 py-28 lg:col-span-5 xl:col-span-7">
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {goals.map((goal, index) => (
                <GoalCard {...goal} key={index} />
              ))}
            </ul>
          </Motioned.container>
        </>
      </Motioned.wrapper>
    </Motioned.container>
  );
};
export default Hero;
