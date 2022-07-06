import goals from '@/db/goals';
import teams from '@/db/team';
import Link from 'next/link';
import GradientText from '../gradient-text';
import Motioned from '../motioned';
import GoalCard from './goal-card';
import MemberCard from './member-card';

const Team: React.FC = () => {
  return (
    <Motioned.container id="about-team" className="w-full h-max bg-light">
      <Motioned.wrapper className="w-full flex flex-col-reverse lg:grid lg:grid-cols-8 xl:grid-cols-12">
        <>
          <Motioned.container className="h-max lg:h-full flex flex-col justify-center pt-16 pb-16 px-8 lg:px-16 lg:py-28 lg:col-span-5 xl:col-span-7">
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
              {teams.map((team, index) => (
                <MemberCard {...team} key={index} />
              ))}
            </ul>
          </Motioned.container>
          <Motioned.container className="h-full flex flex-col justify-center lg:col-span-3 xl:col-span-5 relative">
            <Motioned.content className="px-8 pt-16 pb-16 lg:px-16 lg:py-12 w-full h-full flex flex-col justify-center mx-auto backdrop-blur-lg lg:rounded-l-xl bg-gradient-to-b lg:bg-gradient-to-r from-tangerine/80 to-sunflower/80">
              <>
                <Motioned.content>
                  <>
                    <h3 className="font-pop text-5xl lg:text-6xl xl:text-7xl text-center mb-4 lg:mb-6 font-bold text-light">
                      Our Team
                    </h3>
                    <p className="text-light/80 font-medium text-sand text-xl leading-8 lg:text-2xl lg:leading-10 text-center mb-8">
                      We are dedicated to provide our client&apos; scaleable &
                      sustainable web services for their businesses as
                      efficiently and productively as they need. We bring our
                      own expertise in each field and collaborate at all times
                      to maximize our workflows.
                    </p>
                    <Motioned.content className="w-full flex items-center">
                      <Link href="/works">
                        <a className="mx-auto px-8 py-3 rounded-xl bg-dark text-light shadow-md font-sand font-bold text-lg lg:text-xl transition-all hover lg:hover:bg-dark/70 transform lg:hover:translate-x-2">
                          Here Goes Our Works.
                        </a>
                      </Link>
                    </Motioned.content>
                  </>
                </Motioned.content>
              </>
            </Motioned.content>
          </Motioned.container>
        </>
      </Motioned.wrapper>
    </Motioned.container>
  );
};
export default Team;
